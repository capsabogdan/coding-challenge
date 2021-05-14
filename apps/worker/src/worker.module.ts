import { HttpModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';

@Module({
  imports: [HttpModule],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
