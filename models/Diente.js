const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const dienteSchema=new Schema(
    {
        fecha:
        {
                   type:Date,
                   unique:false

        },
        cepillo:
        {
            type:Number
        },
        hilo:
        {
            type:Number
        },
        usuario: {
            type: Schema.ObjectId,
            ref: 'usuario'
        }
    })
    module.exports=mongoose.model('diente',dienteSchema);