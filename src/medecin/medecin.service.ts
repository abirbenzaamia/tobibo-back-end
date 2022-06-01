import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Specialite } from 'src/specialite/entities/specialite.entity';
import { SpecialiteService } from 'src/specialite/specialite.service';
import { Repository } from 'typeorm';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';
import { Medecin } from './entities/medecin.entity';

@Injectable()
export class MedecinService {
  @InjectRepository(Medecin)
  private readonly repository: Repository<Medecin>;
  private readonly SpecialiteService: SpecialiteService;
  public async createMedecin(body: CreateMedecinDto): Promise<Medecin> {
    const medecin: Medecin = new Medecin();
    // get specialite
    medecin.nom = body.nom;
    medecin.prenom = body.prenom;
    medecin.email = body.email;
    medecin.num_tel = body.num_tel;
    medecin.specialite = body.specialite;
    return this.repository.save(medecin);
  }

  async findAllMedecins(): Promise<Medecin[]> {
    const medecins = await this.repository.find({});
    return medecins.map((medecin) => medecin);
  }
  async getSpecialitesOfMedecin(id: number): Promise<Specialite> {
    const medecin: Medecin = await this.repository.findOne({
      where: { id },
      relations: ['specialite'],
    });
    return medecin.specialite;
  }

  update(id: number, updateMedecinDto: UpdateMedecinDto) {
    return `This action updates a #${id} medecin`;
  }

  remove(id: number) {
    return `This action removes a #${id} medecin`;
  }
}
