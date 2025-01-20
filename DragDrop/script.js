let lists = document.getElementsByClassName("list")
const rightBox = document.querySelector("#right")
const leftBox = document.querySelector("#left")

let selected = null

for (let list of lists) {
    list.addEventListener("dragstart", (e) => {
        selected = e.target;
    })
}

rightBox.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

rightBox.addEventListener("drop",(e)=>{
    if(selected){
        rightBox.appendChild(selected)
        selected = null
    }
})

leftBox.addEventListener("dragover",(e)=>{
    e.preventDefault();
})


leftBox.addEventListener("drop",(e)=>{
    if(selected){
        leftBox.appendChild(selected)
        selected = null
    }
})


