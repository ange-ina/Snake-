 const field =document.getElementById('snakeField')

let i = 100;
for (i = 0; i < 100; i++){
    let div = document.createElement("div")
    // document.getElementById('snakeField').innerHTML += '<div class="item"></div>'
    div.classList = "item"
     div.addEventListener("mouseover", myFunction)
     field.appendChild(div)
}
function  myFunction() {
let div = event.target
    
    div.style.background = 'orange'
    setTimeout(() => {
                 div.style.background = "lightblue"
            }, 1000)
    
}





  
