const saveItemButton = document.querySelector("#btnSave");
const inputTask = document.querySelector("#newTask");
const listGroup = document.querySelector(".list-group");
let taskCounter = 1;
inputTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addNewItem();
  }
});

function addNewItem() {
  const task = inputTask.value.trim(); //quita espacios en blanco al final
  if (task && !noRepetida(task)) {
    const item = document.createElement("a");
    item.href = "#";
    item.className =
      "list-group-item d-flex justify-content-between align-items-center";
    item.innerHTML = `<span>${taskCounter}.${task}</span>
    <div class="">
      <button type="button" class="btn btn-success btn-sm">
        <i class="bi bi-check-lg"></i>
      </button>
      <button type="button" class="btn btn-danger btn-sm">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>`;
    item.querySelector(".btn-success").addEventListener("click", (e) => {
      item.classList.toggle("list-group-item-success"); // si no esta la clase la crea y si esta la quita
    });
    item.querySelector(".btn-danger").addEventListener("click", (e) => {
      listGroup.removeChild(item);
    });
    listGroup.appendChild(item);
    inputTask.value = "";
    taskCounter++;
  } else {
    return;
  }
}
function noRepetida(task) {
  const items = listGroup.querySelectorAll("a");
  for (let item of items) {
    const span = item.querySelector("span");
    if (span.textContent.substring(2) === task) {
      alert("La tarea ya existe en la lista.");
      return true;
    }
  }
  return false;
}
