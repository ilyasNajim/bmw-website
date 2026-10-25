window.addEventListener("load", () => {
  document.querySelector("header").style.animationPlayState = "running";
});
const navbar = document.querySelector(".menu-item");
const humberger = document.querySelector(".humberger");
const bars = document.querySelector(".fa-bars");
const mark = document.querySelector(".fa-xmark");
const slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");
const btns = document.querySelectorAll(".btn");
const accordingItems = document.querySelectorAll(".according-item");
const testidires = document.querySelectorAll(".test");
const dotis = document.querySelectorAll(".doti");
const previous = document.querySelector(".previous");
const nextous = document.querySelector(".nextous");

humberger.addEventListener("click", () => {
  bars.classList.toggle("active");
  mark.classList.toggle("active");
  navbar.classList.toggle("active");
});
let currentIndex = 0;

function getSlideWidth() {
  const slide = slides[0];
  const style = window.getComputedStyle(slide);
  const gap = parseInt(style.marginRight) || 20;
  return slide.offsetWidth + (window.innerWidth <= 575 ? 0 : gap);
}

function updateSlider() {
  const offset = currentIndex * getSlideWidth();
  slider.style.transform = `translateX(-${offset}px)`;
  updateDots();
  updateNavButtons();
}

function updateDots() {
  dotsContainer.innerHTML = "";
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateNavButtons() {
  if (!prevBtn || !nextBtn) return;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= slides.length - 1;
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
  nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });
}

window.addEventListener("resize", updateSlider);
updateSlider();

function filterSlides(category) {
  const allSlides = document.querySelectorAll(".slide");
  allSlides.forEach((slide) => {
    const match = category === "all" || slide.getAttribute("data-category") === category;
    slide.style.display = match ? "block" : "none";
  });
  slides = Array.from(document.querySelectorAll(".slide")).filter(
    (slide) => slide.style.display !== "none",
  );
  currentIndex = 0;
  updateSlider();
}

btns.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    if (category) filterSlides(category);
  });
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener("resize", () => {
  updateSlider();
});

window.addEventListener("load", () => {
  document.querySelector("header").style.animationPlayState = "running";
  filterSlides("all");
});

accordingItems.forEach((item) => {
  const content = item.querySelector(".according-content");
  const head = item.querySelector(".according-header");
  const toggleButton = item.querySelector(".toggle-icon");
  head.addEventListener("click", () => {
    content.classList.toggle("active");
    toggleButton.innerHTML = content.classList.contains("active") ? "-" : "+";
  });
});

function showSlide(index) {
  testidires.forEach((test, i) => {
    test.classList.remove("active");
    dotis[i].classList.remove("active");
  });
  testidires[index].classList.add("active");
  dotis[index].classList.add("active");
}
function nextSlide() {
  currentIndex++;
  if (currentIndex > testidires.length - 1) currentIndex = 0;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = testidires.length - 1;
  showSlide(currentIndex);
}
function currentSlide(index) {
  currentIndex = index;
  showSlide;
}

previous.addEventListener("click", prevSlide);
nextous.addEventListener("click", nextSlide);
dotis.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-target"));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString("fr-FR");
  }, 16);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".counter").forEach((el) => counterObserver.observe(el));

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== CLOSE MENU ON LINK CLICK (mobile UX) =====
document.querySelectorAll(".menu-item a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    bars.classList.add("active");
    mark.classList.remove("active");
  });
});
