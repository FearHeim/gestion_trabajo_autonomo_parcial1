# Aplicación para gestión de juegos - Hollow Games

Hollow Games es una página (ejecutada como aplicación de escritorio) que te permitirá gestionar tus juegos de manera personal, podrás agregar los que estes jugando y editar los datos de estos.


## Construido con 🛠️
Los paquetes y herramientas que utilizamos para desarrollar este programa son: 

- Electron - Es un paquete que nos permite transformar una aplicación web en un programa de escritorio.
- Bootstrap - Es un conocido paquete de estilos, los utilizamos para el frontend
- Mongoose - El paquete que utilizamos para lograr la conexión con la base de datos MongoDB
- Firebase - La conocida plataforma de Google, la utilizamos para la gestión de usuarios
- Mongo Atlas - Servicio que nos facilita Mongo para crear bases de datos en la nube


## Como utilizar la aplicación 🚀
A continuación mostraré, con ejemplos, como se maneja nuestro pequeño programa.

### Al entrar
Al iniciar la aplicación nos encontraremos con esta ventana, nos mostrará la información general de la página y su logo.

### Inicio de sesión o registro
#### En caso de tener una cuenta
Para empezar a utilizar la aplicación debemos de iniciar sesión, para ello nos dirigimos al botón "¡Empecemos!" o a la parte del menú superior que dice "Login"

Se nos desplegará un formulario en el que pondremos nuestros datos para proceder a entrar a la aplicación

#### En caso de no tener una cuenta
Si no tenemos una cuenta nos dirigiremos hacia donde dice "Registro" en el menú superior, o desde la ventana de login clickeando en "¡Unete!"

Se necesita de un correo electrónico y de una contraseña (debe de tener más de 6 digitos); los ingresamos y tu cuenta estará creada


Luego procederemos a ingresar con nuestro usuario y listo


### Ventana principal
Estando en la ventana principal nos encontraremos con un menú con las opciones "Agregar juego", "Listar juegos" y "Salir"

#### Agregar juego
En la ventana de agregar juego llenaremos los datos del juego que queremos guardar, recuerda que todos los datos son requeridos, si cometes algún error tranquilo, en la parte inferior de la pantalla se nos presentarán los datos guardados con las opciones de "Borrar" y "Editar"


##### Borrar
Es tan sencillo como eso, al escoger esta opción estarás eliminando ese juego de tu biblioteca (se te preguntará antes por una confirmación)

#### Editar
Si presionas en "Editar" los datos del juego se colocarán en el formulario superior para que puedas cambiarlos comodamente, al apretar guardar se actualizarán los datos del juego que hayas escogido


### Listar juegos
En esta sección encontrarás todos los juegos que hayas ingresado al programa.

### Salir
Si presionas esta opción saldrás de tu cuenta y automaticamente se te inviará a la página inicial de la aplicación 

### ¿Te sientes perdido?
Si deseas volver a la ventana principal solo da click en la opción "Inicio" del menú

## Autores ✒️
El programa fue desarrollado por:
- Palacio Zambrano José Enrique
- Patiño López Juan Ramón
Estudiantes de la Facultad de Informática en la Universidad Laica Eloy Alfaro de Manabí.

## Instalación 🔧
En este repositorio encontrarás la carpeta "hollow-games-win32-x64" dentro de esta podrás encontrar el archivo ejecutable de da aplicación (hollow-games.exe)
