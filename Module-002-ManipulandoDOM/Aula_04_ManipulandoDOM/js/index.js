function addNewPhone(){
    const phoneForm = document.querySelector("form#phones")
    console.log(phoneForm.children)
    const newPhone = phoneForm.children[0].cloneNode(true)//o true significa que ele clona todos os filhos e filhos dos filhos
    const phonePosition = phoneForm.children.length + 1
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": "
    phoneForm.appendChild(newPhone)
    console.log(phoneForm.children)
}

function printPhones(){
    let message = ""
    const phones = document.querySelectorAll("input[name='phone'")
    phones.forEach((phone,index) => {
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
    })
    
    alert(message)
}