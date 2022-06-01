import { PartialType } from '@nestjs/mapped-types';
import { CreateHopitalDto } from './create-hopital.dto';

export class UpdateHopitalDto extends PartialType(CreateHopitalDto) {}
