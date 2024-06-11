import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FindAlarmRepository } from 'src/alarms/application/ports/find-alarms.repository';
import { MaterializedAlarmView } from '../schemas/materialized-alarm-view.schema';

@Injectable()
export class OrmFindAlarmRepository implements FindAlarmRepository {
  constructor(
    @InjectModel(MaterializedAlarmView.name)
    private readonly alarmModel: Repository<MaterializedAlarmView>,
  ) {}

  async findAll(): Promise<MaterializedAlarmView[]> {
    return await this.alarmModel.find();
  }
}
