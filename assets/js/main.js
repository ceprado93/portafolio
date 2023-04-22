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

//INITIAL ANIMATION

let header = document.querySelector("header");
let portfolio__horizontal = document.querySelector(".portfolio__horizontal");
let footer = document.querySelector("footer");
let sec_separata = document.querySelectorAll(".sec_separata");
let colorToggle = document.querySelector(".colorToggle");
let container = document.querySelector(".container");

let textSpan = document.querySelectorAll(".currenttext__wrap p span");
const currentWrap = document.querySelector(".current__wrap--inner");
const currentWrapHeight = window.innerHeight * 1.6;
let effect1 = document.querySelectorAll(".effect1");
let effect2 = document.querySelectorAll(".effect2");
let effect3 = document.querySelectorAll(".effect3");
let effect4 = document.querySelectorAll(".effect4");

let articles = document.querySelectorAll("article");
let modal = document.querySelector(".modal");
let modalContainer = document.querySelector(".modal__container");
let modalTitle = document.querySelector(".modal__title");
let modalDescription = document.querySelector(".modal__description");
let modalImg = document.querySelector(".modal__img");
let modallandingImg = document.querySelector(".modal__landingImg");
let closeButton = document.querySelector(".close_button");

gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".grid__wrap--horizontal article");

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
    var tl = new TimelineMax();

    //   gsap.from(".header-top", { y: 20, opacity: 0, duration: 0.8 });
    tl.from("h1", { y: 0, x: -30, opacity: 0, duration: 0.8, delay: 0.6 });
    tl.from(".header__info h3", { y: 30, x: -30, opacity: 0, duration: 0.8, delay: 0.3 });
    tl.from(".headerDesc__text", { y: 30, x: 30, opacity: 0, duration: 0.8 });
  }, 1500);

  //COLOR TOGGLE

  colorToggle.addEventListener("click", () => {
    if (colorToggle.classList.contains("light")) {
      colorToggle.classList.remove("light");
      container.classList.add("dark");
    } else {
      colorToggle.classList.add("light");
      container.classList.remove("dark");
    }
  });

  //GSAP

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

  textSpan.forEach(function (t) {
    t.classList.remove("effect1", "effect2", "effect3", "effect4");
  });
  textSpan.forEach(function (t) {
    t.classList.add("effect" + parseInt(Math.floor(4 * Math.random()) + 1));
  });

  currentWrap.style.height = `${currentWrapHeight}px`;
  gsap.to(".currenttext__wrap", {
    scrollTrigger: {
      trigger: ".current__wrap",
      id: "currenttext__wrap",
      // markers: true,
      start: "top top",
      end: "bottom bottom",
      scrub: !0,
      pin: ".current__wrap--inner",
    },
    // y: "-5%",
    ease: "none",
  }),
    effect1.forEach(function (t) {
      gsap.to(t, {
        scrollTrigger: {
          trigger: t.closest(".current__intro"),
          start: "top 0%",
          end: "top -40%",
          scrub: !0,
        },
        opacity: 0,
        ease: "none",
      });
    }),
    effect2.forEach(function (t) {
      gsap.to(t, {
        scrollTrigger: {
          trigger: t.closest(".current__intro"),
          id: "effect2",
          start: "top -20%",
          end: "top -60%",
          scrub: !0,
        },
        opacity: 0,
        ease: "none",
      });
    }),
    effect3.forEach(function (t) {
      gsap.to(t, {
        scrollTrigger: {
          trigger: t.closest(".current__intro"),
          id: "effect3",
          start: "top -40%",
          end: "top -80%",
          scrub: !0,
        },
        opacity: 0,
        ease: "none",
      });
    }),
    effect4.forEach(function (t) {
      gsap.to(t, {
        scrollTrigger: {
          trigger: t.closest(".current__intro"),
          id: "effect4",
          start: "top -60%",
          end: "top -100%",
          scrub: !0,
        },
        opacity: 0,
        ease: "none",
      });
    });

  //HORIZONTAL SCROLL

  function scrollHorizontall() {
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
  }

  //MODAL

  articles.forEach((elm) => {
    elm.addEventListener("click", () => {
      projects.forEach((project) => {
        if (project.id === elm.id) {
          modalTitle.innerHTML = project.title;
          modalDescription.innerHTML = project.description;
          modalImg.src = project.img;
          modallandingImg.src = project.landing;
          modalImg.id = "modalImg" + project.id;

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

  //Fin
};
