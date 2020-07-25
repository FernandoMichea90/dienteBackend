const express=require('express');
const router =express.Router();
const citaController=require('../controllers/citaController');
const dienteController=require('../controllers/dienteContoller');

const usuarioController=require('../controllers/usuarioController');
const auth =require('../middleware/auth')

module.exports=function()
{

router.post('/diente',dienteController.nuevoDiario);
router.get('/diente',dienteController.listarDiarios);
router.put('/diente/:idDiente',dienteController.actualizarDiario );
router.get('/diente/:idDiente',auth,dienteController.mostrarDiario);
router.delete('/diente/:idDiente',dienteController.eliminarDiario);
router.get('/dienteporusuario/:idUsuario',auth,dienteController.listarDiariosporId);


//buscar por fecha de hoy 

router.get('/proximacita',citaController.proximacita);
router.get('/proximacitados',citaController.proximacita);

//buscar cita de hoy  o proximamente



router.get('/dienteporfecha',dienteController.listarDiariosfecha);

router.post('/cita',citaController.nuevoDiario);
router.get('/cita/:idUsuario',citaController.listarDiarios);
router.put('/cita/:idCita',citaController.actualizarDiario );
router.get('/cita/:idCita',citaController.mostrarDiario);
router.delete('/cita/:idCita',citaController.eliminarDiario);

// Crear Usuario 
router.post('/crearcliente',usuarioController.nuevoUsuario);
//Buscar Usuario 
router.get('/usuario/:idUsuario',auth,usuarioController.buscarNombreUsuario);

router.post('/iniciar-sesion',usuarioController.autenticarUsuario);



return router;

}




