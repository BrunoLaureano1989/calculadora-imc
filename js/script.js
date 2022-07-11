

let calculate = document.getElementById('calculate')

function imc () {
    let name = document.getElementById('name').value;
    let height = document.getElementById('height').value;
    let Weight = document.getElementById('Weight').value;
    let resultado = document.getElementById('resultado')

    if(name !== '' && height !== '' && Weight !== ''){
       let valorImc = (Weight / (height * height)).toFixed(2);

       let classificacao = '';

       if ( valorImc < 18.5) {
        classificacao = 'abaixo do peso'        
       } else if ( valorImc >= 18.6 && valorImc <= 24.9) {
        classificacao = 'saudavel'
       } else if ( valorImc >= 25 && valorImc <= 29.9 ) {
        classificacao = 'sobre peso'
       } else if ( valorImc >= 30 && valorImc <= 34.9) {
        classificacao = 'obesidade 1'
       } else if ( valorImc >= 35 && valorImc <= 39.9) {
        classificacao = 'obesidade 2'
       } else if ( valorImc >= 40) {
        classificacao = 'obesicade 3'
       }         

       resultado.innerText = `${name} seu imc: ${valorImc} voce esta ${classificacao}`
    } else {
        resultado.innerText = "Preencha todos os campos"
        resultado.textContent = "Preencha todos os campos"
    }

}

calculate.addEventListener('click', imc);