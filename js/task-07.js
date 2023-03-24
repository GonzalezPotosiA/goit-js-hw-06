const input=document.querySelector('#font-size-control');
const text=document.querySelector('#text');
text.setAttribute('style', 'font-size');

input.addEventListener('input',(event)=>{

    const sizeText = event.currentTarget.value;
    text.style.fontSize=sizeText+'px';

})