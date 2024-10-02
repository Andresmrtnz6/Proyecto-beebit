import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipanService } from './paticipan.service';
import { ParticipanController } from './participan.controller';
import { Participan } from '../entities/Participan/participan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Participan])],
  controllers: [ParticipanController],
  providers: [ParticipanService],
})
export class ParticipanModule {}
