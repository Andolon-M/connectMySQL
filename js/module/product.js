import { connection } from "../../db/connection.js";

// ### Consultas de una sola tabla

// 1. **Recuperar todas las líneas de productos con sus descripciones:**
export const getAllProductsDescription = async() =>{
    let [result] = await connection.query('SELECT productLine, textDescription FROM productlines');
    console.log("1. **Recuperar todas las líneas de productos con sus descripciones:**")
    return result;
}



// ### Consultas de múltiples tablas

// 1. **Listar todos los productos junto con las descripciones de sus líneas de productos:**

export const getAllProductsWithYourTexProductLine = async() =>{
    let [result] = await connection.query('select p.productCode, p.productName as producto_nombre, p.productLine, pl.textDescription from products  p inner join productlines pl on p.productLine = pl.productLine limit 5; ');
    console.log("1. **Listar todos los productos junto con las descripciones de sus líneas de productos:**")
    return result;
}