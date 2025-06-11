# Propuesta TP DSW

## Grupo
### Integrantes
* 53136 - Caballero, Luciano
* 53269 - Leone, Lucca
* 52925 - Vella, Luca

### Repositorios
* [frontend app](http://hyperlinkToGihubOrGitlab)
* [backend app](http://hyperlinkToGihubOrGitlab)


## Tema
El sistema es un gestor y administrador de articulos de una casa de subastas. En el se puede crear y registrarse en subastas online.
Tambien se puede gestionar el estado de cada articulo, a su vez su ingreso y egreso de la casa de subasta.


### Modelo
![Modelo de Dominio Gestion de Articulos (1)](https://github.com/user-attachments/assets/6f710bfd-533f-498b-b5ca-652ab0b83331)




Link: https://drive.google.com/file/d/1rXyoW1wYY54ALXUtHZjh0R3I49D9dXWx/view?usp=sharing

## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Persona<br>2. CRUD Tag<br>3. CRUD Articulo|
|CRUD dependiente|1. CRUD Tasacion {depende de} CRUD Tasador<br>2. CRUD Propuesta_Subasta {depende de} CRUD Gerente<br>3. CRUD Subasta {depende de} CRUD Propuesta_Subasta|
|Listado<br>+<br>detalle| 1. Listado de articulo filtrado por tipo de estado, muestra nombre, descripcion y estado => detalle CRUD Artículo<br> 2. Listado de pedidos filtrado por rango de fecha, muestra id de artuculo, fecha de compra,total y nombre del cliente => detalle muestra datos completos del pedido y del cliente|
|CUU/Epic|1. Cualquiera puede subastar<br>2. Carga de artículos|


Adicionales para Aprobación
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Persona<br>2. CRUD Artículo<br>3. CRUD Propuesta_Subasta<br>4. CRUD Subasta<br>5. CRUD Tasación<br>6. CRUD Supervisor<br>7. CRUD Gerente|
|CUU/Epic|1. Gerente crea propuesta de subasta<br>2. Carga de artículos<br>3. Ingresar tasacion<br>4. Publicar Subasta<br>5. Ingresar a Subasta|


### Alcance Adicional Voluntario

*Nota*: El Alcance Adicional Voluntario es opcional, pero ayuda a que la funcionalidad del sistema esté completa y será considerado en la nota en función de su complejidad y esfuerzo.

|Req|Detalle|
|:-|:-|
|Listados |1. Estadía del día filtrado por fecha muestra, cliente, habitaciones y estado <br>2. Reservas filtradas por cliente muestra datos del cliente y de cada reserve fechas, estado cantidad de habitaciones y huespedes|
|CUU/Epic|1. Consumir servicios<br>2. Cancelación de reserva|
|Otros|1. Envío de recordatorio de reserva por email|

