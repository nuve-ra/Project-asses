// document.addEventListener('DOMContentLoaded', () => {
//     const mainImage = document.getElementById('mainImage');
//     const thumbs = document.querySelectorAll('.thumb');
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
    
//     let currentIndex = 0;

//     // Helper function to change the image
//     function updateGallery(index) {
//         // Remove active class from all thumbs
//         thumbs.forEach(t => t.classList.remove('active'));
        
//         // Update current index
//         currentIndex = index;
        
//         // Add active class to selected thumb
//         thumbs[currentIndex].classList.add('active');
        
//         // Smoothly swap the main image source
//         mainImage.style.opacity = '0.5';
//         setTimeout(() => {
//             mainImage.src = thumbs[currentIndex].src;
//             mainImage.style.opacity = '1';
//         }, 150);
//     }

//     // Thumbnail click events
//     thumbs.forEach((thumb, index) => {
//         thumb.addEventListener('click', () => {
//             updateGallery(index);
//         });
//     });

//     // Arrow Button - Next
//     nextBtn.addEventListener('click', () => {
//         let nextIndex = (currentIndex + 1) % thumbs.length;
//         updateGallery(nextIndex);
//     });

//     // Arrow Button - Previous
//     prevBtn.addEventListener('click', () => {
//         let prevIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
//         updateGallery(prevIndex);
//     });
// });
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    
    // change main image
    mainImage.src = thumb.src;

    // remove active from all
    thumbnails.forEach((t) => t.classList.remove("active"));

    // add active to clicked
    thumb.classList.add("active");
  });
});
thumb.addEventListener("click", () => {
  mainImage.style.opacity = 0;

  setTimeout(() => {
    mainImage.src = thumb.src;
    mainImage.style.opacity = 1;
  }, 150);
});