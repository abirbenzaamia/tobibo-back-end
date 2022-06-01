import { Module } from '@nestjs/common';
import { HopitalService } from './hopital.service';
import { HopitalController } from './hopital.controller';

@Module({
  controllers: [HopitalController],
  providers: [HopitalService]
})
export class HopitalModule {}
