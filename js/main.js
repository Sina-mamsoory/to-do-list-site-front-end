const button = document.querySelector(".button-todo");
const inputForm = document.querySelector(".todo_input");
const tasksUl = document.getElementsByClassName("tasks-list")[0];

button.addEventListener("click", addTask);
let indexLi = 0
let indexButton = 0;

function addTask(event) {
    event.preventDefault()
    
    const tasksDiv = document.createElement("div");
    tasksDiv.classList = "tasks-container"

    const tasksLi = document.createElement("li");
    tasksDiv.appendChild(tasksLi);
    tasksLi.classList = "tasks";
    tasksLi.id = indexLi++
    

    //check button 
    const checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`
    checkButton.classList = "check-btn "
    checkButton.id = indexButton++;
    tasksDiv.appendChild(checkButton)
    checkButton.addEventListener("click", completedTask)

    //trash button     
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    trashButton.classList = "trash-btn"
    tasksDiv.appendChild(trashButton)

         tasksLi.innerText = inputForm.value;
    if(tasksLi.innerText !== ""){
         tasksUl.appendChild(tasksDiv);
    } else {
          // if user dosn't write any task this prt will show an error

         const errorPTag = document.createElement("p");
         const errorUl = document.querySelector("#error").querySelector("ul");
         const errorLi = document.createElement("li");

         errorPTag.innerText = "please write a task.";

         
         errorLi.appendChild(errorPTag) 
         errorLi.classList = "errorClass";
         
         errorUl.appendChild(errorLi);
         errorUl.classList = "ul-error";

         setTimeout( () => {
            document.querySelector("#error").removeAttribute("class");
            errorUl.removeChild(errorLi)
         },3000)
    }
}

function completedTask(event) {
     let selectedTask = document.getElementsByClassName("tasks-list")[0].getElementsByClassName("tasks-container")[event.target.id].childNodes[0];

     selectedTask.classList = "completed";
}