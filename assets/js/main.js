let container = document.querySelector(".container");
let header = document.querySelector("header");
let portfolio__grid = document.querySelector(".portfolio__grid");
let portfolio__horizontal = document.querySelector(".portfolio__horizontal");
let colorToggle = document.querySelector(".colorToggle");
let colorToggleBlock = document.querySelector(".topnav__p--color");

let debounceTimeout;

gsap.registerPlugin(ScrollTrigger);
const gridArticle = gsap.utils.toArray(".portfolio__grid .article");
const currentInnerWrap = document.querySelector(".current__wrap--inner");
const currentWrapHeight = window.innerHeight;
let effect = document.querySelectorAll(".effect");
let sections = gsap.utils.toArray(".grid__wrap--horizontal article");

let modal = document.querySelector(".modal");
let closeButtons = document.querySelectorAll(".close_button");

const loadingAnimation = () => {
  colorToggle?.classList.remove("rotate");

  setTimeout(() => {
    colorToggle?.classList.remove("initial");
    setTimeout(() => {
      container?.classList.remove("initial");
      scrollHorizontall(sections);

      let tl = new TimelineMax();
      if (window.innerWidth > 768) {
        gsap.from("h1", { y: 0, x: -30, opacity: 0, duration: 0.6, delay: 0 });
        tl.from(".header__info", { y: 30, x: -30, opacity: 0, duration: 0.3 });
        tl.from(".text--bounce", { y: 30, x: 0, opacity: 0, duration: 0.3 });
        tl.from(".header__desc--text", { y: 30, x: 30, opacity: 0, duration: 0.3 });
      } else {
        gsap.from("h1", { y: 0, x: -30, opacity: 0, duration: 0.6 });
        gsap.from(".header__info", { y: 30, x: -30, opacity: 0, duration: 0.6 });
        gsap.from(".text--bounce", { y: 0, x: -30, opacity: 0, duration: 0.6 });
        gsap.from(".header__desc--text", { y: 30, x: 30, opacity: 0, duration: 0.6 });
      }
    }, 650);
  }, 600);
};

const toogleColor = (elm) => (elm.classList.contains("light") ? (elm.classList.remove("light"), container.classList.add("dark")) : (elm.classList.add("light"), container.classList.remove("dark")));

const loadGsap = (gridArticle, currentInnerWrap, effect) => {
  ScrollTrigger.create({
    trigger: header,
    // markers: true,
    id: "top",
    start: "top top",
    end: "+=" + 0.2 * window.innerHeight + "px",
    pin: true,
  });
  gsap.to(header, {
    scrollTrigger: {
      trigger: portfolio__grid,
      // markers: true,
      id: "topdos",
      toggleActions: "restart none reverse pause",
      start: "top top+=" + 0.8 * window.innerHeight + "px",
      end: "+=" + 0.4 * window.innerHeight + "px",
      scrub: !0,
    },
    opacity: 0,
    ease: "none",
  });

  gridArticle.forEach((gridArt, index) => {
    if (window.innerWidth > 768) {
      gsap.from(gridArt, {
        scrollTrigger: {
          start: "top bottom",
          end: "bottom top",
          trigger: gridArt,
          toggleClass: "display",
        },
      });
    } else {
      gridArt.classList.add("display");
      const article__wrap = gridArt.querySelector(".article__wrap");
      const article__media = article__wrap.querySelector(".article__media");
      const [x, xEnd] = index % 2 ? [100, -20] : [-100, 20];
      ScrollTrigger.create({
        trigger: article__media,
        toggleClass: "centered",
        // markers: true,
        start: "top center",
        end: "bottom center",
      });
      gsap.fromTo(
        article__wrap,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: gridArt,
            // markers: true,
            scrub: 0.5,
          },
        }
      );
    }
  });

  if (currentInnerWrap) currentInnerWrap.style.height = `${currentWrapHeight}px`;
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
    ease: "none",
  });
  effect.forEach((t, index) => {
    let startPops = 60 * index + 200;
    let endPops = 5 * index;
    gsap.fromTo(
      t,
      { opacity: 0.45 },
      {
        scrollTrigger: {
          trigger: t,
          id: "effect",
          start: "top bottom-=" + startPops + "px",
          // markers: true,
          end: "top top-=" + endPops + "px",
          scrub: !0,
        },
        opacity: 1,
        ease: "none",
      }
    );
  });
};
const handleClose = () => {
  const closeButtons = document.querySelectorAll(".close_button");
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      modal.classList.add("light");
      handleModal();
      setTimeout(() => handleHtml(false), 1000);
    });
  });
};

window.addEventListener("DOMContentLoaded", () => {
  loadingAnimation();
  loadGsap(gridArticle, currentInnerWrap, effect);
  portfolio__grid?.addEventListener("click", handleGridClick);
  portfolio__horizontal?.addEventListener("click", handleGridClick);
  colorToggleBlock?.addEventListener("click", () => toogleColor(colorToggle));

  if (window.innerWidth > 768) {
    document.addEventListener("mousemove", (event) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        moveTitle(event);
      }, 10);
    });
    window.addEventListener("mousemove", (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
    });
    update();
  }

  handleClose();
  window.onbeforeunload = () => window.scrollTo(0, 0);
});

const moveTitle = (event) => {
  let text = document.getElementById("title");
  if (text) {
    let width = event.clientX || window.innerWidth / 2;
    let hexp = interpolate(event.clientX, 0, window.innerWidth, 0, 50) || 25;
    text.style.fontVariationSettings = `"wght" ${width}, "HEXP" ${hexp}`;
  }
};
const interpolate = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const cursor = document.getElementById("cursor");
const { offsetWidth: elWidth, offsetHeight: elHeight } = cursor;
const { innerWidth: width, innerHeight: height } = window;
const target = { x: width / 2, y: height / 2 };
const position = { x: height, y: width };
const ease = 0.075;

const update = () => {
  const { x: targetX, y: targetY } = target;
  const { x: posX, y: posY } = position;
  const dx = targetX - posX;
  const dy = targetY - posY;
  const vx = dx * ease;
  const vy = dy * ease;

  position.x += vx;
  position.y += vy;

  cursor.style.left = `${Math.round(position.x - elWidth / 2)}px`;
  cursor.style.top = `${Math.round(position.y - elHeight / 2)}px`;

  requestAnimationFrame(update);
};

function scrollHorizontall(horizontalSections) {
  gsap.to(horizontalSections, {
    xPercent: -100 * (horizontalSections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: portfolio__horizontal,
      pin: true,
      scrub: 1,
      end: "bottom top",
    },
  });
}

const handleGridClick = (event) => {
  const target = event.target.closest("article");
  if (!target) return;

  const project = projects.find((p) => p.id === target.id);
  if (!project) return;

  modal.classList.toggle("ligth", project.id % 2 === 0);
  handleModal();
  setTimeout(() => handleHtml(project), 1000);
};

const handleModal = () => {
  if (modal.classList.contains("show")) {
    setTimeout(() => {
      modal.classList.remove("fadeIn");
    }, 100);
    setTimeout(() => {
      modal.classList.remove("show");
      if (modal.classList.contains("ligth")) modal.classList.remove("ligth");
    }, 1000);
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
    }, 1000);
  }
};

const handleHtml = (project) => {
  let indexPos;
  if (!project) {
    indexPos = document.querySelector(".project__index").innerHTML.replace("[", "").replace("]", "");
  }
  let type = project ? "project" : "index";
  history.replaceState({ page: type }, type, "/portafolio/" + type + ".html");
  fetch(type + ".html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");
      let docContainer = doc.querySelector(".container");

      if (project) {
        let projectImg = doc.querySelector(".project__img");
        let proj__img = doc.querySelectorAll(".proj__img");
        let proj = doc.querySelector(".project");
        if (project.id % 2 === 0) proj.classList.add("ligth");
        else proj.classList.remove("ligth");
        doc.querySelector(".project__title").innerHTML = project.title;
        doc.querySelector(".project__description").innerHTML = project.description;
        doc.querySelector(".project__index").innerHTML = "[" + project.id + "]";
        if (project.id !== "11") {
          doc.querySelector(".link__next").id = parseInt(project.id) + 1;
          doc.querySelector(".link__next .link-hover").innerHTML = projects[parseInt(project.id) + 1].title;
        } else {
          doc.querySelector(".link__next").id = 0;
          doc.querySelector(".link__next .link-hover").innerHTML = projects[0].title;
        }
        projectImg.src = project.img;
        if (project.projImgs) {
          proj__img.forEach((elm, idx) => {
            elm.src = project.projImgs[idx];
          });
        }

        let tags = doc.querySelectorAll(".project__info p");
        tags.forEach((tag, index) => (tag.innerHTML = project.tags[index]));

        projectImg.id = "projectImg" + project.id;
      } else {
        doc.querySelector(".colorToggle").classList.remove("initial");
        docContainer.classList.remove("initial");
      }
      let docBody = docContainer.innerHTML;

      document.querySelector(".container").innerHTML = docBody;
      modal.classList.remove("show");
      modal.classList.remove("fadeIn");
      if (modal.classList.contains("ligth")) modal.classList.remove("ligth");
    })
    .then(() => {
      if (project) {
        closeButtons = document.querySelectorAll(".close_button");
        closeButtons.forEach((closeButton) => {
          closeButton.addEventListener("click", () => {
            modal.classList.add("ligth");
            handleModal();
            setTimeout(() => {
              handleHtml(false);
            }, 1000);
          });
        });
        document.querySelector(".link__next").addEventListener("click", handleGridClick);
      } else {
        let newSections = gsap.utils.toArray(".grid__wrap--horizontal article");
        let newgridArticle = gsap.utils.toArray(".portfolio__grid .article");
        let newcurrentInnerWrap = document.querySelector(".current__wrap--inner");
        let neweffect = document.querySelectorAll(".effect");
        let newCol = document.querySelector(".colorToggle");
        let colBlock = document.querySelector(".topnav__p--color");

        scrollHorizontall(newSections);
        loadGsap(newgridArticle, newcurrentInnerWrap, neweffect);
        document.querySelector(".portfolio__grid")?.addEventListener("click", handleGridClick);
        document.querySelector(".portfolio__horizontal")?.addEventListener("click", handleGridClick);
        colBlock?.addEventListener("click", () => {
          toogleColor(newCol);
        });
      }
    })
    .catch(function (err) {
      console.log("Failed to fetch page: ", err);
    });
};

const projects = [
  {
    id: "0",
    title: "APS Racing",
    subtitle: "MERN app para rally media.",
    description:
      "Página web de media de rallys hecha con React, Node.js, Express y MongoDB. Incluye noticias, resultados, calendario, perfiles de pilotos y equipos, galería de fotos y un foro de discusión. Es escalable, robusta y eficiente.",
    tags: ["Madrid", "Web", "News", "2021"],
    img: "./assets/img/aps.webp",
    projImgs: ["./assets/img/aps/aps-macbook.png"],
    landing: "./assets/img/apsRacing.webp",
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
    tags: ["Madrid", "Web", "Atlas", "2021"],
    img: "./assets/img/wavemaps.webp",
    landing: "./assets/img/wm-home.webp",
    size: "small",
    row: "row3",
    column: "column2",
  },
  {
    id: "2",
    title: "Celia Perez Art",
    subtitle: "React y Sass portafolio de una artista y diseñadora.",
    description:
      "El portfolio en línea de Celia Perez, diseñadora, está construido con React y Sass. Ofrece una vista completa de su trabajo, habilidades y experiencia, en una interfaz interactiva y visualmente atractiva. Es una solución moderna y profesional para promocionar el trabajo de un diseñador.",
    tags: ["Bilbao", "Web", "Portfolio", "2021"],
    img: "./assets/img/cpzfondo.webp",
    landing: "./assets/img/celia_landing.webp",
    size: "small",
    row: "row4",
    column: "column2",
  },
  {
    id: "3",
    title: "La Bamba",
    subtitle: "MERN web para una empresa de eventos de Madrid.",
    description:
      "La Bamba es una página web de eventos y conciertos construida con React, Node.js, Express y MongoDB. Ofrece información sobre artistas, fechas y lugares, venta de entradas y un calendario interactivo. Es una herramienta poderosa y escalable para los amantes de la música en vivo.",
    tags: ["Madrid", "Web", "Business", "2021"],
    img: "./assets/img/bardot.webp",
    landing: "./assets/img/bamba/bamba_movil.png",
    size: "medium",
    row: "row3",
    column: "column1",
  },
  {
    id: "4",
    title: "Nemeson One",
    subtitle: "React y Sass web.",
    description:
      "Página web informativa de los audífonos Nemeson One está creada con React, Redux y Sass. Ofrece detalles sobre características técnicas, diseño y confort. Es una experiencia interactiva y visualmente atractiva para explorar todas las bondades de los audífonos.",
    tags: ["Madrid", "Web", "E-commerce", "2021"],
    img: "./assets/img/manos.webp",
    landing: "./assets/img/nemesonone_landing.webp",
    size: "small",
    row: "row1",
    column: "column3",
    url: "https://nemesonone.es/",
  },
  {
    id: "5",
    title: "Procorlab",
    subtitle: "E-commerce y plataforma de reservas para tests medicos.",
    description:
      "La página web de la clínica Procorlab, un eccomerce de reserva de citas, está creada con React, Redux, Sass, PHP y MySQL. Ofrece una experiencia interactiva y visualmente atractiva, donde los usuarios pueden programar citas, comprar productos y acceder a información detallada sobre los servicios de la clínica.",
    tags: ["Madrid", "Web", "E-commerce", "2021"],
    img: "./assets/img/procor.webp",
    landing: "./assets/img/procorlab_landing.webp",
    size: "big",
    row: "row3",
    column: "column3",
    url: "https://procorlab.es/",
  },

  {
    id: "6",
    title: "Zorraquino",
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "La página web de la agencia de diseño Zorraquino está creada con PHP, JS y SASS, y utiliza el CMS propio de la agencia. Ofrece una amplia variedad de servicios de diseño gráfico, web y publicidad, y muestra su cartera de proyectos. Es una herramienta moderna y atractiva para la promoción de la marca y los servicios de la agencia.",
    tags: ["Bilbao", "Web", "Agencia", "2022"],
    img: "./assets/img/zq.webp",
    landing: "./assets/img/zorraquino_landing.webp",
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
    tags: ["Bilbao", "App", "Ios & Android", "2023"],
    img: "./assets/img/sdiq_app.webp",
    landing: "./assets/img/sdiq_landing.webp",
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
    tags: ["Bilbao", "Web", "Business", "2022"],
    img: "./assets/img/whitehole.webp",
    landing: "./assets/img/whitehole_landing.webp",
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
    tags: ["Bilbao", "Web", "Portal", "2022"],
    img: "./assets/img/kutxabank.webp",
    landing: "./assets/img/clientes_landing.webp",
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
    tags: ["Bilbao", "Web", "Business", "2022"],
    img: "./assets/img/saunier.webp",
    landing: "./assets/img/instalxpert_landing.webp",
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
    tags: ["Bilbao", "Web", "Entertainment", "2023"],
    img: "./assets/img/Enkarterri.webp",
    projImgs: [
      "./assets/img/enkartur/enkartur-laptop.webp",
      "./assets/img/enkartur/enkartur-ipad4.png",
      "./assets/img/enkartur/enkartur-ipad2.webp",
      "./assets/img/enkartur/enkartur-ipad3.png",
      "./assets/img/enkartur/enkartur-ipad.webp",
    ],
    landing: "./assets/img/digitalsignage_landing.webp",
    size: "small",
    row: "row2",
    column: "column1",
    url: "https://www.visitenkarterri.com/",
  },
];
