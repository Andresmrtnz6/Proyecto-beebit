import { PartialType } from '@nestjs/swagger';
import { CreateParticipanDto } from './create-participan.dto';

export class UpdateParticipanDto extends PartialType(CreateParticipanDto) {}
