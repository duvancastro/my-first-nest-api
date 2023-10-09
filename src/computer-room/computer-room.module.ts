import { Module } from '@nestjs/common';
import { ComputerRoomService } from './computer-room.service';
import { ComputerRoomController } from './computer-room.controller';

@Module({
  controllers: [ComputerRoomController],
  providers: [ComputerRoomService],
})
export class ComputerRoomModule {}
