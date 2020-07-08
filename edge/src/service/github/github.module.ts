import {
  GithubUserResolver,
  GithubMembershipStatusResolver,
  GithubRepositoryResolver,
  GithubContributorResolver,
} from './github.resolver';

export default {
  resolvers: [
    GithubUserResolver,
    GithubMembershipStatusResolver,
    GithubRepositoryResolver,
    GithubContributorResolver,
  ],
};
