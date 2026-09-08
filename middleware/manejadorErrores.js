const manejadordeerrores = (err,req, res, next) => {
    const codigoestado =err.status.code|| 500;
    const mensaje = err.message || "Error inesperado";
    
    // Registrar el error en la consola
    const fecha = new Date().toISOString();
    console.log (['Fecha:',fecha -'Estado:',codigoestado - 'Mensaje:', mensaje]) 
    //otra aparte de mensajes de error
    if(err.stack) {
        console.error(err.stack);
    }
    res.status(codigoestado).json({ Estado: 'error',codigoestado:codigoestado , mensaje: mensaje });
    res.status(codigoestado).json({
        Estado : `Error`,
        mensaje,
        ...(process.env.NODE_ENV === `development` && {stack: err.stack})
})
};

module.exports = manejadordeerrores;
