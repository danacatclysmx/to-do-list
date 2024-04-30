const saveItemButton = document.querySelector("#btnSave");
const inputTask = document.querySelector("#newTask");
const listGroup = document.querySelector(".list-group");
saveItemButton.addEventListener("click", (e) => {
  addNewItem();
});
inputTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addNewItem();
  }
});
function addNewItem() {
  const task = inputTask.value.trim(); //quita espacios en blanco al final
  if (task) {
    const item = document.createElement("a");
    item.href = "#";
    item.className =
      "list-group-item d-flex justify-content-between align-items-center";
    item.innerHTML = `<span>${task}</span>
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
  } else {
    return;
  }
}
//homework
// enuerar la lista de tareas
// que la tarea nno se pueda repetir
// poder agrgar una imagen desde una url
// poder agregar fecha limite.
