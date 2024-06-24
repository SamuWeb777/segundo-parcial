// 1. Al cargar el DOM, ejecutar las siguientes funciones
document.addEventListener('DOMContentLoaded', () => {

    // 2. Leer las cotizaciones guardadas en el localStorage y parsearlas a un array de objetos
    const cotizacion = JSON.parse(localStorage.getItem('cotizacion'));
    // 3. Obtener referencia al cuerpo de la tabla (elemento tbody)
    if (cotizacion){
    const tbody = document.querySelector('table tbody');
    
    // 4. Recorrer las cotizaciones y añadirlas a la tabla
        //a. Crear una fila para cada cotización
        const row = document.createElement('tr');

        //b. Añadir celdas a la fila con los datos de la cotización
        const fechaCell = document.createElement('td');
        fechaCell.textContent = cotizacion.fecha;
        row.appendChild(fechaCell);

        const propiedadCell = document.createElement('td');
        propiedadCell.textContent = cotizacion.propiedad;
        row.appendChild(propiedadCell);

        const ubicacionCell = document.createElement('td');
        ubicacionCell.textContent = cotizacion.ubicacion;
        row.appendChild(ubicacionCell);

        const metrosCell = document.createElement('td');
        metrosCell.textContent = cotizacion.metrosCuadrados;
        row.appendChild(metrosCell);

        const precioCell = document.createElement('td');
        precioCell.textContent = `$${cotizacion.precioEstimado.toFixed(2)}`;
        row.appendChild(precioCell);

        //c. Añadir la fila al tbody
        tbody.appendChild(row);
    }
    // 5. Obtener referencia al botón de limpiar historial
    const limpiar = document.getElementById('clearHistorial');
    const tbody = document.querySelector('table tbody');
    // 6. Event listener para el botón de limpiar historial
    limpiar.addEventListener('click', () => {
        //a. Limpiar el localStorage
        localStorage.removeItem('cotizacion');
        //b. Limpiar el contenido del tbody (eliminar todas las filas)
        tbody.innerHTML = '';
    });
});