let newItemContent = document.querySelector(".new-item-input");
let newItemButton = document.querySelector(".new-item-button");
let todoList = document.querySelector(".task-list");

let todos = [];
// let newItemIndex = 0;

function generateItem(todo) {
  return `
    <li class="list-item">
      <label class="checkbox-label">${todo}
        <input type="checkbox">
        <span class="checkmark"></span>

        <nav class="list-item-menu">
          <i class="fa-solid fa-chevron-up"></i>
          <i class="fa-solid fa-chevron-down"></i>
          <i class="fa-regular fa-pen-to-square"></i>
          <i class="fa-regular fa-trash-can"></i>
        </nav>
      </label>
    </li>
  `;
}

function generateList() {
  todoList.innerHTML = "";
  for (todo of todos) {
    console.log(todo)
    todoList.innerHTML += todo;
  }
}

function addItem() {
  let newTodo = newItemContent.value;
  if (newTodo.trim() !== "") {
    todos.push(generateItem(newTodo));
    // newItemIndex++;
    generateList();
    newItemContent.value = "";
  }
}

newItemButton.addEventListener("click", addItem);
newItemContent.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addItem();
  }
});