import { CompanyModel } from './company.model';
import { CategoryModel } from './category.model';
import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType()
export class JobModel {
  @Field(() => ID)
  id: number;

  @Field()
  categoryId: number;

  @Field()
  companyId: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  salary?: number;

  @Field()
  district: string;

  @Field()
  city: string;

  @Field()
  image: string;

  @Field()
  slug: string;

  @Field(() => CompanyModel)
  company: CompanyModel;

  @Field(() => CategoryModel)
  category: CategoryModel;

  @Field()
  createdAt: string;
}
