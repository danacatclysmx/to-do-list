const saveItemButton = document.querySelector("#btnSave");
const inputTask = document.querySelector("#newTask");
const listGroup = document.querySelector(".list-group");
const imagenUrl = document.getElementById("imgTask");
const taskDate = document.getElementById("taskDate");
taskDate.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addNewItem();
  } // el enter tiene que estar con el ultimo que se agrega
});
saveItemButton.addEventListener("click", addNewItem);
function addNewItem() {
  const task = inputTask.value.trim();
  const taskDatetime = taskDate.value;
  if (task && !noRepetida(task)) {
    const item = document.createElement("li");
    item.className =
      "list-group-item d-flex justify-content-between align-items-center";
    item.innerHTML = `
    <div class="mt-2 contenedor-botones">
    <button type="button" class="btn btn-success btn-sm">
      <i class="bi bi-check-lg"></i>
    </button>
    <button type="button" class="btn btn-danger btn-sm">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>`;
    const span = document.createElement("span");
    span.className = "badge bg-info";
    span.innerText = task;
    taskImg(item, imagenUrl.value);
    fecha(taskDatetime, item);
    item.prepend(span);

    item.querySelector(".btn-success").addEventListener("click", () => {
      item.classList.toggle("list-group-item-success"); // Si no está la clase, la crea y si está, la quita
    });
    item.querySelector(".btn-danger").addEventListener("click", () => {
      listGroup.removeChild(item);
    });
    listGroup.appendChild(item);
    inputTask.value = "";
    imagenUrl.value = "";
    taskDate.value = "";
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
function taskImg(item, imgUrl) {
  if (imgUrl) {
    const img = document.createElement("img");
    img.src = imgUrl;
    img.style.maxWidth = "100px";
    img.classList.add("img-thumbnail");
    item.prepend(img);
  }
}
function fecha(time, item) {
  const futureDate = new Date(time);
  const currentDate = Date.now();
  const diferencia = futureDate - currentDate;
  console.log(futureDate, currentDate, diferencia);
  if (diferencia > 0) {
    const horas = Math.floor(diferencia / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    const span = document.createElement("span");
    span.className = "badge bg-secondary";
    span.innerText = `${horas}: ${minutos}`;
    item.prepend(span);
  }
}
