function show(){
    let element = document.getElementById("name")
    console.log(element.value)

    let element2 = document.getElementsByName("phone")
    console.log(element2[0].value)
    console.log(element2)

    let element3 = document.querySelectorAll("div#phones input[name='phone'")
    console.log(element3)
    console.log(element3[1].value)

    let element4 = document.getElementsByTagName("input")
    console.log(element4)
}