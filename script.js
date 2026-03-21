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