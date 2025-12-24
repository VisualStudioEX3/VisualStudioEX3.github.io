// Based on: https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp

function getSlideIndex(gallery_id) {
  let gallery = document.getElementById(gallery_id);
  let index = gallery.dataset.slideIndex;

  return Number(index);
}

function setSlideIndex(n, gallery_id) {
  let gallery = document.getElementById(gallery_id);

  gallery.dataset.slideIndex = n;
}

// Next/previous controls
function plusSlides(n, gallery_id) {
  let index = getSlideIndex(gallery_id);

  setSlideIndex((index += n), gallery_id);
  showSlides(index, gallery_id);
}

// Thumbnail image controls
function currentSlide(n, gallery_id) {
  setSlideIndex(n, gallery_id);
  showSlides(n, gallery_id);
}

function showSlides(n, gallery_id) {
  let i;
  let slides = document.getElementsByClassName(gallery_id + "-slides");
  let dots = document.getElementsByClassName(gallery_id + "-demo");
  let captionText = document.getElementById(gallery_id + "-caption");

  if (n > slides.length) {
    setSlideIndex(1, gallery_id);
  }

  if (n < 1) {
    setSlideIndex(slides.length, gallery_id);
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  let index = getSlideIndex(gallery_id);
  let image = dots[index - 1];

  slides[index - 1].style.display = "block";
  image.className += " active";
  captionText.innerHTML = image.alt;
  captionText.parentElement.style.display = image.alt === "" ? "none" : "block";
}
