import { Injectable } from '@nestjs/common';
import { CreateComputerRoomDto } from './dto/create-computer-room.dto';
import { UpdateComputerRoomDto } from './dto/update-computer-room.dto';

@Injectable()
export class ComputerRoomService {
  create(createComputerRoomDto: CreateComputerRoomDto) {
    return 'This action adds a new computerRoom';
  }

  findAll() {
    return `This action returns all computerRoom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} computerRoom`;
  }

  update(id: number, updateComputerRoomDto: UpdateComputerRoomDto) {
    return `This action updates a #${id} computerRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} computerRoom`;
  }
}
