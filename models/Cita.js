const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const citaSchema=new Schema(
    {

        fecha:
        {
            type:Date,
          

        }
,
        usuario: {
            type: Schema.ObjectId,
            ref: 'usuario'
        }

    })

    module.exports=mongoose.model('cita',citaSchema);