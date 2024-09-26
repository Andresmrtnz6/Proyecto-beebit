import { Test, TestingModule } from '@nestjs/testing';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { CreateStaffDto } from '../dto/create-staff.dto';

describe('StaffController', () => {
  let controller: StaffController;
  let service: StaffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffController],
      providers: [
        {
          provide: StaffService,
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<StaffController>(StaffController);
    service = module.get<StaffService>(StaffService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new staff member', async () => {
    const createStaffDto: CreateStaffDto = {
      nombre: 'John',
      apellidos: 'Doe',
      dni: '12345678A',
      telefono: '123456789',
      fecha_nacimiento: new Date('1980-01-01'),
    };

    jest
      .spyOn(service, 'create')
      .mockImplementation(() => Promise.resolve(createStaffDto));

    expect(await controller.createStaff(createStaffDto)).toEqual(
      createStaffDto,
    );
  });
});
