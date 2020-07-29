const mongoose = require('mongoose');


//Conexión a la base de datos mongo db por medio de su uri
//El uri que vemos a continuación nos muestra que entraremos con el usuario proto a la base de datos juego
mongoose.connect('mongodb+srv://proto:quacTugxMlEP5ftY@proyectocrud.3mvfq.mongodb.net/juego?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//Se muestra en consola si se logró conectar
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));