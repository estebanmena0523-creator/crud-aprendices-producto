const registroMiddleware = (req, res, next) => {
  const tiempomilisegundos = Date.now();
  const tiempoUTC = new Date().toISOString();

  // 1. Log de la petición entrante
  console.log(`[${tiempoUTC}] ${req.method} ${req.url} - IP: ${req.ip}`);

  // 2. Escuchar cuando termine la respuesta para medir la duración
  res.on("finish", () => {
    const duracion = Date.now() - tiempomilisegundos;
    console.log(`[${tiempoUTC}] Respuesta: ${res.statusCode} - Duración: ${duracion}ms`);
  });

  // 3. Pasar al siguiente middleware o ruta (SOLO UNA VEZ)
  next();
};

module.exports = registroMiddleware;