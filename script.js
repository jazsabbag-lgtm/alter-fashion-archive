// ===== 1. COLECCIONES: se cargan desde datos.json con fetch =====
fetch("datos.json")
  .then(res => res.json())
  .then(datos => {
    let contenedor = document.getElementById("lista-colecciones");
    let htmlAcumulado = "";

    datos.forEach(item => {
      htmlAcumulado += `<div class="col mb-4">`;
      htmlAcumulado += `  <div class="coleccion border border-secondary d-flex flex-column h-100">`;
      htmlAcumulado += `    <img src="${item.imagen}" class="img-fluid object-fit-cover" alt="${item.alt}">`;
      htmlAcumulado += `    <div class="p-3">`;
      htmlAcumulado += `      <h3 class="coleccion-nombre">${item.numero} — ${item.nombre}</h3>`;
      htmlAcumulado += `      <p class="detalle mb-0">Diseñador: ${item.disenador}</p>`;
      htmlAcumulado += `      <p class="detalle mb-0">Categoría: ${item.categoria}</p>`;
      htmlAcumulado += `    </div>`;
      htmlAcumulado += `  </div>`;
      htmlAcumulado += `</div>`;
    });

    contenedor.innerHTML = htmlAcumulado;
  });

// ===== 2. FORMULARIO DEL MODAL: validación de Bootstrap + mensaje de gracias =====
const formulario = document.querySelector("#formulario-unirse");
const mensajeGracias = document.querySelector("#mensaje-gracias");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!formulario.checkValidity()) {
    event.stopPropagation();
    formulario.classList.add("was-validated");
    return;
  }

  formulario.classList.add("was-validated");
  formulario.classList.add("d-none");
  mensajeGracias.classList.remove("d-none");
});
