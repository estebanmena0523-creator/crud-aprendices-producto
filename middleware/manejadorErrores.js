const manejadorErrores = (err, req, res, next) => {
  console.error(err.stack || err.message);

  const statusCode = err.status || err.statusCode || 500;
  
  res.status(statusCode).json({
    error: true,
    mensaje: err.message || "Error interno del servidor"
  });
};

module.exports = manejadorErrores;