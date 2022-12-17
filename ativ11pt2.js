var n1 = document.querySelector ('#n1')
var n2 = document.querySelector ('#n2')
 var resultado = document.querySelector ('span')

    function somar(){
        resultado.insertAdjacentHTML ('afterbegin', `A soma de ${n1.value} e ${n2.value} é igual a ${parseInt(n1.value) + parseInt(n2.value)}`)
    }
    function subtrair(){
        resultado.insertAdjacentHTML ('afterbegin', `A subtração de ${n1.value} e ${n2.value} é igual a ${parseInt(n1.value) - parseInt(n2.value)}`)
    }
    function multiplicar(){
        resultado.insertAdjacentHTML ('afterbegin', `A multiplicação de ${n1.value} e ${n2.value} é igual a ${parseInt(n1.value) * parseInt(n2.value)}`)
    }
    function dividir(){
        resultado.insertAdjacentHTML ('afterbegin', `A divisão de ${n1.value} e ${n2.value} é igual a ${parseInt(n1.value) / parseInt(n2.value)}`)
    }