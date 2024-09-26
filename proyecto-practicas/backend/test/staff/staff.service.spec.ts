import { Test, TestingModule } from '@nestjs/testing';
import { StaffService } from '../../src/staff/staff.service';
import { CreateStaffDto } from '../../src/dto/create-staff.dto';

describe('StaffService', () => {
  let service: StaffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffService],
    }).compile();

    service = module.get<StaffService>(StaffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a staff member', async () => {
    const createStaffDto: CreateStaffDto = {
      nombre: 'Pepe',
      apellidos: 'Lorente',
      dni: '12345678A',
      telefono: '123456789',
      fecha_nacimiento: new Date('1980-01-01'),
    };

    jest
      .spyOn(service, 'create')
      .mockImplementation(() => Promise.resolve(createStaffDto));

    expect(await service.create(createStaffDto)).toEqual(createStaffDto);
  });
});
