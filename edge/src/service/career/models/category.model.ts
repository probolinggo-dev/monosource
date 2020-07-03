import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class CategoryModel {
  @Field(() => ID)
  id: number;

  @Field()
  title: number;

  @Field()
  description: string;

  @Field()
  slug: string;

  @Field()
  createdAt: string;
}
