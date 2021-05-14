import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkerService {
  getHello(): string {
    return 'Hello Weld! Here is the Worker Service';
  }

  all(): string {
    return 'Hello from Worker service';
  }
}
