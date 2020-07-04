import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class MembershipStatusModel {
  @Field(() => String)
  role: 'member' | 'maintainer';

  @Field(() => String)
  state: 'active' | 'pending';
}
