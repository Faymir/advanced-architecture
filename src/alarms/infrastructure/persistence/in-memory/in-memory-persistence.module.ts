import { CreateAlarmRepository } from 'src/alarms/application/ports/create-alarm.repository';
import { InMemoryAlarmRepository } from './repositories/alarm.repository';
import { Module } from '@nestjs/common';
import { FindAlarmRepository } from 'src/alarms/application/ports/find-alarms.repository';
import { UpsertMaterializedAlarmRepository } from 'src/alarms/application/ports/upsert-materialized-alarm.repository';

@Module({
  imports: [],
  providers: [
    InMemoryAlarmRepository,
    {
      provide: CreateAlarmRepository,
      useExisting: InMemoryAlarmRepository,
    },
    {
      provide: FindAlarmRepository,
      useExisting: InMemoryAlarmRepository,
    },
    {
      provide: UpsertMaterializedAlarmRepository,
      useExisting: InMemoryAlarmRepository,
    },
  ],
  exports: [CreateAlarmRepository],
})
export class InMemoryAlarmPersistenceModule {}