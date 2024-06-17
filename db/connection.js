import mysql from 'mysql2/promise';

// let connection = await mysql.createConnection({
//     host: 'roundhouse.proxy.rlwy.net',
//     port: 28138,
//     database: 'railway',
//     user: 'root',
//     password: 'BFsPEWFPFSjHXWzlinKqCjVecSqzVTzN'
// })

export let connection = null
try {
    connection = await mysql.createConnection({
        host: 'roundhouse.proxy.rlwy.net',
        port: 28138,
        database: 'railway',
        user: 'root',
        password: 'BFsPEWFPFSjHXWzlinKqCjVecSqzVTzN'
    });
    console.log("Conexión a la base de datos Ok")
}

catch (error) {
    console.error("error al conectar");
}

