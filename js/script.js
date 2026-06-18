document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("heroCarousel");

  carousel.addEventListener("slide.bs.carousel", () => {
    const active = carousel.querySelector(".carousel-item.active img");
    if (!active) return;
    const rect = active.getBoundingClientRect();
    const container = document.createElement("div");
    container.className = "shatter-container";
    container.style.width = rect.width + "px";
    container.style.height = rect.height + "px";
    active.parentElement.appendChild(container);
    const rows = 2;
    const cols = 4;
    const w = rect.width / cols;
    const h = rect.height / rows;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const piece = document.createElement("div");
        piece.className = "shatter-piece";
        piece.style.width = w + "px";
        piece.style.height = h + "px";
        piece.style.left = x * w + "px";
        piece.style.top = y * h + "px";
        piece.style.backgroundImage = `url(${active.src})`;
        piece.style.backgroundPosition = `-${x * w}px -${y * h}px`;
        piece.style.backgroundSize = `${rect.width}px ${rect.height}px`;
        piece.style.setProperty("--x", Math.random());
        piece.style.setProperty("--y", Math.random());
        container.appendChild(piece);
      }
    }
    setTimeout(() => container.remove(), 900);
  });
});


/* ================= MATCHES PAGE ================= */
// ================= FLAG EMOJI MAP =================
// ================= FLAG EMOJI MAP =================
const countryFlags = {
  IND: "🇮🇳",
  AUS: "🇦🇺",
  ENG: "🇬🇧",
  RSA: "🇿🇦"
};

// ================= APPLY FLAGS =================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".team").forEach(team => {
    const code = team.dataset.country;
    if (countryFlags[code]) {
      team.innerHTML = `${countryFlags[code]} ${team.textContent}`;
    }
  });
});


// Scroll Reveal Animation
/* ================= ABOUT PAGE HERO SLIDER ================= */
/* ================= ABOUT PAGE HERO SLIDER ================= */
document.addEventListener("DOMContentLoaded", function () {

  const hero = document.querySelector(".about-hero-bg");

  if (!hero) {
    console.log("Hero card not found");
    return;
  }

  const images = [
    "images/cup1.jpg",
    "images/cup2.jpg",
    "images/cup3.jpg"
  ];

  let index = 0;

  // Initial image
  hero.style.backgroundImage = `url('${images[0]}')`;

  // Change every 4 seconds
  setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
  }, 4000);

});

