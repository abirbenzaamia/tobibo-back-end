import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HopitalService } from './hopital.service';
import { CreateHopitalDto } from './dto/create-hopital.dto';
import { UpdateHopitalDto } from './dto/update-hopital.dto';

@Controller('hopital')
export class HopitalController {
  constructor(private readonly hopitalService: HopitalService) {}

  @Post()
  create(@Body() createHopitalDto: CreateHopitalDto) {
    return this.hopitalService.create(createHopitalDto);
  }

  @Get()
  findAll() {
    return this.hopitalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hopitalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHopitalDto: UpdateHopitalDto) {
    return this.hopitalService.update(+id, updateHopitalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hopitalService.remove(+id);
  }
}
