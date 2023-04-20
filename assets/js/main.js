const projects = [
  {
    id: "0",
    title: "APS Racing",
    subtitle: "MERN app para rally media.",
    description:
      "Página web de media de rallys hecha con React, Node.js, Express y MongoDB. Incluye noticias, resultados, calendario, perfiles de pilotos y equipos, galería de fotos y un foro de discusión. Es escalable, robusta y eficiente.",
    tecnologies: ["react", "axios", "nodejs", "mongodb"],
    img: "https://res.cloudinary.com/df5xojjiw/image/upload/v1670256890/portfolio/aps_intvdp.jpg",
    landing: "./assets/img/apsRacing.png",
    size: "big",
    row: "row1",
    column: "column1",
  },
  {
    id: "1",
    title: "Wave Maps",
    subtitle: "Atlas de Surf y Olas MERN .",
    description:
      "Wave Maps es una página web de atlas de olas construida con React, Node.js, Express y MongoDB. Proporciona información detallada sobre los spots de surf, incluyendo mapas interactivos y características de las olas. Es una herramienta avanzada y completa para los entusiastas del surf y deportes acuáticos.",
    tecnologies: ["react", "axios", "nodejs", "mongodb"],
    img: "https://res.cloudinary.com/df5xojjiw/image/upload/v1670256885/portfolio/5-the-playground_dscgga.jpg",
    landing: "./assets/img/wm-home.png",
    size: "small",
    row: "row3",
    column: "column2",
  },
  {
    id: "2",
    title: "La Bamba",
    subtitle: "MERN web para una empresa de eventos de Madrid.",
    description:
      "La Bamba es una página web de eventos y conciertos construida con React, Node.js, Express y MongoDB. Ofrece información sobre artistas, fechas y lugares, venta de entradas y un calendario interactivo. Es una herramienta poderosa y escalable para los amantes de la música en vivo.",
    tecnologies: ["react", "axios", "nodejs", "mongodb"],
    img: "https://res.cloudinary.com/df5xojjiw/image/upload/v1670257072/portfolio/bardt_ti7mpb.png",
    landing: "./assets/img/bamba_landing.png",
    size: "medium",
    row: "row3",
    column: "column1",
  },
  {
    id: "3",
    title: "Celia Perez Art",
    subtitle: "React y Sass portafolio de una artista y diseñadora.",
    description:
      "El portfolio en línea de Celia Perez, diseñadora, está construido con React y Sass. Ofrece una vista completa de su trabajo, habilidades y experiencia, en una interfaz interactiva y visualmente atractiva. Es una solución moderna y profesional para promocionar el trabajo de un diseñador.",
    tecnologies: ["react", "sass"],
    img: "https://res.cloudinary.com/df5xojjiw/image/upload/v1670256895/portfolio/cpzfondo_llaxtv.png",
    landing: "./assets/img/celia_landing.png",
    size: "small",
    row: "row4",
    column: "column2",
  },
  {
    id: "4",
    title: "Procorlab",
    subtitle: "E-commerce y plataforma de reservas para tests medicos.",
    description:
      "La página web de la clínica Procorlab, un eccomerce de reserva de citas, está creada con React, Redux, Sass, PHP y MySQL. Ofrece una experiencia interactiva y visualmente atractiva, donde los usuarios pueden programar citas, comprar productos y acceder a información detallada sobre los servicios de la clínica.",
    tecnologies: ["react", "sass", "php", "mysql", "shopify"],
    img: "./assets/img/procor.png",
    landing: "./assets/img/procorlab_landing.png",
    size: "big",
    row: "row3",
    column: "column3",
    url: "https://procorlab.es/",
  },
  {
    id: "5",
    title: "Nemeson One",
    subtitle: "React y Sass web.",
    description:
      "Página web informativa de los audífonos Nemeson One está creada con React, Redux y Sass. Ofrece detalles sobre características técnicas, diseño y confort. Es una experiencia interactiva y visualmente atractiva para explorar todas las bondades de los audífonos.",
    tecnologies: ["react", "redux", "sass"],
    img: "./assets/img/manos.png",
    landing: "./assets/img/nemesonone_landing.png",
    size: "small",
    row: "row1",
    column: "column3",
    url: "https://nemesonone.es/",
  },
  {
    id: "6",
    title: "Zorraquino",
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "La página web de la agencia de diseño Zorraquino está creada con PHP, JS y SASS, y utiliza el CMS propio de la agencia. Ofrece una amplia variedad de servicios de diseño gráfico, web y publicidad, y muestra su cartera de proyectos. Es una herramienta moderna y atractiva para la promoción de la marca y los servicios de la agencia.",
    tecnologies: ["php", "js", "css", "zorraquino"],
    img: "https://res.cloudinary.com/df5xojjiw/image/upload/v1670257868/portfolio/zq_jyruz9.webp",
    landing: "./assets/img/zorraquino_landing.png",
    size: "big",
    row: "row1",
    column: "column2",
    url: "https://www.zorraquino.com/",
  },
  {
    id: "7",
    title: "Saunier Duval IQ app",
    subtitle: "App para Ios y Android con Ionic y Vue.",
    description:
      "La aplicación Mi Saunier Duval, desarrollada con Ionic Vue y Sass, está disponible en Android e iOS. Controla tu caldera, conoce tu consumo y contacta con el servicio de mantenimiento de manera fácil y rápida. Mantén tu hogar cálido y seguro con solo unos toques en tu móvil",
    tecnologies: ["ionic", "vue", "sass"],
    img: "https://res.cloudinary.com/df5xojjiw/image/upload/v1670260847/portfolio/sdiq_pjfair.png",
    landing: "./assets/img/sdiq_landing.png",
    size: "medium",
    row: "row3",
    column: "column4",
  },
  {
    id: "8",
    title: "Whitehole",
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "Whitehole es un fondo de inversión del grupo Velatia. Su página web, desarrollada con PHP, JS, SASS y el CMS de la agencia Zorraquino, permite a los usuarios conocer sus servicios, filosofía y estrategias de inversión.",
    tecnologies: ["php", "js", "sass", "zorraquino"],
    img: "./assets/img/whitehole.png",
    landing: "./assets/img/whitehole_landing.png",
    size: "small",
    row: "row3",
    column: "column3",
    url: "https://www.whitehole.es/",
  },
  {
    id: "9",
    title: "Clientes Kutxabank",
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "La página web de clientes del banco Kutxabank está construida con PHP, JS y CSS, y utiliza el CMS de la agencia Zorraquino. Proporciona a los clientes acceso a una amplia variedad de servicios financieros, como cuentas corrientes, tarjetas de crédito, préstamos, hipotecas, seguros y fondos de inversión. Es una herramienta esencial para la gestión financiera en línea.",
    tecnologies: ["php", "js", "css", "zorraquino"],
    img: "https://res.cloudinary.com/df5xojjiw/image/upload/v1670257867/portfolio/kutxabank-kvvG-U7026419564jqG-624x385_El_Correo-kv4C-U701178451438THE-624x385_El_Correo_yru5q7.jpg",
    landing: "./assets/img/clientes_landing.png",
    size: "big",
    row: "row3",
    column: "column1",
    url: "https://clientes.kutxabank.es/es/",
  },
  {
    id: "10",
    title: "IntalXpert Saunier Duval",
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "La página web de Saunier Duval Instal Xpert, desarrollada con PHP, JS y SASS, utiliza el CMS de la agencia Zorraquino. Ayuda a encontrar la caldera o el sistema de aerotermia que se ajuste a tus necesidades. Ofrece una experiencia de usuario sencilla y fluida para facilitar la compra y la instalación de los productos.",
    tecnologies: ["php", "js", "sass", "zorraquino"],
    img: "https://res.cloudinary.com/df5xojjiw/image/upload/v1670257869/portfolio/sistema-genia-air-l_2x_datewo.jpg",
    landing: "./assets/img/instalxpert_landing.png",
    size: "small",
    row: "row2",
    column: "column4",
    url: "https://instalxpert.saunierduval.es/",
  },
  {
    id: "11",
    title: "Enkartur",
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "La página web de venta de entradas y eccomerce de Enkartur está construida con PHP, JS y SASS, y utiliza el CMS de la agencia Zorraquino. Permite a los usuarios comprar entradas para eventos y reservar experiencias turísticas en el País Vasco. Es una solución moderna y fácil de usar para la planificación de viajes.",
    tecnologies: ["php", "js", "sass", "zorraquino"],
    img: "./assets/img/Enkarterri.png",
    landing: "./assets/img/digitalsignage_landing.png",
    size: "small",
    row: "row2",
    column: "column1",
    url: "https://www.visitenkarterri.com/",
  },
];

// // Mouse Move
// let cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", moveCursor);

// function moveCursor(e) {
//   let x = e.clientX;
//   let y = e.clientY;

//   cursor.style.left = `${x}px`;
//   cursor.style.top = `${y}px`;
// }

// let links = Array.from(document.querySelectorAll("a"));

// links.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     cursor.classList.add("grow");
//   });

//   link.addEventListener("mouseleave", () => {
//     cursor.classList.remove("grow");
//   });
// });

//COLOR TOGGLE

let colorToggle = document.querySelector(".colorToggle");
let container = document.querySelector(".container");

colorToggle.addEventListener("click", () => {
  console.log("aaa");
  if (colorToggle.classList.contains("light")) {
    colorToggle.classList.remove("light");
    container.classList.add("dark");
  } else {
    colorToggle.classList.add("light");
    container.classList.remove("dark");
  }
});

//SCROLL OPACITY

let title = document.getElementById("title");
let bio = document.getElementById("bio");
let portfolio__grid = document.getElementById("portfolio__grid");

addEventListener("scroll", (event) => {
  // title.style.opacity = 1 - document.documentElement.scrollTop / 300;
  // bio.style.opacity = 1 - document.documentElement.scrollTop / 500;
  if (document.documentElement.scrollTop > 1700) {
    portfolio__grid.style.opacity = 1 - document.documentElement.scrollTop / 2700;
  } else portfolio__grid.style.opacity = 1;
});

// //PARALLAX
// (function () {
//   window.addEventListener("scroll", function (event) {
//     var depth, i, layer, layers, len, movement, topDistance, translate3d;
//     topDistance = document.documentElement.scrollTop;
//     layers = document.querySelectorAll("[data-type='parallax']");
//     for (i = 0, len = layers.length; i < len; i++) {
//       layer = layers[i];
//       depth = layer.getAttribute("data-depth");
//       movement = -(topDistance * (depth / 100));
//       translate3d = "translate3d(0, " + movement + "px, 3px)";
//       layer.style["-webkit-transform"] = translate3d;
//       layer.style["-moz-transform"] = translate3d;
//       layer.style["-ms-transform"] = translate3d;
//       layer.style["-o-transform"] = translate3d;
//       layer.style.transform = translate3d;
//     }
//   });
// }.call(this));

//HORIZONTAL SCROLL

function scrollHorizontall() {
  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".grid__wrap--horizontal article");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    // markers: true,
    scrollTrigger: {
      trigger: "#portfolio__horizontal",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: "bottom top",
    },
  });

  // let imgs = document.querySelectorAll(".grid__wrap--horizontal article .article_wrap");
  // let leftTrigger = window.innerWidth * 0.2;
  // let rigthTrigger = window.innerWidth * 0.7;

  // window.addEventListener("scroll", function (event) {
  //   imgs.forEach((image, index) => {
  //     if ((!imgs[0].classList.contains("centered") && image.getBoundingClientRect().left > leftTrigger) & (image.getBoundingClientRect().left < rigthTrigger)) {
  //       image.classList.add("centered");
  //     } else {
  //       if (image.classList.contains("centered")) image.classList.remove("centered");
  //     }
  //     if (index === 0 && image.getBoundingClientRect().left < 100 && image.getBoundingClientRect().left >= -100) {
  //       image.classList.add("centered");
  //       document.querySelector(".article__wrap--app").classList.remove("centered");
  //     } else if (index === 0 && image.getBoundingClientRect().left < -100) image.classList.remove("centered");
  //   });
  // });
}

//INITIAL ANIMATION

let header = document.querySelector("header");
let portfolio__horizontal = document.querySelector(".portfolio__horizontal");
let footer = document.querySelector("footer");
let sec_separata = document.querySelectorAll(".sec_separata");

window.onload = () => {
  colorToggle.classList.remove("rotate");

  setTimeout(() => {
    colorToggle.classList.remove("initial");
    header.classList.remove("initial");
    sec_separata.forEach((sec) => sec.classList.remove("initial"));
    portfolio__grid.classList.remove("initial");
    portfolio__horizontal.classList.remove("initial");
    footer.classList.remove("initial");
    scrollHorizontall();

    // GSAP INITIAL

    //   gsap.from(".header-top", { y: 20, opacity: 0, duration: 0.8 });
    gsap.from("h1", { y: 0, x: -30, opacity: 0, duration: 0.8, delay: 0.6 });
    gsap.from(".header__info h3", { y: 30, x: -30, opacity: 0, duration: 0.8, delay: 0.9 });
    gsap.from(".headerDesc__text", { y: 30, x: 30, opacity: 0, duration: 0.8, delay: 0.9 });
  }, 1500);
};

//MODAL

let articles = document.querySelectorAll("article");
let modal = document.querySelector(".modal");
let modalContainer = document.querySelector(".modal__container");

articles.forEach((elm) => {
  elm.addEventListener("click", () => {
    projects.forEach((project) => {
      if (project.id === elm.id) {
        document.querySelector(".modal__title").innerHTML = project.title;
        document.querySelector(".modal__description").innerHTML = project.description;
        document.querySelector(".modal__img").src = project.img;
        document.querySelector(".modal__landingImg").src = project.landing;
        document.querySelector(".modal__img").id = "modalImg" + project.id;

        if (project.id >= 6) modal.classList.add("ligth");
      }
    });

    if (modal.classList.contains("show")) {
      modal.classList.remove("show");
      modal.classList.remove("fadeIn");
      if (modal.classList.contains("ligth")) modal.classList.remove("ligth");
    } else {
      modal.classList.add("show");
      setTimeout(() => {
        modal.classList.add("fadeIn");
      }, 100);
      setTimeout(() => {
        modal.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        modalContainer.classList.add("display");
      }, 1000);
    }
  });
});

let closeButton = document.querySelector(".close_button");

closeButton.addEventListener("click", () => {
  modalContainer.classList.remove("display");
  setTimeout(() => {
    modal.classList.remove("fadeIn");
  }, 100);
  setTimeout(() => {
    modal.classList.remove("show");
    if (modal.classList.contains("ligth")) modal.classList.remove("ligth");
  }, 1000);
});

ScrollTrigger.create({
  trigger: ".top",
  // markers: true,
  id: "top",
  start: "top top",
  end: "+=" + window.innerHeight + "px",
  pin: true,
}),
  gsap.to(".header-main", {
    scrollTrigger: {
      trigger: ".portfolio__grid",
      // markers: true,
      id: "topdos",
      toggleActions: "restart none reverse pause",
      start: "top top+=" + 2 * window.innerHeight + "px",
      end: "+=" + window.innerHeight + "px",
      scrub: !0,
    },
    opacity: 0,
    ease: "none",
  });
const windowHeight = window.innerHeight;
const halfWindowHeight = windowHeight;

const currentWrap = document.querySelector(".current__wrap");
currentWrap.style.height = `${halfWindowHeight}px`;

ScrollTrigger.create({
  trigger: ".current__wrap",
  // markers: true,
  id: "primero",
  start: "top top",
  end: "+=" + 2 * window.innerHeight + "px",
  pin: true,
}),
  gsap.to(".currenttext__wrap", {
    scrollTrigger: {
      trigger: ".portfolio__horizontal",
      // markers: true,
      id: "segundo",
      toggleActions: "restart none reverse pause",
      start: "top top+=" + 2 * windowHeight + "px",
      end: "+=" + windowHeight + "px",
      scrub: !0,
    },
    opacity: 0,
    ease: "none",
  });

// gsap.to(".current__wrap", {
//   scrollTrigger: {

//   }
// });

//CURSOR

let cursor = document.getElementById("cursor"),
  elWidth = cursor.offsetWidth,
  elHeight = cursor.offsetHeight,
  width = window.innerWidth,
  height = window.innerHeight,
  target = {
    x: width / 2,
    y: height / 2,
  },
  position = {
    x: height,
    y: width,
  },
  ease = 0.075;

window.addEventListener("mousemove", function (event) {
  target.x = event.clientX;
  target.y = event.clientY;
});

function update() {
  let dx = target.x - position.x,
    dy = target.y - position.y,
    vx = dx * ease,
    vy = dy * ease;

  position.x += vx;
  position.y += vy;

  cursor.style.left = (position.x - elWidth / 2).toFixed() + "px";
  cursor.style.top = (position.y - elHeight / 2).toFixed() + "px";

  requestAnimationFrame(update);
}

update();

//INITIAL SCROLL
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
