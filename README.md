# Examen de JavaScript para Desarrollo Web Frontend

## Introducción

El objetivo de este examen desarrollar una aplicación web de cotización de seguros del hogar utilizando HTML, CSS y JavaScript. Este repositorio contiene los archivos `index.html`, `historial.html` y `datos.json`. Deberás crear los archivos JavaScript necesarios para dinamizar las páginas y cumplir con los requerimientos funcionales.

## Archivos proporcionados

- **index.html:** Página principal donde el usuario ingresará los datos para cotizar.
- **historial.html:** Página que mostrará el historial de cotizaciones realizadas.
- **datos.json:** Archivo JSON que contiene los datos de tipos de propiedad y ubicaciones con sus respectivos factores.

## Tareas a realizar

### 1. Crear el archivo `app.js`

Este archivo manejará la lógica de la página `index.html`.

#### Instrucciones:

1. **Cargar opciones en los selectores:**
    - Leer el archivo `datos.json`.
    - Llenar los selectores de tipo de propiedad y ubicación con los datos correspondientes.

2. **Calcular precio estimado en tiempo real:**
    - Calcular el precio estimado a medida que el usuario selecciona las opciones y modifica el campo de metros cuadrados.
    - Mostrar el precio estimado en el elemento `span` con el id `valorPoliza`.

3. **Guardar cotización:**
    - Al hacer clic en el botón "Cotizar", calcular la póliza mensual y guardar la cotización en el `localStorage`.
    - Redirigir a la página `historial.html`.

### 2. Crear el archivo `historial.js`

Este archivo manejará la lógica de la página `historial.html`.

#### Instrucciones:

1. **Mostrar historial de cotizaciones:**
    - Leer las cotizaciones guardadas en el `localStorage`.
    - Mostrar las cotizaciones en una tabla.

2. **Limpiar historial:**
    - Añadir un botón con un ícono de basura.
    - Al hacer clic en el botón, limpiar el `localStorage` y actualizar la tabla.

## Requerimientos funcionales

### index.html
- **Selectores:** Los selectores de tipo de propiedad y ubicación deben llenarse dinámicamente con los datos del archivo `datos.json`.
- **Precio estimado:** El precio estimado debe actualizarse en tiempo real a medida que el usuario interactúa con el formulario.
- **Guardar cotización:** Al hacer clic en "Cotizar", la cotización debe guardarse en el `localStorage` y el usuario debe ser redirigido a `historial.html`.

### historial.html
- **Mostrar cotizaciones:** Las cotizaciones guardadas en el `localStorage` deben mostrarse en una tabla.
- **Limpiar historial:** Debe haber un botón con un ícono de basura que permita limpiar el historial de cotizaciones.

## Guía de implementación

### Paso 1: Cargar datos en los selectores

1. Crear una función para leer el archivo `datos.json`.
2. Llenar los selectores de tipo de propiedad y ubicación con los datos del JSON.

### Paso 2: Calcular precio estimado en tiempo real

1. Crear una función para obtener los factores de tipo de propiedad y ubicación.
2. Crear una función para calcular el precio estimado basado en los factores y los metros cuadrados ingresados.
3. Mostrar el precio estimado en tiempo real en la página `index.html`.

### Paso 3: Guardar cotización y redirigir

1. Crear una función para guardar la cotización en el `localStorage`.
2. Redirigir al usuario a `historial.html` después de guardar la cotización.

### Paso 4: Mostrar historial de cotizaciones

1. Leer las cotizaciones guardadas en el `localStorage`.
2. Mostrar las cotizaciones en una tabla en `historial.html`.

### Paso 5: Limpiar historial

1. Añadir un botón con un ícono de basura para limpiar el `localStorage`.
2. Actualizar la tabla después de limpiar el historial.

## Evaluación

Se evaluará la correcta implementación de las funcionalidades descritas, la limpieza y organización del código, y el manejo adecuado de eventos y almacenamiento local en JavaScript.
