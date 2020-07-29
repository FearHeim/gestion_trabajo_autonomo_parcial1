//Llamamos al paquete electron, necesario para crear la aplicación web como de escritorio
const { BrowserWindow, ipcMain } = require("electron");
const Task = require("./models/Task");

//Creamos las ventana
function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  });

  //Cargamos la ventana que queremos mostrar inicialmente, es un archivo html
  win.loadFile("app/principal.html");
}

//A continuación vemos los métodos para la realización del CRUD
//Recordar que el paso de datos el por medio de web sockets (de esta manera funciona electron)

ipcMain.on("new-task", async (e, arg) => {
  const newTask = new Task(arg);
  const taskSaved = await newTask.save();
  console.log(taskSaved);
  e.reply("new-task-created", JSON.stringify(taskSaved));
});

ipcMain.on("get-tasks", async (e, arg) => {
  const tasks = await Task.find();
  e.reply("get-tasks", JSON.stringify(tasks));
});

ipcMain.on("delete-task", async (e, args) => {
  const taskDeleted = await Task.findByIdAndDelete(args);
  e.reply("delete-task-success", JSON.stringify(taskDeleted));
});

ipcMain.on("update-task", async (e, args) => {
  console.log(args);
  const updatedTask = await Task.findByIdAndUpdate(
    args.idTaskToUpdate,
    { Nom_juego: args.Nom_juego, Des_juego: args.Des_juego, Genr_juego: args.Genr_juego, Plat_juego: args.Plat_juego, Num_juego:args.Num_juego, Anio_juego:args.Anio_juego, Leng_juego:args.Leng_juego, Log_juego:args.Log_juego, Valo_juego:args.Valo_juego },
    { new: true }
  );
  e.reply("update-task-success", JSON.stringify(updatedTask));
});

//Se exporta el metodo para crear ventanas
module.exports = { createWindow };
