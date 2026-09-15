const jwt = require("jsonwebtoken");

const autenticacionToken = (req, res, next) => {
    // Usamos 'authorization' en minúsculas y validamos si existe primero
    const authHeader = req.headers["authorization"];
    
    if (!authHeader) {
        return res.status(401).json({ Error: "Acceso denegado, token no proporcionado.!Buen intento hacker" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ Error: "Formato de token inválido." });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ Error: "Token inválido." });
        }
        req.aprendiz = user;
        next();
    });
};

module.exports = autenticacionToken;