const cargarMuseos = () => {
   const museos = fetch("http://localhost:3000/api/museos");
   museos
     .then((respuesta) => {
       return respuesta.json();
     })
     .then((museos) => {
       const listaMuseos = document.getElementById("lista-museos");
       listaMuseos.innerHTML = ''; // Limpiar lista existente antes de añadir nuevas entradas
       for (let museo of museos) {
         const row = `
           <tr>
             <td>${museo.nombre}</td>
             <td>${museo.ubicacion}</td>
             <td>${museo.exposiciones}</td>
             <td>${museo.horarios}</td>
             <td>${museo.precioEntrada}</td>
           </tr>
         `;
         listaMuseos.innerHTML += row; // Agregar fila a la tabla
       }
     })
     .catch((error) => console.log("Error al cargar los museos: ", error));
};

cargarMuseos();
