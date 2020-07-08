import { githubService } from './github.service';
import {
  Resolver,
  Query,
  FieldResolver,
  Root,
  Mutation,
  Arg,
} from 'type-graphql';
import { GithubUserModel } from './models/github-user.model';
import { MembershipStatusModel } from './models/membership-status.mode';
import { GithubRepositoryModel } from './models/github-repository.model';
import { GithubContributorModel } from './models/github-contributor.model';

@Resolver(() => GithubUserModel)
export class GithubUserResolver {
  @Query(() => [GithubUserModel])
  async getOrgMembers() {
    return githubService.getOrgMembers();
  }

  @FieldResolver()
  name(@Root() user: GithubUserModel) {
    return user.login;
  }
}

@Resolver(() => GithubContributorModel)
export class GithubContributorResolver {
  @Query(() => [GithubContributorModel])
  async getOrgContributors() {
    return githubService.getOrgContributors();
  }

  @FieldResolver()
  name(@Root() contributor: GithubContributorModel) {
    return contributor.login;
  }
}

@Resolver(() => GithubRepositoryModel)
export class GithubRepositoryResolver {
  @Query(() => [GithubRepositoryModel])
  async getOrgRepositories() {
    return githubService.getOrgRepos();
  }
}

@Resolver(() => MembershipStatusModel)
export class GithubMembershipStatusResolver {
  @Mutation(() => MembershipStatusModel)
  async inviteOrgCollaborator(@Arg('username') username: string) {
    return githubService.inviteOrgCollaborator(username);
  }
}
