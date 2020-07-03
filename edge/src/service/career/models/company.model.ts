import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class CompanyModel {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  slug: string;

  @Field()
  createdAt: string;
}
