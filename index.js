
let todoList = document.getElementById("todos") 
let inputTexts = document.getElementById("option1") 
let enterBTN = document.getElementById("enterthefuckingthing")

enterBTN.addEventListener("click", function(){
    let todoTask = document.createElement("p")
    
    todoTask.innerText = inputTexts.value
    if (inputTexts.value != ''){
        todoList.appendChild(todoTask)
        inputTexts.value = ''
    }
    
   
    todoTask.addEventListener('click',function(){
        todoList.removeChild(todoTask)
    })
    
}) 




/*

let enterListBTN = document.getElementById("enterthefuckingthing")
let textValue = document.getElementById("textValue")

 
    
    
*/