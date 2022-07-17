console.log("javascript is here")

const submit = document.getElementById('submitButton');
const textvalue = document.getElementById('textbox');
const behindText = document.getElementById('box');

submit.addEventListener('click', values)
console.log('going to values function')

function values(){
    const valueList = textvalue.value.split(" ");
    console.log('collect value');
    console.log(valueList);
    behindText.style.right = '10vh';
    behindText.style.top = '15vh';
    behindText.style.display = 'block';
    
}