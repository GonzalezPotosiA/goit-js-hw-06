const body=document.querySelector('body');
const colorBtn=document.querySelector('.change-color');
const textColor=document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleClickColor(event){
  const outputColor=getRandomHexColor();
  textColor.textContent=outputColor;
  body.style.backgroundColor=outputColor;

}

colorBtn.addEventListener('click',handleClickColor);