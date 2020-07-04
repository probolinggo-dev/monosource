import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class GithubUserModel {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  login: string;

  @Field()
  nodeId: string;

  @Field()
  avatarUrl: string;

  @Field()
  gravatarId: string;

  @Field()
  url: string;

  @Field()
  htmlUrl: string;
}
