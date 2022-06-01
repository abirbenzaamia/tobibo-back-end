import { Module } from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { MedecinController } from './medecin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medecin } from './entities/medecin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medecin])],
  controllers: [MedecinController],
  providers: [MedecinService],
})
export class MedecinModule {}
