// Slider JS
let slide_Index = 1;
showSlides(slide_Index);

function plusSlides(n) {
      showSlides(slide_Index += n);
}

function currentSlide(n) {
      showSlides(slide_Index = n);
}

// For working of Manual slider buttons
function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
            slide_Index = 1;
      }

      if (n < 1) {
            slide_Index = slides.length
      }

      for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slide_Index - 1].style.display = "block";
}


// Auto slideshow
let slideIndex = 0;
autoShowSlides();

function autoShowSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
      }

      slideIndex++;
      if (slideIndex > slides.length) {
            slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";
      // setTimeout(autoShowSlides, 5000); // Change image every 3 seconds
}

const popupBox = document.querySelector('#popup-box');
const allMicrosoft = document.querySelector('#all-microsoft');
const mainBody = document.querySelector('.main-body');


allMicrosoft.addEventListener('click', () => {
      popupBox.style.display = 'block';
})

mainBody.addEventListener('click', () => {
      popupBox.style.display = 'none';
})


