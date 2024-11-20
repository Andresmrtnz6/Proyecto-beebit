FUNCIONALIDADES DEL PROYECTO


PRÁCTICAS 2024
ANDRÉS LORENTE MARTÍNEZ
FECHA:24/09/2024



El proyecto se organiza bajo un enfoque de MVC y arquitectura orientada a API REST,
asegurando también que el frontend (Next.js) esté correctamente integrado con el backend
(Nest.js).


1. GESTIÓN DE PROYECTOS



   
Backend (Nest.js):

● Modelo: Definiré la entidad Proyecto en TypeORM que refleje la tabla en
PostgreSQL.

● Controladores: Definiré un controlador ProyectoController con los métodos
para gestionar proyectos.

● Servicios: Implementaré la lógica del CRUD en ProyectoService.

● Rutas API:
○ POST /proyectos: Creará un nuevo proyecto.
○ GET /proyectos/:id: Leerá un proyecto específico.
○ PUT /proyectos/:id: Actualizará un proyecto.
○ DELETE /proyectos/:id: Eliminara un proyecto.
Frontend (Next.js):
● Formulario de Creación/Edición: Formulario en React para ingresar la información
de un proyecto.
● Lista de Proyectos: Listará los proyectos existentes, mostrando estado, nombre,
fechas, presupuesto, etc.
●






3. GESTIÓN DEL STAFF

   
Backend (Nest.js):

● Modelo: Definiré la entidad Staff en TypeORM.

● Controladores: Crearé un controlador StaffController con métodos para
gestionar el personal.

● Servicios: LLevarán la lógica del CRUD en StaffService.

● Rutas API:
○ POST /staff: Crea un nuevo miembro del staff.
○ GET /staff/:id: Lee la información de un miembro específico.
○ PUT /staff/:id: Actualiza la información del staff.
○ DELETE /staff/:id: Eliminará un miembro del staff.

Frontend (Next.js):
● Formulario de Creación/Edición: Este formulario servirá para agregar o editar
personal.
● Lista de Staff: Te muestra una lista con toda la información del personal (DNI,
nombre, apellidos, teléfono, etc.).







5. GESTIÓN DE TAREAS

   
Backend (Nest.js):

● Modelo: Define una entidad Tarea en TypeORM que tiene que estar relacionada
con un proyecto.

● Controladores: Define un controlador TareaController para manejar las tareas.

● Servicios:Mete la lógica del CRUD en TareaService.

● Rutas API:
○ POST /tareas: Crea una nueva tarea.
○ GET /tareas/:id: Lee una tarea específica.
○ PUT /tareas/:id: Actualiza una tarea.
○ DELETE /tareas/:id: Elimina una tarea.

Frontend (Next.js):

● Lista de Tareas: Te muestra todas las tareas de un proyecto, su estado y la fecha
de finalización.

● Formulario de Creación/Edición: Gestiona la información de las tareas.










7. ASIGNACIÓN DE STAFF A PROYECTOS

   
Backend (Nest.js):

● Modelo: Uso la tabla de relación Participan para unir proyectos y staff.

● Controladores: Creo el controlador AsignacionController para manejar la
asignación de personal a proyectos.

● Servicios: Implementa AsignacionService para gestionar la lógica de
asignación.

● Rutas API:
○ POST /proyectos/:id/asignar-staff: Asigna un miembro del staff a
un proyecto.
○ DELETE /proyectos/:id/desasignar-staff: Desasigna un miembro
del staff.

Frontend (Next.js):

● Interfaz de Asignación: Permite seleccionar un miembro del staff y asociarlo a un
proyecto específico.








9. REPORTES Y VISUALIZACIÓN

    
Backend (Nest.js):

● Controladores: Define un controlador ReporteController para manejar la
generación de reportes.

● Servicios: Implementa ReporteService para generar estadísticas y datos
agregados de proyectos y personal.

● Rutas API:
○ GET /reportes/proyectos: Obtener un resumen de todos los proyectos.
○ GET /reportes/tareas: Obtener un resumen de las tareas de un
proyecto.

Frontend (Next.js):

● Panel de Reportes: Visualización de estadísticas utilizando gráficos con librerías
como Chart.js o D3.js.

● Tablas de Proyectos y Tareas: Visualizar listas y tablas con el progreso de los
proyectos y las tareas.











11. AUTENTICACIÓN Y AUTORIZACIÓN

    
Backend (Nest.js):

● Autenticación JWT: Implementa JWT para proteger las rutas.

● Roles y Permisos: Configura un sistema básico de roles (admin, staff) para
controlar el acceso.

● Rutas API:
○ POST /auth/register: Registro de nuevos usuarios.
○ POST /auth/login: Inicio de sesión y emisión del token JWT.

Frontend (Next.js):

● Pantallas de Inicio de Sesión y Registro: Formularios para que los usuarios
puedan registrarse o iniciar sesión.

● Protección de Rutas: Asegura que solo los usuarios autenticados tengan acceso a
ciertas secciones de la aplicación.




ESTRUCTURA CON DOCKER

Cada servicio (backend, frontend, base de datos) se ejecutará en su propio contenedor
dentro de Docker:

1. Frontend (Next.js): Contenedor en el puerto 3000.
2. Backend (Nest.js): Contenedor en el puerto 4000.
3. Base de Datos (PostgreSQL): Contenedor con PostgreSQL en el puerto 5432.
4. Directus (CMS) : Contenedor con directus en el puerto 8055.
   
Resumen General

● MVC en Backend: Se mantiene la separación clara entre Modelos (TypeORM),
Vistas (respuestas API), y Controladores (lógica de negocio).

● Integración Frontend-Backend: El frontend (Next.js) interactúa con el backend
mediante peticiones API REST que siguen el enfoque CRUD (crear, leer, actualizar y
borrar).
●
● Autenticación JWT: Protege las rutas del backend y asegura que los usuarios solo
accedan a las áreas permitidas.


