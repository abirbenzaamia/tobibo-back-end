import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';
import { Specialite } from 'src/specialite/entities/specialite.entity';

@Controller('medecin')
export class MedecinController {
  constructor(private readonly medecinService: MedecinService) {}

  @Post()
  create(@Body() createMedecinDto: CreateMedecinDto) {
    return this.medecinService.createMedecin(createMedecinDto);
  }

  @Get()
  findAll() {
    return this.medecinService.findAllMedecins();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medecinService.getSpecialitesOfMedecin(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedecinDto: UpdateMedecinDto) {
    return this.medecinService.update(+id, updateMedecinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medecinService.remove(+id);
  }
}
