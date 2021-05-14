import { NestFactory } from '@nestjs/core';
import { WorkerModule } from './worker.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WorkerModule,
    {
      // 1. Configure a message protocol between the two services.
      transport: Transport.NATS,
      // NATS was chosen as a communication protocol, as it allows a request-response flow between the microservices
      // Setup communication protocol here
      options: {
        url: 'nats://localhost:4222',
      },
    },
  );
  app.listen(async () => {
    console.log('Microservice is listening');
  });
}
bootstrap();
