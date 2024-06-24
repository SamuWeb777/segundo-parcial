// 1. Al cargar el DOM, ejecutar las siguientes funciones
document.addEventListener('DOMContentLoaded', () => {
  // 2. Definir la ruta al archivo datos.json
  const datosFilePath = './datos.json'
  console.log(datosFilePath)
  // 3. Obtener referencias a los elementos del DOM (selectores de propiedad y ubicación, campo de metros cuadrados, y el span para el valor de la póliza)
  const propiedadSelect = document.getElementById('propiedad');
  const ubicacionSelect = document.getElementById('ubicacion');
  const metrosCuadradosInput = document.getElementById('metros2');
  const valorPolizaSpan = document.getElementById('valorPoliza');
  const cotizarButton = document.getElementById('cotizarButton');
  // 4. Función para cargar opciones en los selectores desde el archivo datos.json
  function cargarOpciones (){
  fetch(datosFilePath)
    .then((response) => response.json())
    .then((data) => {
      // Recorrer los datos y añadir opciones a los selectores

         const propiedades = data.filter(item => item.categoria === 'propiedad');
        propiedades.forEach(propiedad => {
          const option = document.createElement('option');
          option.value = propiedad.factor;
          option.textContent = propiedad.tipo;
          propiedadSelect.appendChild(option);
        });
  
        const ubicaciones = data.filter(item => item.categoria === 'ubicacion');
        ubicaciones.forEach(ubicacion => {
          const option = document.createElement('option');
          option.value = ubicacion.factor;
          option.textContent = ubicacion.tipo;
          ubicacionSelect.appendChild(option);
        });
      })
    .catch((error) => {
      // Manejar errores en la carga de datos
      console.error('Error al cargar los datos:', error)
    })
}
  // 5. Función para calcular el precio estimado en tiempo real
  function calcularPrecioEstimado() {
  const factorPropiedad = parseFloat(propiedadSelect.value);
  const factorUbicacion = parseFloat(ubicacionSelect.value);
  const metrosCuadrados = parseFloat(metrosCuadradosInput.value);
    // Obtener valores seleccionados de los selectores y el valor de metros cuadrados
    if (isNaN(factorPropiedad) || isNaN(factorUbicacion) || isNaN(metrosCuadrados)) {
      valorPolizaSpan.textContent = ' 0.00';
      return;
  }
    // Calcular el precio utilizando los factores y el costo base por metro cuadrado
    const costoBasePorMetroCuadrado = 100; // Ejemplo de costo base
  const precioEstimado = factorPropiedad * factorUbicacion * metrosCuadrados * costoBasePorMetroCuadrado;
    // Actualizar el contenido del span valorPoliza con el precio estimado
    valorPolizaSpan.textContent = `${precioEstimado.toFixed(2)}`;
  }

  // 6. Añadir tres event listeners a los selectores y al campo de metros cuadrados para llamar a la función de cálculo de precio estimado cuando cambien sus valores
  propiedadSelect.addEventListener('change', calcularPrecioEstimado);
  ubicacionSelect.addEventListener('change', calcularPrecioEstimado);
  metrosCuadradosInput.addEventListener('input', calcularPrecioEstimado);
  // 7. Obtener referencia al botón de cotizar

  // 8. Event listener para el botón de cotizar
  cotizarButton.addEventListener('click', () => {
    // Obtener valores seleccionados de los selectores y el valor de metros cuadrados
    const factorPropiedad = parseFloat(propiedadSelect.value);
        const factorUbicacion = parseFloat(ubicacionSelect.value);
        const metrosCuadrados = parseFloat(metrosCuadradosInput.value);
    // Calcular la póliza mensual utilizando la función calcularPrecioEstimado
    const costoBasePorMetroCuadrado = 100; // Ejemplo de costo base
        const precioEstimado = factorPropiedad * factorUbicacion * metrosCuadrados * costoBasePorMetroCuadrado;
    // Crear un objeto con la cotización incluyendo la fecha actual
     const cotizacion = {
            fecha: new Date().toISOString(),
            propiedad: propiedadSelect.options[propiedadSelect.selectedIndex].text,
            ubicacion: ubicacionSelect.options[ubicacionSelect.selectedIndex].text,
            metrosCuadrados,
            precioEstimado
        };
    // Guardar el objeto en el localStorage
      localStorage.setItem('cotizacion', JSON.stringify(cotizacion));
    // Redirigir al usuario a historial.html
        window.location.href = './historial.html';
    });
    cargarOpciones();
})

