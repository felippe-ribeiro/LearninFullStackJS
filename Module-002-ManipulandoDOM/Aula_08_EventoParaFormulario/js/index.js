function save(){
    event.preventDefault() // impede o comportamento padrão do evento (no caso enviar e atualizar a pagina)
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value
    console.log("Nome: " + name + "\nLinguagem de programação: " + programmingLang)
}