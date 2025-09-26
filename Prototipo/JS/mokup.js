var imagenActual = 1;

function cambiar(numeroDeImagen) {
    imagenActual = numeroDeImagen;
    let imagen = document.getElementById("imagen");

    switch (imagenActual) {
        case 1:
            imagen.src = "Img/Inicio.jpg";
            break;
        case 2:
            imagen.src = "Img/Interno.jpg";
            break;
        case 3:
            imagen.src = "Img/Introduccion.jpg";
            break;
        case 4:
            imagen.src = "Img/Monitor.jpg";
            break;
        case 5:
            imagen.src = "Img/pagosExterno.jpg";
            break;
        case 6:
            imagen.src = "Img/Administrador.jpg";
            break;
        case 7:
            imagen.src = "Img/boleta.jpg";
            break;
        case 8:
            imagen.src = "Img/boleta_int.jpg";
            break;
        default:
    }
}

// Datos de las cards que se generarán (solo las que NO están en HTML)
const cardsData = [
  {
    img: "Img/Interno.jpg",
    title: "Página de Internos",
    text: "Interfaz para Internos y crear menús de los módulos que va a hacer uso."
  },
  {
    img: "Img/Introduccion.jpg",
    title: "Vista de Bienvenida",
    text: "Interfaz adaptada para dispositivos móviles para saber sobre Foodsys y la introducción."
  },
  {
    img: "Img/Monitor.jpg",
    title: "Vista del Monitor",
    text: "Interfaz cuando el monitor inicie sesión con sus módulos."
  },
  {
    img: "Img/pagosExterno.jpg",
    title: "Pagos Aprendiz Externo",
    text: "Interfaz de pagos para aprendices externos y la reserva de los alimentos."
  },
  {
    img: "Img/Administrador.jpg",
    title: "Vista del Administrador",
    text: "Interfaz de Administrador de inicio de sesión, con estadísticas de los aprendices."
  },
  {
    img: "Img/boleta.jpg",
    title: "Vista al comprar boletas",
    text: "Interfaz gráfica del aprendiz al comprar una boleta."
  },
  {
    img: "Img/boleta_int.jpg",
    title: "Vista al reservar boletas aprendiz interno",
    text: "Interfaz gráfica del aprendiz al reservar una boleta."
  }
];

const container = document.getElementById("cardsContainer");

cardsData.forEach((card, i) => {
  const cardHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${card.img}"
           alt="${card.title}"
           class="card-img-top img-uniforme rounded shadow-sm mockup-img"
           data-bs-toggle="modal"
           data-bs-target="#imgModal"
           onclick="cambiar(${i + 2})">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.text}</p>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', cardHTML);
});
