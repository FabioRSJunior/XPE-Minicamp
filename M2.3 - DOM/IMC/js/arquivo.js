function start(){
    console.log('start :)');
    console.log(calculateImc(98,1.78))
    var buttoncalculateIMC = document.querySelector("#calcula-imc")
    buttoncalculateIMC.addEventListener('click', handleButtonClick);
    console.log(buttoncalculateIMC)

    var id_peso = document.querySelector('#peso')
    var id_altura = document.querySelector('#altura')
   
    id_peso.addEventListener('input', handleButtonClick);
    id_altura.addEventListener('input', handleButtonClick);

    handleButtonClick()
}

start();

function calculateImc(peso,altura) {
    var result = peso / (altura * altura) 
    console.log(result)
    return result
}

function handleButtonClick(){
    // console.log("handleButtonClick")
    var id_peso = document.querySelector('#peso')
    var id_altura = document.querySelector('#altura')
   
    var value_peso = id_peso.value;
    var value_altura = id_altura.value;
    
    var result = document.querySelector("#imc-result")
    result.textContent = calculateImc(value_peso,value_altura).toFixed(2).replace('.',',')

}

