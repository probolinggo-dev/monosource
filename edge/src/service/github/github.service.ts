import { HttpClient, HttpMethod } from '../../lib/http-client';
import { githubConfig } from '../../config/github.config';
import { GithubUserModel } from './models/github-user.model';
import { MembershipStatusModel } from './models/membership-status.mode';
import { GithubRepositoryModel } from './models/github-repository.model';
import { GithubContributorModel } from './models/github-contributor.model';

class GithubService extends HttpClient {
  private organizationName: string;
  constructor() {
    super({
      host: githubConfig().host,
      headers: {
        Authorization: `Bearer ${githubConfig().accessToken}`,
        'User-Agent': 'Core',
      },
    });

    this.organizationName = githubConfig().orgName;
  }

  async inviteOrgCollaborator(
    username: string
  ): Promise<MembershipStatusModel> {
    return await this.call<MembershipStatusModel>({
      method: HttpMethod.PUT,
      path: `/orgs/${this.organizationName}/teams/collaborator/memberships/${username}`,
    });
  }

  async getOrgMembers(): Promise<[GithubUserModel]> {
    return await this.call<[GithubUserModel]>({
      method: HttpMethod.GET,
      path: `/orgs/${this.organizationName}/members`,
    });
  }

  async getOrgRepos(): Promise<[GithubRepositoryModel]> {
    return await this.call<[GithubRepositoryModel]>({
      method: HttpMethod.GET,
      path: `/orgs/${this.organizationName}/repos`,
    });
  }

  async getOrgContributors(): Promise<GithubContributorModel[]> {
    const repos = await this.getOrgRepos();
    const promises = repos.map((repo) => {
      return this.call<GithubContributorModel[]>({
        method: HttpMethod.GET,
        path: `/repos/${this.organizationName}/${repo.name}/contributors`,
      });
    });

    return Promise.all(promises).then((repoContributions) => {
      const aggregation: Record<string, GithubContributorModel> = {};

      repoContributions.forEach((contributors) => {
        contributors.forEach((contributor) => {
          if (aggregation.hasOwnProperty(contributor.id)) {
            aggregation[contributor.id].contributions +=
              contributor.contributions;
          } else {
            aggregation[contributor.id] = contributor;
          }
        });
      });

      return Object.values(aggregation);
    });
  }
}

export const githubService = new GithubService();
