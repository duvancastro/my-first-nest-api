import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComputerRoomService } from './computer-room.service';
import { CreateComputerRoomDto } from './dto/create-computer-room.dto';
import { UpdateComputerRoomDto } from './dto/update-computer-room.dto';

@Controller('computer-room')
export class ComputerRoomController {
  constructor(private readonly computerRoomService: ComputerRoomService) {}

  @Post()
  create(@Body() createComputerRoomDto: CreateComputerRoomDto) {
    return this.computerRoomService.create(createComputerRoomDto);
  }

  @Get()
  findAll() {
    return this.computerRoomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.computerRoomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComputerRoomDto: UpdateComputerRoomDto) {
    return this.computerRoomService.update(+id, updateComputerRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.computerRoomService.remove(+id);
  }
}
