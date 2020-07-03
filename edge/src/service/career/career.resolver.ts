import { Resolver, Query } from 'type-graphql';
import { careerService } from './career.service';
import { JobListModel } from './models/joblist.model';

@Resolver()
export class CareerResolver {
  @Query(() => JobListModel)
  async getCareerPostList() {
    const response = await careerService.getJobList();
    return response;
  }
}
