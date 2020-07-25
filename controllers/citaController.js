const Diario = require('../models/Cita');

// agrega un nuevo cliente
exports.nuevoDiario = async (req, res, next) => {
    const diario = new Diario(req.body);

    try {
        // almacenar el registro
        await diario.save();
        res.json({ mensaje : 'Se agrego un nuevo registro' });
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error);
        next();
    }
}


exports.mostrarDiario = async (req, res, next) => {
    const diario = await  Diario.findById(req.params.idCita);

    if(!diario) {
        res.json({mensaje : 'Ese diario no existe'});
        next()
    }
    // Mostrar el cliente
    res.json(diario);
}

exports.listarDiarios=async(req,res,next)=>
{

    try {
        const diario = await Diario.find({usuario:req.params.idUsuario}).sort({fecha:-1});
        res.json(diario);
    } catch (error) {
        console.log(error);
        next();
    }


}


exports.actualizarDiario = async (req, res, next) => {
    try {
        const diario = await Diario.findOneAndUpdate({ _id : req.params.idCita }, req.body, {
            new : true
        });
        res.json(diario);
    } catch (error) {
        res.send(error);
        next();
    }
}


exports.eliminarDiario = async (req, res, next) => {
    try {
        await Diario.findOneAndDelete({_id : req.params.idCita});
        res.json({mensaje : 'El diario se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.proximacita=async (req,res,next)=>
{

    var start = new Date();
    

    start.setHours(0,0,0,0);

   

    try {
        const diario = await Diario.find({"fecha" : { $gte : start}}).sort({"fecha": 1}).limit(1);         
        res.json(diario);
    } catch (error) {
        console.log(error);
        next();
    }






}





