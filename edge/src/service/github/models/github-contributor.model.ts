import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class GithubContributorModel {
  @Field(() => ID)
  id: number;

  @Field()
  login: string;

  @Field()
  name: string;

  @Field()
  nodeId: string;

  @Field()
  avatarUrl: string;

  @Field()
  htmlUrl: string;

  @Field()
  contributions: number;
}
