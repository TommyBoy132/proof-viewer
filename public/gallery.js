const current = document.querySelector('.main-img');
const imgs = document.querySelector('.thumbnails');
const img = document.querySelectorAll('.thumbnail-img');
const opacity = 0.6;
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
let imgNumber = 0;

// Set first img opacity
img[0].classList.add('selected-img');

imgs.addEventListener('click', imgClick);
console.log(img);

current.addEventListener('click', (e) =>{
  console.log(e.target.src);
  modal.style.display = "block";
  modalImg.src = e.target.src;
});

function imgClick(e) {
  if(e.target.src){
    img.forEach(img => {
      img.classList.remove('selected-img');
    });
  // Change current image to src of clicked image
    current.src = e.target.src;
    // Add fade in class
    current.classList.add('fade-in');
    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);
    // Change the opacity to opacity var
    e.target.classList.add('selected-img');
    console.log(e.target);
  }
}

function plusSlides(x) {
  imgNumber += x;
  if (imgNumber < 0){
    imgNumber = img.length-1;
  }
  if (imgNumber >= img.length){
    imgNumber = 0;
  }
  img.forEach(img => {
    img.classList.remove('selected-img');
  });
  current.src = img[imgNumber].src;
  img[imgNumber].classList.add('selected-img');
}

var span = document.querySelector('.close');
span.onclick = () => {
  modal.style.display = "none";
};