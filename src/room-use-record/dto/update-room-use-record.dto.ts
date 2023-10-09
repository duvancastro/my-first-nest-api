import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomUseRecordDto } from './create-room-use-record.dto';

export class UpdateRoomUseRecordDto extends PartialType(CreateRoomUseRecordDto) {}
