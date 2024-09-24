describe('Gestión de Proyectos', () => {
    it('Carga la página de proyectos', () => {
      cy.visit('http://localhost:3000/proyectos');
      cy.contains('Proyectos');
    });
  });
  