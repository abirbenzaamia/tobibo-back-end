import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSpecialiteDto } from './dto/create-specialite.dto';
import { UpdateSpecialiteDto } from './dto/update-specialite.dto';
import { Specialite } from './entities/specialite.entity';

@Injectable()
export class SpecialiteService {
  @InjectRepository(Specialite)
  private readonly repository: Repository<Specialite>;

  public createSpecialite(body: CreateSpecialiteDto): Promise<Specialite> {
    const specialite: Specialite = new Specialite();
    specialite.nom = body.nom;
    specialite.description = body.description;
    return this.repository.save(specialite);
  }

  public async getAllSpecialites(): Promise<Specialite[]> {
    const specialites = await this.repository.find({});
    return specialites.map((specialite) => specialite);
  }

  async findOne(id: number): Promise<Specialite> {
    const specialite = await this.repository.findOne({ where: { id } });
    return specialite;
  }

  update(id: number, updateSpecialiteDto: UpdateSpecialiteDto) {
    return `This action updates a #${id} specialite`;
  }

  remove(id: number) {
    return `This action removes a #${id} specialite`;
  }
}
