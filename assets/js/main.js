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
      scrollHorizontall(sections, portfolio__horizontal);

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
  // window.onbeforeunload = () => window.scrollTo(0, 0);
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

function scrollHorizontall(horizontalSections, portfolioHorizontal) {
  gsap.to(horizontalSections, {
    xPercent: -100 * (horizontalSections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: portfolioHorizontal,
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
  // history.replaceState({ page: type }, type, "/" + type + ".html");
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
        let docTitle = doc.querySelector(".project__title");
        docTitle.innerHTML = project.title;
        console.log(project.id);
        if (project.id === "6" || project.id === "9") {
          console.log("aaass");
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
        let horPortfolio = document.querySelector(".portfolio__horizontal");

        let newCol = document.querySelector(".colorToggle");
        let colBlock = document.querySelector(".topnav__p--color");

        scrollHorizontall(newSections, horPortfolio);
        loadGsap(newgridArticle, newcurrentInnerWrap, neweffect);
        document.querySelector(".portfolio__grid")?.addEventListener("click", handleGridClick);
        horPortfolio?.addEventListener("click", handleGridClick);
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
    description: "APS es una web de media de rallys, la idea era crear una web para que el canal de legolas pudiese juntar todo el contenido que iba creando, videos, fotos y noticias",
    description1:
      "Hice el diseno, el front y el back. El front esta hechoi con react, sass para darle estilo , utilizando la api de wordpress como cms y la api de youtube para los videos. El back lo hice con express js y una base de datos de mongodb",
    description2: "Para la version movil busque un diseno mas simple e intuitivo, para que el usuario pueda acceder mas rapido a los videos",
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
    subtitle: "Atlas de Surf y Olas MERN .",
    description:
      "Wave Maps es una página web de atlas de olas, la hice justo con Eva Virseda, otra programadora de madrid. La web tiene información detallada sobre los spots de surf, incluyendo mapas interactivos y características de las olas.<br><br> Ahora hay webs con mucha info de olas pero no son visualmene atractivas, la idea era crear una web donde estuviese recogido toda la info de las olas pero que a la vez fuese facil de navegar y atractiva.",
    description1:
      "Hicimos el diseno, el font y el back.La idea del diseno era crear una interfaz simple y que pusiese el foco en el contenido visual. Hicimos el front con react y sass, y para que se pudiese escalar facilmente, el back lo montamos con express y una baswe de datos no relacional de mongo db. conectando ambos con axios",
    description2:
      "Para que este proyecto pudiese crecer con los usuarios, creamos un area privada donde los usuarios podian darse de alta con un cms propio podian gestionar la info de cada spot, anadir mas spots y poner comentarios en otras olas",
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
    subtitle: "React y Sass portafolio de una artista y diseñadora.",
    description:
      "El portfolio de Celia , la idea era crear una web donde pudiese juntar los cruadros que iba pintando y la gente le pudiese contactar. <br><br> Ella se encargo del diseno y yo de la programacion. La idea del diseno era crear una web que fuese en linea con las obras que pintaba celia y que reprensentase su identidad",
    description1:
      "En la primera fase del proyecto solo programe el front, creado con react y con sass para darle estilo. Para poder crear mas contenido use wordpress como cms , conectandolo a la web via api",
    description2:
      "Esta es la descripcion que me dio ella por si te ayuda. Su principal fuente de inspiración son los colores y las texturas de la naturaleza, que abstrae para dar vida a sus obras. Trabaja la técnica mixta sobre lienzo a través de la exploración de diferentes materiales de construcción, por lo tanto, sus obras están en constante desarrollo.",
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
    subtitle: "MERN web para una empresa de eventos de Madrid.",
    description: "Descripcion de la bamba:... <br><br> la diseno rodrigo ramirez, contenido tuyo y programacion mia.",
    description1: "Hice el front con react, redux y sass para darle estilo. El back lo hice con xpress y con base de datos no relacional, conectando back y front con ajax",
    description2:
      "Programe un area de usuarios donde el tt podia aceptar artistas, modificar la info que ponian y publicarlos si le parecia correcto, y los usuarios podian darse de alta , gestionar su info y hablar con el tt",
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
    subtitle: "React y Sass web.",
    description:
      "Por si te sirve esta es la descripcion  que me dieron. Oir10 nace para dar respuesta a los problemas auditivos de una forma sencilla y rápida gracias al avance tecnológico en el sector de la audiología, siendo la empresa comercializadora online exclusiva de Nemeson One, dispositivo inteligente para la recuperación auditiva de la última generación.",
    description1: "La pagina tenia front, que lo cree con react, con sass para el estilo, y utilice el context de react para crear el ecomeerce de forma global en toda la web. ",
    description2:
      "Para gestionar los productos en venta, la pasarela de pago y tener feedback de como funcionaban los clientes en las paginas de la web,  utilice la api de shopify, es decir , use shopify como back y como pasarela de pago, y para el front programe la pagina ",
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
    subtitle: "E-commerce y plataforma de reservas para tests medicos.",
    description:
      "Procor se creo en la pandema para vender tests a lo loco. La web la disenaron Rodrigo Ramirez y Chicote Guijarro y programacion de Daniel Urchegui y mia.<br><br> La web era un ecomerce, plataforma de reserva de citas, con area privada para que los clientes pudiesen descargarse los resultados de sus tests, y blog",
    description1:
      "El front estaba hecho con react, con redux, con el context de react y con shopify como gestor del ecomerce (conectado via api) y con sass para darle estilo. El back lo hicimos con php y utilizaba una base de datos relacional MySql. El blog utilizaba la api de wordpress para poder gestionar y subir contenido nuevo",
    description2: "Creamos una de las mayores tiendas de test covid y sistemas de reservas de pruebas de madrid",
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
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "La página web de la agencia de diseño Zorraquino está creada con PHP, JS y SASS, y utiliza el CMS propio de la agencia. Ofrece una amplia variedad de servicios de diseño gráfico, web y publicidad, y muestra su cartera de proyectos. Es una herramienta moderna y atractiva para la promoción de la marca y los servicios de la agencia.",
    description1: "",
    description2: "",
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
    title: "Saunier Duval IQ app",
    subtitle: "App para Ios y Android con Ionic y Vue.",
    description:
      "La aplicación Mi Saunier Duval, desarrollada con Ionic Vue y Sass, está disponible en Android e iOS. Controla tu caldera, conoce tu consumo y contacta con el servicio de mantenimiento de manera fácil y rápida. Mantén tu hogar cálido y seguro con solo unos toques en tu móvil",
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
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "Whitehole es un fondo de inversión del grupo Velatia. Su página web, desarrollada con PHP, JS, SASS y el CMS de la agencia Zorraquino, permite a los usuarios conocer sus servicios, filosofía y estrategias de inversión.",
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
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "La página web de clientes del banco Kutxabank está construida con PHP, JS y CSS, y utiliza el CMS de la agencia Zorraquino. Proporciona a los clientes acceso a una amplia variedad de servicios financieros, como cuentas corrientes, tarjetas de crédito, préstamos, hipotecas, seguros y fondos de inversión. Es una herramienta esencial para la gestión financiera en línea.",
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
    title: "Intal Xpert Saunier Duval",
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "La página web de Saunier Duval Instal Xpert, desarrollada con PHP, JS y SASS, utiliza el CMS de la agencia Zorraquino. Ayuda a encontrar la caldera o el sistema de aerotermia que se ajuste a tus necesidades. Ofrece una experiencia de usuario sencilla y fluida para facilitar la compra y la instalación de los productos.",
    tags: ["Bilbao", "Web", "Business", "2022"],
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
    subtitle: "PHP y CRM de Zorraquino.",
    description:
      "La página web de venta de entradas y eccomerce de Enkartur está construida con PHP, JS y SASS, y utiliza el CMS de la agencia Zorraquino. Permite a los usuarios comprar entradas para eventos y reservar experiencias turísticas en el País Vasco. Es una solución moderna y fácil de usar para la planificación de viajes.",
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
