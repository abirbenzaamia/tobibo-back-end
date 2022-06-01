import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { UserModule } from './user/user.module';
import { MedecinModule } from './medecin/medecin.module';
import { HopitalModule } from './hopital/hopital.module';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { SpecialiteModule } from './specialite/specialite.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UserModule,
    AuthModule,
    MedecinModule,
    HopitalModule,
    RendezVousModule,
    SpecialiteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
