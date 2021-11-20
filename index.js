let natija = document.querySelector(".natija")


let newArr = pokemons.splice(0, 20)


let menu = document.querySelector(".menu")

let arr = []

for(let kerak of newArr ){
    let newLi = document.createElement("li")
    let newImg = document.createElement("img")
    let newTitle = document.createElement("h2")
    let newText = document.createElement("p")
    let newBtn = document.createElement("button")


    newImg.setAttribute("src", kerak.img);
    newTitle.textContent = kerak.name;
    newText.textContent = kerak.egg;
    newBtn.textContent = "like"
    newLi.setAttribute("data-id", kerak.id)
    newLi.setAttribute("class", "item")
    newBtn.setAttribute("class", "btn")

    newLi.appendChild(newImg)
    newLi.appendChild(newTitle)
    newLi.appendChild(newText)
    newLi.appendChild(newBtn)
    menu.appendChild(newLi)

    
}

menu.addEventListener("click", function(event){
    // console.log(event.target.textContent);
    // console.log(event);
    // console.log(event.target.parentElement.dataset["id"]);
    if(event.target.textContent == "like"){
        arr.push(event.target.parentElement.dataset["id"])
        event.target.textContent = "dislike"
    }else{
        arr.pop()
        event.target.textContent = "like"
    }
    natija.textContent = arr.length
})