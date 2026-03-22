// ================= IMAGE CAROUSEL =================

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Convert NodeList → Array of src
const images = Array.from(thumbs).map(thumb => thumb.src);

// Update image
function updateImage(index) {
  mainImage.src = images[index];

  thumbs.forEach(t => t.classList.remove("active"));
  thumbs[index].classList.add("active");
}

// Thumbnail click
thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    updateImage(currentIndex);
  });
});

// Next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage(currentIndex);
});

// Prev button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(currentIndex);
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {

    // If already active → close it
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      return;
    }

    // Close all others
    faqItems.forEach(i => i.classList.remove("active"));

    // Open clicked
    item.classList.add("active");

  });
});
const slider = document.getElementById("appSlider");

document.getElementById("nextApp").onclick = () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
};

document.getElementById("prevApp").onclick = () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
};
const cards = document.querySelectorAll(".app-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});