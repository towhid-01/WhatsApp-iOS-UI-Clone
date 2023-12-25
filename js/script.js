var swiper = new Swiper(".swiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

document.addEventListener('DOMContentLoaded', function () {
 
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode();
  }


  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (e.matches) {
          enableDarkMode();
      } else {
          enableLightMode();
      }
  });

  function enableDarkMode() {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
  }

  function enableLightMode() {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
  }
});