const { ipcRenderer } = require("electron");

const taskForm = document.querySelector("#taskForm");
const Nom_juego = document.querySelector("#Nom_juego");
const Des_juego = document.querySelector("#Des_juego");
const Genr_juego = document.querySelector("#Genr_juego");
const Plat_juego = document.querySelector("#Plat_juego");
const Num_juego = document.querySelector("#Num_juego");
const Anio_juego = document.querySelector("#Anio_juego");
const Leng_juego = document.querySelector("#Leng_juego");
const Log_juego = document.querySelector("#Log_juego");
const Valo_juego = document.querySelector("#Valo_juego");
const taskList = document.querySelector("#taskList");

let updateStatus = false;
let idTaskToUpdate = "";

function deleteTask(id) {
  const response = confirm("¿Deseas borrar?");
  if (response) {
    ipcRenderer.send("delete-task", id);
  }
  return;
}

function editTask(id) {
  updateStatus = true;
  idTaskToUpdate = id;
  const task = tasks.find(task => task._id === id);
  
  Nom_juego.value=task.Nom_juego; 
  Des_juego.value=task.Des_juego; 
  Genr_juego.value=task.Genr_juego; 
  Plat_juego.value=task.Plat_juego; 
  Num_juego.value=task.Num_juego; 
  Anio_juego.value=task.Anio_juego; 
  Leng_juego.value=task.Leng_juego; 
  Log_juego.value=task.Log_juego; 
  Valo_juego.value=task.Valo_juego; 
  
}

function renderTasks(tasks) {
  taskList.innerHTML = "";
  console.log(tasks);
  tasks.map(t => {
    taskList.innerHTML += `
          <li class="card bg-secondary text-white">
            <h4>
              Task id: ${t._id}
            </h4>
            <p>
              Nombre del juego: ${t.Nom_juego}
            </p>
            <p>
              Descripción del juego: ${t.Des_juego}
            </p>
            <p>
              Género del juego: ${t.Genr_juego}
            </p>
            <p>
              Plataforma del juego: ${t.Plat_juego}
            </p>
            <p>
              Número de jugadores: ${t.Num_juego}
            </p>
            <p>
              Año de lanzamiendo: ${t.Anio_juego}
            </p>
            <p>
              Lenguaje juego: ${t.Leng_juego}
            </p>
            <p>
              Logros conseguidos: ${t.Log_juego}
            </p>
            <p>
              Valoración del usuario: ${t.Valo_juego}
            </p>
            
            <button class="btn btn-danger" onclick="deleteTask('${t._id}')">
              🗑 Borrar
            </button>
            <button class="btn btn-secondary bg-dark text-white" onclick="editTask('${t._id}')">
              ✎ Editar
            </button>
          </li>
        `;
  });
}

let tasks = [];

ipcRenderer.send("get-tasks");

taskForm.addEventListener("submit", async e => {

  const task = {
    Nom_juego: Nom_juego.value,
    Des_juego: Des_juego.value,
    Genr_juego: Genr_juego.value,
    Plat_juego: Plat_juego.value,
    Num_juego: Num_juego.value,
    Anio_juego: Anio_juego.value,
    Leng_juego: Leng_juego.value,
    Log_juego: Log_juego.value,
    Valo_juego: Valo_juego.value


  };

  console.log(updateStatus);

  if (!updateStatus) {
    ipcRenderer.send("new-task", task);
  } else {
    ipcRenderer.send("update-task", { ...task, idTaskToUpdate });
  }

  taskForm.reset();
});

ipcRenderer.on("new-task-created", (e, arg) => {
  console.log(arg);
  const taskSaved = JSON.parse(arg);
  tasks.push(taskSaved);
  console.log(tasks);
  renderTasks(tasks);
  alert("Task Created Successfully");
  Nom_juego.focus();
});

ipcRenderer.on("get-tasks", (e, args) => {
  const receivedTasks = JSON.parse(args);
  tasks = receivedTasks;
  renderTasks(tasks);
});

ipcRenderer.on("delete-task-success", (e, args) => {
  const deletedTask = JSON.parse(args);
  const newTasks = tasks.filter(t => {
    return t._id !== deletedTask._id;
  });
  tasks = newTasks;
  renderTasks(tasks);
});

ipcRenderer.on("update-task-success", (e, args) => {
  updateStatus = false;
  const updatedTask = JSON.parse(args);
  tasks = tasks.map((t, i) => {
    if (t._id === updatedTask._id) {
      
      t.Nom_juego.value=task.Nom_juego; 
      t.Des_juego.value=task.Des_juego; 
      t.Genr_juego.value=task.Genr_juego; 
      t.Plat_juego.value=task.Plat_juego; 
      t.Num_juego.value=task.Num_juego; 
      t.Anio_juego.value=task.Anio_juego; 
      t.Leng_juego.value=task.Leng_juego; 
      t.Log_juego.value=task.Log_juego; 
      t.Valo_juego.value=task.Valo_juego; 
    }
    return t;
  });
  renderTasks(tasks);
});
