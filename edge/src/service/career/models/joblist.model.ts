import { JobModel } from './job.model';
import { PaginationMetaModel } from './paginationMeta.model';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class JobListModel {
  @Field(() => [JobModel])
  data: JobModel[];

  @Field(() => PaginationMetaModel)
  meta: PaginationMetaModel;
}
