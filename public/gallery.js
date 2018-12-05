const current = document.querySelector('.main-img');
const imgs = document.querySelector('.thumbnails');
const img = [].slice.call(document
    .querySelectorAll('.thumbnail-img'));
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
let imgNumber = 0;
const span = document.querySelector('.close');

function keyPress(targetKey){
  console.log(targetKey);
  switch (targetKey){
    case "ArrowRight":
      plusSlides(1);
      break;
    case "ArrowLeft":
      plusSlides(-1);
      break;
    case "Enter":
      if(modal.style.display === "block"){
        hideModal();
      } else {
        showModal(document.querySelector('.selected-img').src);
      }
      break;
    default:
      break;
}}

function setModal(src){
  modalImg.src = src;
}

function showModal(){
  modal.style.display = "block";
}

function imgClick(e) {
  if(e.target.src){
    newCurrentImage(e.target);
    current.classList.add('fade-in');
    setTimeout(() => current.classList.remove('fade-in'), 500);
    imgNumber = img.indexOf(e.target);
  }
}

function newCurrentImage(targetImg){
  img.forEach(img => {
    img.classList.remove('selected-img');
  });
  current.src = targetImg.src;
  targetImg.classList.add('selected-img');
  setModal(targetImg.src);
}

function plusSlides(x) {
  imgNumber += x;
  if (imgNumber < 0){
    imgNumber = img.length-1;
  }
  if (imgNumber >= img.length){
    imgNumber = 0;
  }
  newCurrentImage(img[imgNumber]);
}

function hideModal() {
  modal.style.display = "none";
}

span.onclick = () => {
  hideModal();
};

img[0].classList.add('selected-img');

imgs.addEventListener('click', imgClick);

current.addEventListener('click', (e) =>{
  setModal(e.target.src);
  showModal();
});

document.addEventListener('keydown', (event) => {
      keyPress(event.code);
});
