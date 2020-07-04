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

@Resolver(() => MembershipStatusModel)
export class GithubMembershipStatusResolver {
  @Mutation(() => MembershipStatusModel)
  async inviteOrgCollaborator(@Arg('username') username: string) {
    return githubService.inviteOrgCollaborator(username);
  }
}
