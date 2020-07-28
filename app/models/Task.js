const {model, Schema} = require('mongoose')

const newTaskSchema=new Schema({
    Nom_juego:{
        type: String,
        required: true
    },
    Des_juego:{
        type: String
    },
    Genr_juego:{
        type: String
    },
    Plat_juego:{
        type: String
    },
    Num_juego:{
        type: String
    },
    Anio_juego:{
        type: String
    },
    Leng_juego:{
        type: String
    },
    Log_juego:{
        type: Number
    },
    Valo_juego:{
        type: Number
    }
    
})

module.exports=model('Task', newTaskSchema)