const input = document.querySelector(".input input")
const searchBtn = document.querySelectorAll(".input button")[0]
const addBtn = document.querySelectorAll(".input button")[1]
const ul  = document.querySelector("ul")

const create = ()=>{
    let li = document.createElement("li")
    li.innerText = input.value
    if(input.value == ""){
        alert("you have no elemet yet")
    }
    else{
        ul.append(li)
    }
    input.value = ""
    let deleteBtn = document.createElement("button")
    deleteBtn.innerText=  "Delete"
    li.append(deleteBtn)
}

addBtn.addEventListener("click" ,create)

input.addEventListener("keypress" , (e)=>{
    if(e.key == "Enter"){
        create(e)
    }
})















// searchBtn.addEventListener("click", ()=>{
//     input.setAttribute("placeholder" , "Searching....")
//     const li =  ul.querySelectorAll("li")
//     li.forEach(() => {
//         input.append(li)
//     });
    
// })

// document.addEventListener("keypress" , ()=>{
//     if(e.key == "Enter"){
//         input.setAttribute("placeholder" , "Add to Do")
//     }
// })