(function () {
  "use strict";

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function initNavToggle() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      const open = nav.dataset.open === "true";
      nav.dataset.open = open ? "false" : "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
    });

    // クリックでメニューを閉じる(モバイル)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && window.innerWidth < 768) {
        nav.dataset.open = "false";
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function initScrollReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || prefersReduced) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => io.observe(el));
  }

  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initScrollReveal();
    initYear();
  });
})();
