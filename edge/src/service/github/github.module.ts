import {
  GithubUserResolver,
  GithubMembershipStatusResolver,
} from './github.resolver';

export default {
  resolvers: [GithubUserResolver, GithubMembershipStatusResolver],
};
