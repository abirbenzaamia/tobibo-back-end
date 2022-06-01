import { Injectable } from '@nestjs/common';
import { CreateHopitalDto } from './dto/create-hopital.dto';
import { UpdateHopitalDto } from './dto/update-hopital.dto';

@Injectable()
export class HopitalService {
  create(createHopitalDto: CreateHopitalDto) {
    return 'This action adds a new hopital';
  }

  findAll() {
    return `This action returns all hopital`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hopital`;
  }

  update(id: number, updateHopitalDto: UpdateHopitalDto) {
    return `This action updates a #${id} hopital`;
  }

  remove(id: number) {
    return `This action removes a #${id} hopital`;
  }
}
