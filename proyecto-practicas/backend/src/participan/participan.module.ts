import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipanController } from './participan.controller';
import { ParticipanService } from './participan.service';
import { Participan } from '../entities/Participan';

@Module({
  imports: [TypeOrmModule.forFeature([Participan])],
  controllers: [ParticipanController],
  providers: [ParticipanService],
})
export class ParticipanModule {}
