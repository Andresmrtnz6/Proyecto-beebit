import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Participan } from '../../entities/Participan/participan.entity';
import { CreateParticipanDto } from '../../dto/participan/create-participan.dto';
import { UpdateParticipanDto } from '../../dto/participan/update-participan.dto';

@Injectable()
export class ParticipanService {
  constructor(
    @InjectRepository(Participan)
    private participanRepository: Repository<Participan>,
  ) {}

  findAll(): Promise<Participan[]> {
    return this.participanRepository.find({ relations: ['proyecto', 'staff'] });
  }

  findOne(id_proyecto: number, id_staff: number): Promise<Participan> {
    return this.participanRepository.findOne({
      where: { id_proyecto, id_staff },
      relations: ['proyecto', 'staff'],
    });
  }

  create(createParticipanDto: CreateParticipanDto): Promise<Participan> {
    const participacion = this.participanRepository.create(createParticipanDto);
    return this.participanRepository.save(participacion);
  }

  async update(
    id_proyecto: number,
    id_staff: number,
    updateParticipanDto: UpdateParticipanDto,
  ): Promise<Participan> {
    await this.participanRepository.update({ id_proyecto, id_staff }, updateParticipanDto);
    return this.participanRepository.findOne({
      where: { id_proyecto, id_staff },
      relations: ['proyecto', 'staff'],
    });
  }

  async delete(id_proyecto: number, id_staff: number): Promise<void> {
    await this.participanRepository.delete({ id_proyecto, id_staff });
  }
}
