import { TypeOrmModule } from '@nestjs/typeorm';
import { AlarmEntity } from './entities/alarm.entity';
import { CreateAlarmRepository } from 'src/alarms/application/ports/create-alarm.repository';
import { OrmCreateAlarmRepository } from './repositories/create-alarm.repository';
import { Module } from '@nestjs/common';
import { AlarmItemEntity } from './entities/alarm-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlarmEntity, AlarmItemEntity])],
  providers: [
    {
      provide: CreateAlarmRepository,
      useClass: OrmCreateAlarmRepository, // 💡 This is where we bind the port to an adapter
    },
  ],
  exports: [CreateAlarmRepository],
})
export class OrmAlarmPersistenceModule {}
