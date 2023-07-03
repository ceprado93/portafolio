let container = document.querySelector(".container");
let header = document.querySelector("header");
let portfolio__grid = document.querySelector(".portfolio__grid");
let portfolio__horizontal = document.querySelector(".portfolio__horizontal");
let colorToggle = document.querySelector(".colorToggle");
let colorToggleBlock = document.querySelector(".topnav__p--color");

let nav__lang = document.querySelector(".nav__lang");
let lang_es = document.querySelector(".lang--es");
let lang_en = document.querySelector(".lang--en");

document.querySelector(".lang--active");
let debounceTimeout;
let projectId;

gsap.registerPlugin(ScrollTrigger);
const gridArticle = gsap.utils.toArray(".portfolio__grid .article");
const currentInnerWrap = document.querySelector(".current__wrap--inner");
const currentWrapHeight = window.innerHeight;
let effect = document.querySelectorAll(".effect");
let sections = gsap.utils.toArray(".grid__wrap--horizontal article");

let modal = document.querySelector(".modal");
let closeButtons = document.querySelectorAll(".close_button");

let project = document.querySelector(".project");

const loadingAnimation = () => {
  colorToggle?.classList.remove("rotate");

  setTimeout(() => {
    colorToggle?.classList.remove("initial");
    setTimeout(() => {
      container?.classList.remove("initial");

      let tl = new TimelineMax();
      scrollHorizontall(sections, portfolio__horizontal);
      if (window.innerWidth > 767) {
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

const loadGsap = (header, portfolio__grid, gridArticle, currentInnerWrap, effect) => {
  if (window.innerWidth > 767) {
    ScrollTrigger.create({
      trigger: header,
      // markers: true,
      id: "top",
      start: "top top",
      end: "+=" + 0.2 * window.innerHeight + "px",
      pin: true,
    });
    ScrollTrigger.config({
      ignoreMobileResize: true,
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
  }

  gridArticle.forEach((gridArt, index) => {
    if (window.innerWidth > 767) {
      gsap.from(gridArt, {
        scrollTrigger: {
          start: "top 90%",
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
        start: "top center",
        end: "bottom center",
      });
      ScrollTrigger.config({
        ignoreMobileResize: true,
      });
      gsap.fromTo(
        article__wrap,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: gridArt,
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
      { opacity: 0.2 },
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

const loadProjectGsap = () => {
  let projectImgs = gsap.utils.toArray(".project__img");
  projectImgs.forEach((img, index) => {
    gsap.from(img, {
      scrollTrigger: {
        start: "top 90%",
        trigger: img,
        onEnter: () => {
          img.classList.add("display");
        },
      },
    });
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
  if (header) {
    loadingAnimation();
    loadGsap(header, portfolio__grid, gridArticle, currentInnerWrap, effect);
    portfolio__grid?.addEventListener("click", handleGridClick);
    portfolio__horizontal?.addEventListener("click", handleGridClick);
  }
  if (project) {
    let param = window.location.search.replace("?", "");
    let project = projects.find((project) => project.qs === param);
    projectId = project.id;
    handleModal();
    setTimeout(() => handleHtml(project), 1000);
  }
  colorToggleBlock?.addEventListener("click", () => toogleColor(colorToggle));
  nav__lang?.addEventListener("click", (e) => handleLang(e));

  if (window.innerWidth > 767) {
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
  } else {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }

  handleClose();
});

const handleLang = (event) => {
  let target = event.target;
  let newLang = target.getAttribute("data-lang");
  let activeLang = document.querySelector(".lang--active");
  let disabledLang = document.querySelector(".lang--disabled");
  activeLang.classList.replace("lang--active", "lang--disabled");
  disabledLang.classList.replace("lang--disabled", "lang--active");

  document.querySelector(".colorToggle__text").innerText = newLang === "esTexts" ? esTexts.theme : enTexts.theme;
  document.querySelector(".header__desc--text").innerText = newLang === "esTexts" ? esTexts.description : enTexts.description;
};

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

function scrollHorizontall(horizontalSections, portfolioHorizontal) {
  gsap.to(horizontalSections, {
    xPercent: -85 * (horizontalSections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: portfolioHorizontal,
      pin: true,
      scrub: 0.5,
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
  let qS = project ? "?" + project.qs : "";
  // history.replaceState({ page: type }, type, "/" + type + ".html" + qS);
  history.replaceState({ page: type }, type, "/portafolio/" + type + ".html" + qS);

  fetch(type + ".html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");
      let docContainer = doc.querySelector(".container");
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      if (project) {
        let projectImg = doc.querySelector(".project__img");
        let proj__img = doc.querySelectorAll(".proj__img");
        let proj = doc.querySelector(".project");
        if (project.id % 2 === 0) proj.classList.add("ligth");
        else proj.classList.remove("ligth");
        let docTitle = doc.querySelector(".project__title");
        docTitle.innerHTML = project.title;
        if (project.id === "6" || project.id === "9") {
          docTitle.classList.add("project__title-mobile");
        }
        doc.querySelector(".project__description").innerHTML = project.description;
        doc.querySelector(".project__description1").innerHTML = project.description1;
        doc.querySelector(".project__description2").innerHTML = project.description2;

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
          if (project.projImgs.length < 8) doc.querySelector(".project__row-sixth").style.display = "none";
        }

        let tags = doc.querySelectorAll(".project__info p");
        tags.forEach((tag, index) => (tag.innerHTML = project.tags[index]));

        projectImg.id = "projectImg" + project.id;
      } else {
        doc.querySelector(".colorToggle").classList.remove("initial");
        docContainer.classList.remove("initial");
      }
      let docBody = docContainer.innerHTML;
      let newContainer = document.querySelector(".container");
      newContainer.innerHTML = docBody;
      newContainer.classList.remove("initial");
      project ? newContainer.classList.remove("container--fullWidth") : newContainer.classList.add("container--fullWidth");
      modal.classList.remove("show");
      modal.classList.remove("fadeIn");
      if (modal.classList.contains("ligth")) modal.classList.remove("ligth");
    })
    .then(() => {
      if (project) {
        projectId = project.id;

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
        loadProjectGsap();
      } else {
        let newSections = gsap.utils.toArray(".grid__wrap--horizontal article");
        let newgridArticle = gsap.utils.toArray(".portfolio__grid .article");
        let newHeader = document.querySelector(".header");

        let newcurrentInnerWrap = document.querySelector(".current__wrap--inner");
        let neweffect = document.querySelectorAll(".effect");
        let horPortfolio = document.querySelector(".portfolio__horizontal");
        let portfolioGrid = document.querySelector(".portfolio__grid");
        let newCol = document.querySelector(".colorToggle");
        let colBlock = document.querySelector(".topnav__p--color");

        scrollHorizontall(newSections, horPortfolio);
        loadGsap(newHeader, portfolioGrid, newgridArticle, newcurrentInnerWrap, neweffect);
        portfolioGrid?.addEventListener("click", handleGridClick);
        horPortfolio?.addEventListener("click", handleGridClick);
        colBlock?.addEventListener("click", () => {
          toogleColor(newCol);
        });
        if (projectId) {
          const element = document.getElementById(projectId);
          if (element) {
            setTimeout(function () {
              element.scrollIntoView({ behavior: "smooth" });
            }, 0);
          }
          projectId = null;
        }
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
    qs: "aps",
    subtitle: "MERN app para rally media.",
    description:
      "APS es una web de rallyes que ofrece contenido del sector en diferentes formatos como videos, fotografías y noticias. Para este proyecto realicé el diseño de la web, el desarrollo front end y back end.",
    description1:
      "Utilicé React para el front end y Sass para darle estilo, la API de Wordpress como CMS y la API de Youtube para el contenido de los videos. Para el backend me serví de Express.js y de una base de datos de MongoDB.",
    description2: "Por otro lado, para la versión móvil creé un diseño más simple e intuitivo con el que el usuario pudiera acceder de forma más rápida y sencilla al contenido audiovisual.",
    tags: ["Madrid", "Web", "News", "2021"],
    img: "./assets/img/aps.webp",
    projImgs: [
      "./assets/img/aps/aps_hero-laptop.png",
      "./assets/img/aps/aps_media-laptop.png",
      "./assets/img/aps/aps_video-iphone.png",
      "./assets/img/aps/aps_video-ipad.png",
      "./assets/img/aps/aps_hero-iphone.png",
      "./assets/img/aps/aps_news-ipad.png",
      "./assets/img/aps/aps_media-iphone.png",
      "./assets/img/aps/aps_hero-ipad.png",
    ],
    landing: "./assets/img/apsRacing.webp",
    size: "big",
    row: "row1",
    column: "column1",
  },
  {
    id: "1",
    title: "Wave Maps",
    qs: "wm",
    subtitle: "Atlas de Surf y Olas MERN .",
    description:
      "Wave Maps es una página web de atlas de olas que elaboré en colaboración con la programadora Eva Virseda. La web ofrece información detallada sobre los spots de surf, incluyendo mapas interactivos y características de las olas. <br><br> El objetivo del proyecto fue crear una web que recogiera información práctica sobre las olas y que a su vez fuese visualmente atractiva y fácil de navegar.",
    description1:
      "En este caso realizamos el diseño de la web, el front end y el backend a través de la creación de una interfaz simple con alto contenido visual. Para el desarrollo front end usamos React y Sass. Respecto al backend, lo elaboramos con Express y con una base de datos no relacional a partir de MongoDB, conectando ambas con Axios.",
    description2:
      "Con el objetivo de crear una web que fuese escalable, creamos un área privada para que los usuarios pudiesen darse de alta. Gracias al uso de un CMS propio, los visitantes podían gestionar la información de cada spot, añadir nuevas ubicaciones y escribir comentarios en otros espacios.",
    tags: ["Madrid", "Web", "Atlas", "2021"],
    img: "./assets/img/wavemaps.webp",
    landing: "./assets/img/wm-home.webp",
    projImgs: [
      "./assets/img/wavemaps/wm_hero-laptop.png",
      "./assets/img/wavemaps/wm_wave-laptop.png",
      "./assets/img/wavemaps/wm_america-ipad.png",
      "./assets/img/wavemaps/wm_aus-laptop.png",
      "./assets/img/wavemaps/wm_africa-ipad.png",
      "./assets/img/wavemaps/wm_login-laptop.png",
      "./assets/img/wavemaps/wm_profile-laptop.png",
      "./assets/img/wavemaps/wm_asia-iphone.png",
    ],
    size: "small",
    row: "row3",
    column: "column2",
  },
  {
    id: "2",
    title: "Celia Perez Art",
    qs: "cpa",
    subtitle: "React y Sass portafolio de una artista y diseñadora.",
    description:
      "La web Celia Pérez Art es el escaparte de las obras y el espacio de contacto de la artista Celia Pérez.<br><br> Ella se encargó del diseño y yo de la programación y desarrollo web para crear una página que fuese en línea con el estilo y la identidad de las obras.",
    description1:
      "Para ello, nos basamos en los colores y las texturas de la naturaleza, la principal fuente de inspiración de la artista, que reproduce a través de la técnica mixta sobre lienzo y el uso de diferentes materiales de construcción.",
    description2:
      "En la primera fase del proyecto programé el front end con React y le di estilo con Sass. Más adelante, para tener la opción de añadir más contenido a la página, usé el CMS de Wordpress y lo conecté a la web a través de la API.",
    tags: ["Bilbao", "Web", "Portfolio", "2021"],
    img: "./assets/img/cpzfondo.webp",
    landing: "./assets/img/celia_landing.webp",
    projImgs: [
      "./assets/img/celiaprerezart/celia_hero-laptop.png",
      "./assets/img/celiaprerezart/celia_hero-iphone.png",
      "./assets/img/celiaprerezart/celia_works-laptop.png",
      "./assets/img/celiaprerezart/celia_workextend-laptop.png",
      "./assets/img/celiaprerezart/celia_works-iphone.png",
    ],
    size: "small",
    row: "row4",
    column: "column2",
  },
  {
    id: "3",
    title: "La Bamba",
    qs: "lb",
    subtitle: "MERN web para una empresa de eventos de Madrid.",
    description:
      "La Bamba es el proyecto de diseño de una página web de eventos, para el cual me encargué del desarrollo front end y el backend. Respecto al diseño front end usé React y Redux y me apoyé en Sass para dar estilo al contenido. El backend lo creé con Express a través de una base de datos no relacional y conecté ambas interfaces con Ajax.",
    description1: "",
    description2:
      "Con el objetivo de desarrollar una web interactiva, programé un área de usuarios en la que el administrador pudiera aceptar artistas, modificar contenido y validar la información. Del mismo modo, los usuarios podían darse de alta, gestionar su documentación y comunicarse con el administrador.",
    tags: ["Madrid", "Web", "Business", "2021"],
    img: "./assets/img/bardot.webp",
    landing: "./assets/img/bamba/bamba_movil.png",
    projImgs: [
      "./assets/img/bamba/bamba_hero-laptop.png",
      "./assets/img/bamba/bamba_locations-laptop.png",
      "./assets/img/bamba/bamba_section-ipad.png",
      "./assets/img/bamba/bamba_hero-iphone.png",
      "./assets/img/bamba/bamba_locations-iphone.png",
      "./assets/img/bamba/bamba_polvora-iphone.png",
      "./assets/img/bamba/bamba_djs-laptop.png",
      "./assets/img/bamba/bamba_list-iphone.png",
    ],
    size: "medium",
    row: "row3",
    column: "column1",
  },
  {
    id: "4",
    title: "Oir 10",
    qs: "o10",
    subtitle: "React y Sass web.",
    description: "Oir10 es el proyecto web de la comercializadora online Nemeson One, empresa dedicada a la venta de dispositivos inteligentes para la recuperación auditiva.",
    description1:
      "Para que el diseño de la página contara con un desarrollo de ecommerce, utilicé el contexto de React a nivel global en toda la web. También hice uso de React para el front end y escogí Sass para dar estilo a todo el espacio.",
    description2:
      "Para gestionar los productos en venta, la pasarela de pago y el feedback de los clientes en las diferentes páginas, utilicé la API de Shopify como backend y para el procesamiento de las compras y los pagos.",
    tags: ["Madrid", "Web", "E-commerce", "2021"],
    img: "./assets/img/manos.webp",
    landing: "./assets/img/nemesonone_landing.webp",
    projImgs: [
      "./assets/img/oir10/oir10_hero-laptop.png",
      "./assets/img/oir10/oir10_product-laptop.png",
      "./assets/img/oir10/oir10_accesories-ipad.png",
      "./assets/img/oir10/oir10_nosotros-ipad.png",
      "./assets/img/oir10/oir10_loader-iphone.png",
    ],
    size: "small",
    row: "row1",
    column: "column3",
    url: "https://nemesonone.es/",
  },
  {
    id: "5",
    title: "Procorlab",
    qs: "pl",
    subtitle: "E-commerce y plataforma de reservas para tests medicos.",
    description:
      "Procorlab es la página web de Procor, empresa fundada en la pandemia con el fin de suministrar tests COVID y de ofrecer un sistema de reserva de pruebas en Madrid. <br><br>Para ello, la programación de la web incluyó el diseño de un ecommerce, de una plataforma de reserva de citas, de un área privada que alojara la información de los clientes y de la creación de un blog.",
    description1:
      "El desarrollo front end lo realicé con React y Redux y me serví del contexto de React para ello. A su vez, usé Shopify como gestor de la tienda online (conectado vía API) y con Sass para darle estilo.",
    description2:
      "Para el desarrollo backend programé la página web en PHP y utilicé una base de datos relacional a través de MySQL. Respecto al blog, utilicé la API de Wordpress con el fin de que el usuario pudiera alimentar el contenido y actualizarlo de manera sencilla.",
    tags: ["Madrid", "Web", "E-commerce", "2021"],
    img: "./assets/img/procor.webp",
    landing: "./assets/img/procorlab_landing.webp",
    projImgs: [
      "./assets/img/procor/procor_hero-laptop.png",
      "./assets/img/procor/procor_shop-laptop.png",
      "./assets/img/procor/procor_blog-ipad.png",
      "./assets/img/procor/procor_hero-iphone.png",
      "./assets/img/procor/procor_post-iphone.png",
    ],
    size: "big",
    row: "row3",
    column: "column3",
    url: "https://procorlab.es/",
  },

  {
    id: "6",
    title: "Zorraquino",
    qs: "zq",
    subtitle: "PHP y CRM de Zorraquino.",
    description: "En la agencia Zorraquino trabajamos desde la triple perspectiva del diseño, la tecnología y el negocio para implantar experiencias de marca y productos digitales vivos.",
    description1: "Somos un equipo multidisciplinar, formado por personas humanistas, tecnólogas, creadoras y creativas que trabajan juntas para el diseño de soluciones competitivas.",
    description2:
      "Entre nuestros clientes destacan nombres como Kutxabank, EITB, IMQ, Saunier Duval, Goiko o Vidrala, entre otros, para los que llevamos a cabo proyectos que van desde el diseño de páginas web de todo tipo hasta la creación de apps móviles con múltiples funcionalidades.",
    tags: ["Bilbao", "Web", "Agencia", "2022"],
    img: "./assets/img/zq.webp",
    landing: "./assets/img/zorraquino_landing.webp",
    projImgs: [
      "./assets/img/zq/zq_hero-laptop.png",
      "./assets/img/zq/zq_section-laptop.png",
      "./assets/img/zq/zq_team-ipad.png",
      "./assets/img/zq/zq_session-iphone.png",
      "./assets/img/zq/zq_hero-iphone.png",
    ],
    size: "big",
    row: "row1",
    column: "column2",
    url: "https://www.zorraquino.com/",
  },
  {
    id: "7",
    title: "Mi Saunier Duval",
    qs: "iq",
    subtitle: "App para Ios y Android con Ionic y Vue.",
    description:
      "La app Mi Saunier Duval es una aplicación móvil para iOS y Android diseñada para los clientes de Saunier Duval.<br><br> Los objetivos de crear esta app móvil fueron tres: alojar información sobre los consumos de los clientes, ofrecer la posibilidad de ajustar la caldera en tiempo real y conectar a los usuarios con el servicio técnico oficial.",
    description1:
      "Del diseño de la app se encargó el equipo especializado de Zorraquino. Mi misión fue programar el front end con herramientas como Ionic Vue, Capacitor, Cordova y Sass para darle estilo, y conectarlo vía API con el backend desarrollado por la empresa Kaytek.",
    description2:
      "El mayor reto de crear esta aplicación fue diseñar y programar una app desde cero que fuese fácil de entender y que a su vez transmitiese toda la información relevante y se ajustase a los perfiles de los diferentes usuarios.",
    tags: ["Bilbao", "App", "Ios & Android", "2023"],
    img: "./assets/img/sdiq_app.webp",
    landing: "./assets/img/sdiq_landing.webp",
    projImgs: [
      "./assets/img/sdiq/iq_hero-ios.png",
      "./assets/img/sdiq/iq_consume-ios.png",
      "./assets/img/sdiq/iq_mode-ios.png",
      "./assets/img/sdiq/iq_offer-ios.png",
      "./assets/img/sdiq/iq_regulate-ios.png",
    ],
    size: "medium",
    row: "row3",
    column: "column4",
  },
  {
    id: "8",
    title: "White hole",
    qs: "wh",
    subtitle: "PHP y CRM de Zorraquino.",
    description: "Whitehole es un fondo de inversión del grupo Velatia para el que Zorraquino hizo un diseño estratégico de su marca, lo que incluyó el desarrollo de su página web.",
    description1: "En este caso, realicé el desarrollo web con PHP, JavaScript y Sass y utilicé el CMS creado en Zorraquino para alojar todo el contenido.",
    description2:
      "Con el objetivo de mejorar la usabilidad de la web y de ofrecer una experiencia de usuario única, incluimos una serie de animaciones y transiciones que dotaron de exclusividad y atractivo a toda la página.",
    tags: ["Bilbao", "Web", "Business", "2022"],
    img: "./assets/img/whitehole.webp",
    landing: "./assets/img/whitehole_landing.webp",
    projImgs: [
      "./assets/img/wh/wh_hero-laptop.png",
      "./assets/img/wh/wh_section-iphone.png",
      "./assets/img/wh/wh_section-ipad.png",
      "./assets/img/wh/wh_card-iphone.png",
      "./assets/img/wh/wh_hero-iphone.png",
    ],
    size: "small",
    row: "row3",
    column: "column3",
    url: "https://www.whitehole.es/",
  },
  {
    id: "9",
    title: "Clientes Kutxabank",
    qs: "kb",
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "Kutxabank dispone de una página web que proporciona a los clientes acceso a una amplia variedad de servicios financieros. Está construida con PHP, JS y CSS y utiliza el CMS diseñado por la agencia Zorraquino.",
    description1:
      "De cara a ofrecer la mejor experiencia a los usuarios, mi trabajó consistió en desarrollar varios simuladores de hipotecas, páginas de préstamos y guías de seguros médicos, entre otros.",
    description2:
      "El desarrollo de esta página web representa el proyecto más retador de mi portfolio debido a su tamaño y a su precisión, ya que la publicación de cada contenido está sujeta al proceso de validación de varios departamentos.",
    tags: ["Bilbao", "Web", "Portal", "2022"],
    img: "./assets/img/kutxabank.webp",
    landing: "./assets/img/clientes_landing.webp",
    projImgs: [
      "./assets/img/kb/kb_simrapido-laptop.png",
      "./assets/img/kb/kb_hero-iphone.png",
      "./assets/img/kb/kb_max-ipad.png",
      "./assets/img/kb/kb_bonif-ipad.png",
      "./assets/img/kb/kb_prestamo-iphone.png",
    ],
    size: "big",
    row: "row3",
    column: "column1",
    url: "https://clientes.kutxabank.es/es/",
  },
  {
    id: "10",
    title: "Instal Xpert Saunier Duval",
    qs: "ix",
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "La página de Instal Xpert se creó para llevar a cabo la contratación de calderas o sistemas de aerotermia de Saunier Duval desde la web. Dentro de este proyecto, mi trabajo consistió en realizar un test A/B para probar la conversión de leads de dos landings, una con un formulario y otra con un asistente.",
    description1: "La web esta programada en php principalmente, pero tambien tiene bastante logica con Js y usa SASS para darle estilo.",
    description2: "",
    tags: ["Bilbao", "Web", "Test A/B", "2023"],
    img: "./assets/img/saunier.webp",
    landing: "./assets/img/instalxpert_landing.webp",
    projImgs: [
      "./assets/img/ix/ix_aerotermia-laptop.png",
      "./assets/img/ix/ix_section-ipad.png",
      "./assets/img/ix/ix_section-iphone.png",
      "./assets/img/ix/ix_calderas-iphone.png",
      "./assets/img/ix/ix_aerotermia-iphone.png",
    ],
    size: "small",
    row: "row2",
    column: "column4",
    url: "https://instalxpert.saunierduval.es/",
  },
  {
    id: "11",
    title: "Enkartur",
    qs: "en",
    subtitle: "PHP y CRM de Zorraquino.",
    description: "Digital Signage de Enkartur es una web informativa desarrollada para la agencia de turismo de las encartaciones, disponible en formato iPad y otros dispositivos táctiles.",
    description1: "Para ello, me encargué de programar la web en JavaScript y en PHP. Utilicé el CMS propio de Zorraquino para el desarrollo backend y le di estilo con el programador CSS y con Sass.",
    description2:
      "El mayor reto de este proyecto fue diseñar una interfaz que se ajustase tanto a las dimensiones del IPad como a las de un televisor grande, de manera que ambos fuesen cómodos de navegar y útiles para los usuarios.",
    tags: ["Bilbao", "Web", "Entertainment", "2023"],
    img: "./assets/img/Enkarterri.webp",
    projImgs: [
      "./assets/img/enkartur/enkartur_hero-tv.png",
      "./assets/img/enkartur/enkartur_list-tv.png",
      "./assets/img/enkartur/enkartur_post-tv.png",
      "./assets/img/enkartur/enkartur_hero-ipad.png",
      "./assets/img/enkartur/enkartur_post-ipad.png",
    ],
    landing: "./assets/img/digitalsignage_landing.webp",
    size: "small",
    row: "row2",
    column: "column1",
    url: "https://www.visitenkarterri.com/",
  },
];

const esTexts = {
  theme: "Cambiar color",
  description:
    "Me presento. Soy Carlos Prado, programador web con más de tres años de experiencia en el desarrollo web y aplicaciones móviles. He trabajado en agencias de diseño, agencias de publicidad y empresas multinacionales y estoy especializado en la creación de interfaces navegables y atractivas que destacan por ser funcionales y visualmente impactantes. Mis proyectos ofrecen una experiencia de usuario amigable gracias a la búsqueda del equilibrio entre funcionalidad y estética.",
};

const enTexts = {
  theme: "Change theme",
  description:
    "Let me introduce myself. I'm Carlos Prado, creative developer with more than three years of experience in web development and mobile apps. I have worked in design agencies, advertising agencies and multinational companies and I focus in creating navigable and attractive interfaces that stand out for being functional and visually stunning. My projects offer a friendly user experience thanks to the search for balance between functionality and aesthetics.",
};
