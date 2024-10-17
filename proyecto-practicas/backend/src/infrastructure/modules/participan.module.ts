import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipanService } from '../application/participan/paticipan.service';
import { ParticipanController } from './participan.controller';
import { Participan } from '../entities/Participan/participan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Participan])],
  controllers: [ParticipanController],
  providers: [ParticipanService],
})
export class ParticipanModule {}
