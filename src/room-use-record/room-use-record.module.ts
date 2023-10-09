import { Module } from '@nestjs/common';
import { RoomUseRecordService } from './room-use-record.service';
import { RoomUseRecordController } from './room-use-record.controller';

@Module({
  controllers: [RoomUseRecordController],
  providers: [RoomUseRecordService],
})
export class RoomUseRecordModule {}
