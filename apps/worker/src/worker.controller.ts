import { Controller, HttpService } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { WorkerService } from './worker.service';

@Controller()
export class WorkerController {
  constructor(
    private readonly workerService: WorkerService,
    private httpService: HttpService,
  ) {}

  getHello(): string {
    return this.workerService.getHello();
  }

  @MessagePattern('hello')
  async accumulate() {
    console.log('Receive message from publisher!');
    // return (values ?? []).reduce((acc, curr) => acc + curr);
  }

  //3. Setup an http module that worker can use to communicate with Hubspot.
  // You can setup a Hubspot developer account or mock the data. Depending on what you prefer.
  API_KEY = 'bca8ecd4-a198-48b6-a243-bd59efb909be';
  contacts = `'https://api.hubapi.com/contacts/v1/lists/all/contacts/recent?hapikey'}=${this.API_KEY}`;
  response = await this.request(this.contacts);

  async request<TResponse>(url: string): Promise<TResponse> {
    return fetch(url).then((response) =>
      response.json().catch((error) => {
        console.error(error);
      }),
    );
  }
}
