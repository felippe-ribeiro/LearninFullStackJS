function sayMyFirstName(element){
    console.log("Meu primeiro nome é: " + element.value)
}

function sayMyLastName(){
    console.log(event) // event armazena o ultimo evento que foi chamado no DOM, armazenada na variavel event(que é global)
    console.log("Meu último nome é: " + event.target.value) //a target armazena de qual elemento ele foi chamado, então usamos a propriedade value do elemento

}