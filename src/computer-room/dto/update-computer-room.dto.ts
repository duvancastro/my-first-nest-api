import { PartialType } from '@nestjs/mapped-types';
import { CreateComputerRoomDto } from './create-computer-room.dto';

export class UpdateComputerRoomDto extends PartialType(CreateComputerRoomDto) {}
