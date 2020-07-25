const jwt =require('jsonwebtoken')
module.exports=(req,res,next)=>{

    const authHeaders=req.get('Authorization');
   

    if(!authHeaders)
    {
        const error=new Error ('no auntenticado, no hay jwt')
        error.statusCode=401
        throw error

    }

    const token=authHeaders.split(' ')[1]
    let revisarToken;
    try {
     revisarToken=jwt.verify(token,'LLAVESECRETA')
        
    } catch (error) {
        error.statusCode=500
        throw error
    }
    

    if(!revisarToken){
        const error=new Error('No Autenticado')
        error.statusCode=401
        throw error
    }
    next()

}