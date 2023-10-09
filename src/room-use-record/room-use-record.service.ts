import { Injectable } from '@nestjs/common';
import { CreateRoomUseRecordDto } from './dto/create-room-use-record.dto';
import { UpdateRoomUseRecordDto } from './dto/update-room-use-record.dto';

@Injectable()
export class RoomUseRecordService {
  create(createRoomUseRecordDto: CreateRoomUseRecordDto) {
    return 'This action adds a new roomUseRecord';
  }

  findAll() {
    return `This action returns all roomUseRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roomUseRecord`;
  }

  update(id: number, updateRoomUseRecordDto: UpdateRoomUseRecordDto) {
    return `This action updates a #${id} roomUseRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} roomUseRecord`;
  }
}
