const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://proto:quacTugxMlEP5ftY@proyectocrud.3mvfq.mongodb.net/juego?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));