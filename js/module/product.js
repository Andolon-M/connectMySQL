import { connection } from "../../db/connection.js";


// 1. **Recuperar todas las líneas de productos con sus descripciones:**
export const getAllProductsDescription = async() =>{
    let [result] = await connection.query('SELECT productLine, textDescription FROM productlines');
    return result;
}