const elementi = document.querySelectorAll('.elemento-animato');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visibile');
    }
  });
}, {
  threshold: 0.3
});
 
// Osserva ogni elemento
elementi.forEach(el => {
  observer.observe(el);
 
  // Forza l'animazione se già visibile al load
  const bounding = el.getBoundingClientRect();
  if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
    el.classList.add('visibile');
  }
});
 
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}
 
document.addEventListener("DOMContentLoaded", function () {
  const elementiAnimati = document.querySelectorAll(".elemento-animato");
  const lineeOrizzontali = document.querySelectorAll(".linea-orizzontale");
 
  function checkAnimation() {
    const triggerBottom = window.innerHeight * 0.85;
 
    elementiAnimati.forEach(elem => {
      const elemTop = elem.getBoundingClientRect().top;
 
      if (elemTop < triggerBottom) {
        elem.classList.add("attivo");
      } else {
        elem.classList.remove("attivo");
      }
    });
 
    lineeOrizzontali.forEach(linea => {
      const lineaTop = linea.getBoundingClientRect().top;
      if (lineaTop < triggerBottom) {
        linea.classList.add("attivo");
      } else {
        linea.classList.remove("attivo");
      }
    });
  }
 
  window.addEventListener("scroll", checkAnimation);
  checkAnimation();
});
 
 