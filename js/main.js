const button = document.querySelector(".button-todo");
const inputForm = document.querySelector(".todo_input");
const tasksUl = document.getElementsByClassName("tasks-list")[0];
const selectElement = document.getElementById("filter-todo");


selectElement.addEventListener("click",changeFilter);
button.addEventListener("click", addTask);
tasksUl.addEventListener("click", deleteOrCheckTask);
document.addEventListener("DOMContentLoaded", getTodos);

let indexLi = 0;
let indexCheckButton = 0;
let indexTrashButton = 0;

function addTask(event) {
    event.preventDefault();
    
    const tasksDiv = document.createElement("div");
    tasksDiv.classList = "tasks-container";

    const tasksLi = document.createElement("li");
    tasksDiv.appendChild(tasksLi);
    tasksLi.classList = "tasks";
    tasksLi.id = indexLi++;
    
     

    //check button 
    const checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList = "check-btn";
    checkButton.id = indexCheckButton++;
    tasksDiv.appendChild(checkButton);
//     checkButton.addEventListener("click", completedTask);

    //trash button     
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    trashButton.classList = "trash-btn";
    trashButton.id = indexTrashButton++;
    tasksDiv.appendChild(trashButton);
//     trashButton.addEventListener("click", deleteTask);

         tasksLi.innerText = inputForm.value;
         saveLocalStorage(inputForm.value);

    if(tasksLi.innerText !== ""){
         tasksUl.appendChild(tasksDiv);
         inputForm.value = "";
    } else {
          // if user dosn't write any task this prt will show an error

         const errorPTag = document.createElement("p");
         const errorUl = document.querySelector("#error").querySelector("ul");
         const errorLi = document.createElement("li");

         errorPTag.innerText = "please write a task.";

         
         errorLi.appendChild(errorPTag);
         errorLi.classList = "errorClass";
         
         errorUl.appendChild(errorLi);
         errorUl.classList = "ul-error";

         setTimeout( () => {
            document.querySelector("#error").removeAttribute("class");
            errorUl.removeChild(errorLi);
         },3000)
    }
}

// localStorage.clear();

// a function in order to delet or complete tasks
function deleteOrCheckTask(event) {
     let item = event.target;
     if(item.classList[0] === "check-btn")
     {
          let todo = item.parentElement;
          todo.childNodes[0].classList.toggle("completed");
     } else if(item.classList[0] === "trash-btn") {
          let todo = item.parentElement;
          todo.remove();
          let text =item.parentElement.getElementsByClassName("tasks")[0].innerText;
          removeLocalstorage(text);
     }
}



// a function to save datas in local storage 
function saveLocalStorage(task) {
     let tasks;
     if(localStorage.getItem("tasks") === null)
     {
          tasks = [];
     } else {
          tasks = JSON.parse(localStorage.getItem("tasks"));
     }

     if(tasks.indexOf(task) === -1){
          tasks.push(task);
     }
     localStorage.setItem("tasks", JSON.stringify(tasks));
}



// a function to remove datas in local storage 
function removeLocalstorage(task) {
     let tasks;
     if(localStorage.getItem("tasks") === null)
     {
          tasks = [];
     } else {
          tasks = JSON.parse(localStorage.getItem("tasks"));
          let index = tasks.indexOf(task);
          tasks.splice(index,1);
     }
     localStorage.setItem("tasks", JSON.stringify(tasks));
}



// a function to change fillters
function changeFilter(event) {
     const tasksUlChild = tasksUl.childNodes;
     tasksUlChild.forEach(element => {
          switch(event.target.value) {
               case "all":
                    element.style.display = "flex";
                    break;
               case "completed":
                    if(element.querySelector("li").classList.contains("completed")) {
                         element.style.display = "flex";
                    } else {
                         element.style.display = "none";
                    }
                    break;
               case "uncompleted":
                    if(element.querySelector("li").classList.contains("completed")) {
                         element.style.display = "none";
                    } else {
                         element.style.display = "flex";
                    }
                    break;
          }
     });
}


// a function to let todos(todos that is in localstorage) remain at the site while page was reloaded
function getTodos() {
     let tasks;
     if(localStorage.getItem("tasks") === null)
     {
          tasks = [];
     } else {
          tasks = JSON.parse(localStorage.getItem("tasks"));
     }

     tasks.forEach( task => {
     event.preventDefault()
    
    const tasksDiv = document.createElement("div");
    tasksDiv.classList = "tasks-container"

    const tasksLi = document.createElement("li");
    tasksDiv.appendChild(tasksLi);
    tasksLi.classList = "tasks";
    tasksLi.id = indexLi++
    
     

    //check button 
    const checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList = "check-btn";
    checkButton.id = indexCheckButton++;
    tasksDiv.appendChild(checkButton);
//     checkButton.addEventListener("click", completedTask);

    //trash button     
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    trashButton.classList = "trash-btn";
    trashButton.id = indexTrashButton++
    tasksDiv.appendChild(trashButton);
//     trashButton.addEventListener("click", deleteTask);

         tasksLi.innerText = task;

    if(tasksLi.innerText !== ""){
         tasksUl.appendChild(tasksDiv);
    }
     })
}
