import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(() => {
    const appService = { getHello: () => 'Hello World from Backend!' }; // O lo que sea que esté devolviendo
    appController = new AppController(appService as any);
  });

  describe('root', () => {
    it('should return "Hello World from Backend!"', () => {
      expect(appController.getHello()).toBe('Hello World from Backend!');
    });
  });
});
