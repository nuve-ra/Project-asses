const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;

    // remove active from all
    thumbnails.forEach(t => t.classList.remove("active"));

    // add active to clicked
    thumb.classList.add("active");
  });
});