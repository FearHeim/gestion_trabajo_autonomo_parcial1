//Archivo principal
//Se encarga de iniciar la aplicación

//Llamamos a los archivos correspondientes así como al paquete de electron
const { createWindow } = require('./main')
const { app } = require('electron')

//Importamos el archivo para la conexión
require('./database');

//Crear ventana
app.whenReady().then(createWindow);
app.allowRendererProcessReuse = false 