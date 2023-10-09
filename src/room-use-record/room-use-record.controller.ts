import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomUseRecordService } from './room-use-record.service';
import { CreateRoomUseRecordDto } from './dto/create-room-use-record.dto';
import { UpdateRoomUseRecordDto } from './dto/update-room-use-record.dto';

@Controller('room-use-record')
export class RoomUseRecordController {
  constructor(private readonly roomUseRecordService: RoomUseRecordService) {}

  @Post()
  create(@Body() createRoomUseRecordDto: CreateRoomUseRecordDto) {
    return this.roomUseRecordService.create(createRoomUseRecordDto);
  }

  @Get()
  findAll() {
    return this.roomUseRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomUseRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomUseRecordDto: UpdateRoomUseRecordDto) {
    return this.roomUseRecordService.update(+id, updateRoomUseRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomUseRecordService.remove(+id);
  }
}
