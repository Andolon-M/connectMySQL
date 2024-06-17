import { connection } from "../../db/connection.js";

// 4. **Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:**
export const getpaymentsByCustomer103 = async() =>{
    let [result] = await connection.query('select * from payments where customerNumber = 103');
    return result;
}

export const getpaymentsByCustomerId = async({id=103}=arg) =>{
    let [result] = await connection.execute(`select * from payments where customerNumber = ?`, [id]);
    return result;
}