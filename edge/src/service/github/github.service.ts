import { HttpClient, HttpMethod } from '../../lib/http-client';
import { githubConfig } from '../../config/github.config';
import { GithubUserModel } from './models/github-user.model';
import { MembershipStatusModel } from './models/membership-status.mode';

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
}

export const githubService = new GithubService();
