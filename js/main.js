/*let nome = "Rodrigo Salentim"
let idade = 33
alert("Bem-vindo "+ nome + " !")
alert(nome + " tem " + idade + " anos   " )
*/

let frase = "Japão é o melhor time do mundo"
console.log(frase.replace("Japão","Brasil").toUpperCase())
// console.log(frase.replace().toUpperCase())

// ARRAYS //

let menu = [
    "home",
    "produtos",
    "serviços",
    "preços"
]
menu.push("contato")
//menu.pop()
console.log(`
    1 - ${menu[0]}
    2 - ${menu[1]}
    3 - ${menu[2]}
    4 - ${menu[3]}
    5 - ${menu[4]}
`)
console.log(`
    Quantidade de itens: ${menu.length}
`)
console.log(menu)
console.log(menu.reverse())
console.log(menu.toString())

// utilizando valor do index
console.log("utilizando valor do index:")
console.log(menu[0])
console.log(menu.toString()[0])

// adicionando separador
console.log(menu.join(" / "))

// ARRAYS DE OBJECTS //
let frutas = [
    {nome:"maçã",cor:"vermelha"},
    {nome:"uva",cor:"roxa"}
]
console.log(frutas[0].nome)

// OBJETCS //
let carro = {
    modelo:"Pálio",
    marca:"Fiat",
    cor:"Prata",
    ano: 2014
}
console.log(carro)
console.log(`
    Vende-se ${carro.marca} ${carro.modelo},
    ano ${carro.ano} na cor ${carro.cor}.
`)

// IF e ELSE

//let idadeDirigir = prompt("Qual a sua idade?")
/* let idadeDirigir = 17

if (idadeDirigir >= 18 ) {
    alert("Adulto")
} else {
    alert("Criança ou Adolescente")
} 
*/

var lista  = [ "rosa" , "cravo" , "tulipa", "margarida"]
console.log(lista[2])
    

/*
let validar = 0
function validaIdade (idade) {
    validar // pega a variável global // sem o var o let
    if ( idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar
}

let idade = 18
validaIdade(idade)
console.log(validar)

*/

function click1(){
    alert("Realizado com Sucesso!")
}

function click2(){
    document.getElementById("sucesso").innerHTML = "Botão clicado com Sucesso!"
}

function click3(){
    window.open("https://www.linkedin.com/")
}

function click4(){
    window.location.href = "https://www.youtube.com/"
}

function overTexto1(elemento){
    elemento.innerHTML = "500 reais"
}

function overTexto2(elemento){
    elemento.innerHTML = "valor"
}

function load(){
    alert("Página carregada!")
}

function registraValor(elemento){
    console.log(elemento.value)
}