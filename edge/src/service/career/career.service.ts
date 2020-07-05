import { HttpClient, HttpMethod } from '../../lib/http-client';
import { careerConfig } from '../../config/career.config';
import { JobListModel } from './models/joblist.model';

class CareerService extends HttpClient {
  constructor() {
    super({ host: careerConfig().baseUrl });
  }

  async getJobList(): Promise<JobListModel> {
    const response = await this.call<JobListModel>({
      method: HttpMethod.GET,
      path: '/api/post',
    });

    return response;
  }
}

export const careerService = new CareerService();
