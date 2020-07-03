import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class PaginationMetaModel {
  @Field()
  currentPage: number;

  @Field()
  from: number;

  @Field()
  lastPage: number;

  @Field()
  perPage: number;

  @Field()
  to: number;

  @Field()
  total: number;
}
