let i = 0;
let images = [];
let time = 3000;

images[0] = "hero-1.jpg";
images[1] = "hero-2.jpg";
images[2] = "hero-3.jpg";

function changeImage() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImage()", time);
}

window.onload = changeImage;
