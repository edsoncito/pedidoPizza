# Documentación del Proyecto

## Introducción
Se realizó una aplicación que permita el armado de pizza perzonalizadas como tambien pizza preestablecidas,
la aplicación esta desarrollada en Node con el framework Nest.js en TypeScript.

## Descripción del proyecto
para el desarrollo del proyecto se tomo en cuenta 3 escenarios:
1. poder crear la pizza perzonalizada que pueda agregar el tipo de masa, salsa, queso y el relleno para pasar a construirla.
2. para la pizza preestablecida solo quedararia construirla.
3. poder agregar una promo donde los dias martes y miercoles sean 2x1 y el dia jueves el delivery sea gratuito

## Construcción del proyecto
para la construción del proyecto se utilizó el patron Builder

Este código implementa el patrón de diseño Builder para construir pizzas personalizadas. El código está escrito en TypeScript y consta de varias clases.

### `PizzaBuilder`
Esta es una clase abstracta que actúa como el constructor abstracto de la pizza. Define métodos abstractos para construir diferentes partes de una pizza, como el nombre, la masa, la salsa, el relleno, el queso y la promoción. También contiene un método `getPizza()` para obtener la pizza construida.

### `PizzaHawaianaBuilder`
Esta clase extiende `PizzaBuilder` y proporciona una implementación concreta para construir una pizza hawaiana y strogonoff y la perzonalizada. Cada método de construcción establece los atributos correspondientes de la pizza.

### `PizzaDirector`
Esta clase se encarga de construir pizzas utilizando un `PizzaBuilder` específico. Tiene métodos para construir pizzas personalizadas o pizzas predefinidas.

### `Pizza`
Esta clase representa una pizza y contiene atributos como el nombre, la masa, el queso, la salsa, el relleno y la promoción. También proporciona métodos para establecer y obtener los atributos de la pizza, y un método `toString()` para representar la pizza como un objeto.

### `Promo`
Esta clase representa una promoción y tiene un atributo para almacenar la promoción.

### `PedidosController`
Este es un controlador de API que maneja las solicitudes relacionadas con las pizzas. Contiene rutas para crear un pedido, realizar un pedido personalizado.

### `PedidosService`
Esta clase contiene la lógica de negocio para procesar los pedidos de pizza. Tiene métodos para realizar un pedido personalizado, realizar un pedido predefinido.

## Otros elementos
Se incluye la creación de instancias de `PizzaBuilder` para las pizzas hawaiana y strogonoff, y los almacena en un arreglo `pizzas`. 

## servicios
Se define un controlador de API `PedidosController` que utiliza el servicio `PedidosService` para manejar las solicitudes relacionadas con los pedidos de pizza.

## Endpoints
A continuación se presenta una lista de los endpoints disponibles en el proyecto, junto con los parámetros esperados para cada uno:

### `GET http://localhost:3000/pizza/pedido`
Endpoint para crear una pizza preestablecida.

```sh
Parámetros:
- `nombre` (string, requerido)
- `dia` (string, requerido)

ejemplo:
{
	"nombre": "strogonoff",
	"dia": "jueves"
}

Response

{
	"pizza": "strogonoff",
	"masa": "suave",
	"queso": "mozzarella rallado",
	"salsa": "tomate",
	"relleno": "champiñones + carne + Orégano",
	"promo": "Delivery Gratis"
}

```
### `GET http://localhost:3000/pizza/pedido-perzonalizado`
Endpoint para crear una pizza personalizada.
```sh
Parámetros:
- `masa` (string, requerido)
- `queso` (string, requerido)
- `salsa` (string, requerido)
- `relleno` (string, requerido)
- `dia` (string, requerido)

ejemplo: 
{
	"masa": "suave",
	"queso": "americano",
	"salsa": "tomate",
	"relleno": "carne + tocino",
	"dia": "lunes"
}

Response

{
	"pizza": "strogonoff",
	"masa": "suave",
	"queso": "mozzarella rallado",
	"salsa": "tomate",
	"relleno": "champiñones + carne + Orégano",
	"promo": "Delivery Gratis"
}

```

## Uso
Para utilizar el proyecto, sigue los siguientes pasos:

1. Ejecuta el comando `npm install` para instalar las dependencias.
2. Ejecuta el comando `npm start` para iniciar la aplicación.

## Estructura del proyecto
La estructura del proyecto es la siguiente:
```sh
src/
└── pedidos/
    ├── builder/
    │   ├── pizza-builder.ts
    │   ├── pizza-hawaiana.ts
    │   ├── pizza-perzonalizada.ts
    │   ├── pizza-strogonoff.ts
    │   └── promo.ts
    ├── director/
    │   └── pizza-director.ts
    ├── dto/
    │   ├── pedido-personalizado-dto.ts
    │   └── pedido-dto.ts
    ├── models/
    │   ├── pizza.model.ts
    │   └── promo.model.ts
    ├── data.ts
    ├── controlador.ts
    └── servicio.ts

```

