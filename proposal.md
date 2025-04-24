# Propuesta TP DSW

## Grupo
### Integrantes
* 53136 - Caballero, Luciano
* 53269 - Leone, Lucca
* 52925 - Vella, Luca

### Repositorios
* [frontend app](http://hyperlinkToGihubOrGitlab)
* [backend app](http://hyperlinkToGihubOrGitlab)
*Nota*: si utiliza un monorepo indicar un solo link con fullstack app.

## Tema
El sistema es un gestor y administrador de articulos de museo. En el se puede adquirir piezas mediante la compra y/o subasta (online o registro a presencial).
Y tambien gestionar cada pieza ya sea el ingreso y egreso, la actualizacion de su estado (reparado o falta de reparacion, en exposicion, en venta, etc)

----clases-----

Gerente: El gerente se encarga de las peticiones de reparacion y peticion de tasacion y estado del articulo. De su lista elije quienes le tasaran la pieza y eso enviara por sistema una notificacion a los tasadores. Luego el gerente se encsrgara de aceptar una de las propuestas de tasacion de sus tasadores o  volvera a pedir una peticion. 
Si acepta la peticion el sistema carga el valor y el gerente tendra que indicar si se vendera/subastara, exhibira o almacenara. El sistema carga eso tambien.
En cuanto al reparador, el gerente consulta la lista de reparadores y se comunica con ellos externamente. Una vez que el reparador termino con su tarea el gerente puede consultar las peticiones de reparacion para ver su estado, si ya se reparo o aun no.

Recepsionista: eliminada
 
Supervisor/Encargado de articulos: se encarga de cargar peticiones de reparacion, de administrar el ingreso de articulos y de controlar posiblemente el stock de ser necesario (sus trabajadores le informan y el se encarga de subirlo al sistema o cada uno lo sube)
Una vez que ingresa el articulo el sistema envia una notificacioon al gerente para que le asigne la tasacion y si se exhibira, subastara/vendera o se almacenara.
El inspector se encargara de actualizsr el estado de la peticion de reparacion dd la pieza una vez el reparador concluya.

Tasador: Se encarga de publicar su analisis sobre la pieza y el valor, para que luego el gerente acepte esa peticion.

Usuario: Puede comprar o registrarse a una subasta (virtual o presencial), consultar lista de articulos con sus precios y stock (articulos nuevos, articulos todos, etc)

### Modelo
![Modelo de Dominio Gestion de Articulos](https://github.com/user-attachments/assets/7a5a8f0f-3dc0-4bf9-8dba-3f8cd93005c5)


Link: https://drive.google.com/file/d/1rXyoW1wYY54ALXUtHZjh0R3I49D9dXWx/view?usp=sharing

## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Tipo Habitacion<br>2. CRUD Servicio<br>3. CRUD Localidad|
|CRUD dependiente|1. CRUD Habitación {depende de} CRUD Tipo Habitacion<br>2. CRUD Cliente {depende de} CRUD Localidad|
|Listado<br>+<br>detalle| 1. Listado de habitaciones filtrado por tipo de habitación, muestra nro y tipo de habitación => detalle CRUD Habitacion<br> 2. Listado de reservas filtrado por rango de fecha, muestra nro de habitación, fecha inicio y fin estadía, estado y nombre del cliente => detalle muestra datos completos de la reserva y del cliente|
|CUU/Epic|1. Reservar una habitación para la estadía<br>2. Realizar el check-in de una reserva|


Adicionales para Aprobación
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Tipo Habitacion<br>2. CRUD Servicio<br>3. CRUD Localidad<br>4. CRUD Provincia<br>5. CRUD Habitación<br>6. CRUD Empleado<br>7. CRUD Cliente|
|CUU/Epic|1. Reservar una habitación para la estadía<br>2. Realizar el check-in de una reserva<br>3. Realizar el check-out y facturación de estadía y servicios|


### Alcance Adicional Voluntario

*Nota*: El Alcance Adicional Voluntario es opcional, pero ayuda a que la funcionalidad del sistema esté completa y será considerado en la nota en función de su complejidad y esfuerzo.

|Req|Detalle|
|:-|:-|
|Listados |1. Estadía del día filtrado por fecha muestra, cliente, habitaciones y estado <br>2. Reservas filtradas por cliente muestra datos del cliente y de cada reserve fechas, estado cantidad de habitaciones y huespedes|
|CUU/Epic|1. Consumir servicios<br>2. Cancelación de reserva|
|Otros|1. Envío de recordatorio de reserva por email|

