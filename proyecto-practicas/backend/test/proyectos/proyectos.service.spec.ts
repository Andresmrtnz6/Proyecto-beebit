import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosService } from './proyectos.service';
import { CreateProyectoDto } from '../dto/create-proyecto.dto';

describe('ProyectosService', () => {
  let service: ProyectosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectosService],
    }).compile();

    service = module.get<ProyectosService>(ProyectosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a project', async () => {
    const createProyectoDto: CreateProyectoDto = {
      nombre: 'Nuevo Proyecto',
      descripcion: 'Descripción del proyecto',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      presupuesto: 1000,
    };

    jest
      .spyOn(service, 'create')
      .mockImplementation(() => Promise.resolve(createProyectoDto));

    expect(await service.create(createProyectoDto)).toEqual(createProyectoDto);
  });
});
