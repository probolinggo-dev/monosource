import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class GithubRepositoryModel {
  @Field(() => ID)
  id: number;

  @Field()
  nodeId: string;

  @Field()
  name: string;

  @Field()
  fullName: string;

  @Field()
  private: boolean;

  @Field()
  htmlUrl: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  language: string;

  @Field()
  forksCount: number;

  @Field()
  archived: boolean;

  @Field()
  openIssuesCount: string;

  @Field()
  stargazersCount: number;

  @Field()
  watchersCount: number;
}
