import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosController } from '../../src/proyectos/proyectos.controller';
import { ProyectosService } from '../../src/proyectos/proyectos.service';
import { CreateProyectoDto } from '../../src/dto/create-proyecto.dto';

describe('ProyectosController', () => {
  let controller: ProyectosController;
  let service: ProyectosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProyectosController],
      providers: [
        {
          provide: ProyectosService,
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ProyectosController>(ProyectosController);
    service = module.get<ProyectosService>(ProyectosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new project', async () => {
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

    expect(await controller.createProyecto(createProyectoDto)).toEqual(
      createProyectoDto,
    );
  });
});
