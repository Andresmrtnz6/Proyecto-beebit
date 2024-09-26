import { Test, TestingModule } from '@nestjs/testing';
import { ParticipanController } from '../../src/participan/participan.controller';
import { ParticipanService } from '../../src/participan/participan.service';
import { CreateParticipanDto } from '../../src/dto/create-participan.dto';

describe('ParticipanController', () => {
  let controller: ParticipanController;
  let service: ParticipanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticipanController],
      providers: [
        {
          provide: ParticipanService,
          useValue: {
            assignStaffToProject: jest.fn(),
            removeStaffFromProject: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ParticipanController>(ParticipanController);
    service = module.get<ParticipanService>(ParticipanService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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

    expect(await controller.assignStaff('1', createParticipanDto)).toEqual(
      createParticipanDto,
    );
  });
});
