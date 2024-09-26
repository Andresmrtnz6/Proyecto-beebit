import { Test, TestingModule } from '@nestjs/testing';
import { ParticipanService } from '../../src/participan/participan.service';
import { CreateParticipanDto } from '../../src/dto/create-participan.dto';

describe('ParticipanService', () => {
  let service: ParticipanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticipanService],
    }).compile();

    service = module.get<ParticipanService>(ParticipanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should assign a staff to a project', async () => {
    const createParticipanDto: CreateParticipanDto = {
      id_proyecto: '1',
      id_staff: '1',
      fecha_participacion: new Date(),
    };

    jest
      .spyOn(service, 'assignStaffToProject')
      .mockImplementation(() => Promise.resolve(createParticipanDto));

    expect(await service.assignStaffToProject('1', '1')).toEqual(
      createParticipanDto,
    );
  });
});
