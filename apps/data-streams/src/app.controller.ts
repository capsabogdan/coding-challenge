import { Body, Controller, Get, Inject } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('COOL_SERVICE') private client: ClientProxy) {}

  @Get()
  getHello() {
    this.client.send('hello', 'this is hello');
  }

  //2. Create an endpoint on data-streams that tells worker to start fetching data on an interval (every 5 minutes).
  @Cron(CronExpression.EVERY_5_MINUTES)
  fetchInterval(): void {
    console.log('Fetch command sent to Worker every 5 min');
  }

  // 5. Make an endpoint on data-streams that can fetch the data stored on data-streams.
  // Use whatever storage you see fit but tell us why you chose it.

 
}
