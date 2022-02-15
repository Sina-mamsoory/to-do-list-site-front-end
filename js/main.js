const button = document.querySelector(".button-todo");
const inputForm = document.querySelector(".todo_input");
const tasksUl = document.getElementsByClassName("tasks-list")[0];

button.addEventListener("click", addTask);

function addTask(event) {
    event.preventDefault()
    const tasksDiv = document.createElement("div");
    tasksDiv.classList = "tasks-container"

    const tasksLi = document.createElement("li");
    tasksDiv.appendChild(tasksLi);
    tasksLi.classList = "tasks"
    
    const checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`
    checkButton.classList = "check-btn "
    tasksDiv.appendChild(checkButton)

    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    trashButton.classList = "trash-btn"
    tasksDiv.appendChild(trashButton)

         tasksLi.innerText = inputForm.value;
    if(tasksLi.innerText !== ""){
         tasksUl.appendChild(tasksDiv);
    }
}

