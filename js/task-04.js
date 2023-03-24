const decrementBtn= document.querySelector('button[data-action="decrement"]');
const incrementBtn=document.querySelector('button[data-action="increment"]')
const counterValue=document.querySelector('#value');


const handleClickless=()=>{
    const newNumber=parseInt(counterValue.textContent)-1;
    counterValue.textContent=newNumber;
    console.log(newNumber);
}

const handleClickmore=()=>{
    const newNumber=parseInt(counterValue.textContent)+1;
    counterValue.textContent=newNumber;
    console.log(newNumber);
}

decrementBtn.addEventListener("click", handleClickless);
incrementBtn.addEventListener("click", handleClickmore);