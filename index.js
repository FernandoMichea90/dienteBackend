const express=require('express');
const routes=require('./routes')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
require('dotenv').config({path:'variables.env'})
const cors =require('cors');
const app =express()
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/Dental',
{
    useNewUrlParser:true

})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const whitelist =[process.env.FRONTEND_URL]
const corsOption={
    origin:(origin,callBack)=>
    {


        console.log("el origen "+origin);
        
        // revisar si la peticion proveniente del servidor esta en la whitelist

        const existe =whitelist.some(dominio=>dominio===origin);
        if(existe)
        {

            callBack(null,true)
        }else{

            callBack(new Error('no permitido por los suoer cors'));
            
        }
    }

}
app.use(cors(corsOption));
app.use('/',routes());
const host =process.env.HOST || 'localhost'
const port =process.env.PORT || 5000
app.listen(process.env.PORT,process.env.HOST,()=>
{
    console.log(process.env.DB_URL);
    console.log(process.env.FRONTEND_URL);

})