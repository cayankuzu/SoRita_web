(function () {
  "use strict";

  var carousel = document.querySelector("[data-mock-carousel]");
  if (!carousel) return;

  var screens = [
    {
      id: "home",
      title: "Ana Sayfa",
      subtitle: "Mekân ve liste akışı",
      image: "assets/screen-home.png",
    },
    {
      id: "explore",
      title: "Keşfet",
      subtitle: "Mekânlar ve listeler arasında keşif",
      image: "assets/screen-explore.png",
    },
    {
      id: "profile",
      title: "Profil",
      subtitle: "Profil ve paylaşımlar",
      image: "assets/screen-profile.png",
    },
  ];

  var image = carousel.querySelector("[data-mock-image]");
  var title = carousel.querySelector("[data-mock-title]");
  var subtitle = carousel.querySelector("[data-mock-subtitle]");
  var controls = Array.prototype.slice.call(carousel.querySelectorAll("[data-mock-screen]"));
  var index = 0;
  var timer = null;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  screens.slice(1).forEach(function (screen) {
    var preload = new Image();
    preload.src = screen.image;
  });

  function render(nextIndex) {
    var screen = screens[nextIndex];
    if (!screen) return;
    index = nextIndex;
    image.classList.add("is-changing");

    window.setTimeout(
      function () {
        image.src = screen.image;
        image.alt = screen.title + " — gerçek SoRita uygulama ekranı";
        title.textContent = screen.title;
        subtitle.textContent = screen.subtitle;
        controls.forEach(function (control) {
          var active = control.getAttribute("data-mock-screen") === screen.id;
          control.classList.toggle("is-active", active);
          control.setAttribute("aria-selected", active ? "true" : "false");
          control.setAttribute("tabindex", active ? "0" : "-1");
        });
        image.classList.remove("is-changing");
      },
      reduceMotion ? 0 : 130,
    );
  }

  function stop() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }

  function start() {
    stop();
    if (reduceMotion) return;
    timer = window.setInterval(function () {
      render((index + 1) % screens.length);
    }, 4200);
  }

  controls.forEach(function (control, controlIndex) {
    control.addEventListener("click", function () {
      render(controlIndex);
      start();
    });

    control.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      var direction = event.key === "ArrowRight" ? 1 : -1;
      var next = (controlIndex + direction + screens.length) % screens.length;
      controls[next].focus();
      render(next);
      start();
    });
  });

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", function (event) {
    if (!carousel.contains(event.relatedTarget)) start();
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else start();
  });

  image.alt = screens[0].title + " — gerçek SoRita uygulama ekranı";
  start();
})();
