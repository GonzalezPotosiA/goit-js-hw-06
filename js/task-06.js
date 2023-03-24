const textInput=document.querySelector('#validation-input');

textInput.addEventListener('blur',(event)=>{
    
    

    if(event.currentTarget.value.length < textInput.dataset.length){
        textInput.classList.add('valid');
        textInput.classList.add('invalid');
    }else{
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    }
    
})

textInput.addEventListener('focus',()=>{
    textInput.value='';
})