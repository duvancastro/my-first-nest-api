import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComputersModule } from './computers/computers.module';
import { StudentsModule } from './students/students.module';
import { RoomUseRecordModule } from './room-use-record/room-use-record.module';
import { ComputerRoomModule } from './computer-room/computer-room.module';

@Module({
  imports: [ComputersModule, StudentsModule, RoomUseRecordModule, ComputerRoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
