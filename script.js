let newItemContent = document.querySelector(".new-item-input");
let newItemButton = document.querySelector(".new-item-button");
let todoList = document.querySelector(".task-list");

function generateItem(todo) {
  return `
    <li class="list-item">
      <label class="checkbox-label">${todo}
        <input type="checkbox">
        <span class="checkmark"></span>
      </label>
    </li>
  `;
}

function addItem() {
  let newTodo = newItemContent.value;
  if (newTodo.trim() !== "") {
    todoList.innerHTML += generateItem(newTodo);
    newItemContent.value = "";
  }
}

newItemButton.addEventListener("click", addItem);
newItemContent.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addItem();
  }
});