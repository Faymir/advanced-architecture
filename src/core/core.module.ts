import 'dotenv/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationBootstrapOptions } from 'src/common/interfaces/application-bootstrap-options.interface';
import { EVENT_STORE_CONNECTION } from './core.constants';
@Module({
  imports: [
    // eslint-disable-next-line prettier/prettier
    MongooseModule.forRoot(process.env.MONGO_EVENT_STORE_URI, { // 👈 from docker-compose
      connectionName: EVENT_STORE_CONNECTION, // 👈 our new namespace for this mongodb
      directConnection: true, // 👈 needed needed to connect to local replica sets
    }),
  ],
})
export class CoreModule {
  static forRoot(options: ApplicationBootstrapOptions) {
    const imports =
      options.driver === 'orm'
        ? [
            // We are going to hardcode the connection options for simplicity
            // but you can use a configuration file or environment variables
            TypeOrmModule.forRoot({
              type: 'postgres',
              host: process.env.PG_HOST,
              username: process.env.PG_USERNAME,
              password: process.env.PG_PASSWORD,
              autoLoadEntities: true,
              synchronize: true,
            }),
            MongooseModule.forRoot(process.env.MONGO_URI),
          ]
        : [];

    return {
      module: CoreModule,
      imports,
    };
  }
}
