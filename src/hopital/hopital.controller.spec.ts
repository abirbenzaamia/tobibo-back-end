import { Test, TestingModule } from '@nestjs/testing';
import { HopitalController } from './hopital.controller';
import { HopitalService } from './hopital.service';

describe('HopitalController', () => {
  let controller: HopitalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HopitalController],
      providers: [HopitalService],
    }).compile();

    controller = module.get<HopitalController>(HopitalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
