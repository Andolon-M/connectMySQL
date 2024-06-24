import { connection } from "../../db/connection.js";


// ### Consultas de múltiples tablas


// 4. **Listar el monto total de los pagos recibidos de cada cliente:**

export const getAllPaymentsByCustomers = async() =>{
    let [result] = await connection.query('select c.customerNumber, c.customerName, sum(p.amount) as total_pagos from payments p inner join customers c on p.customerNumber = c.customerNumber group by p.customerNumber, c.customerName limit 10;');
    console.log("4. **Listar el monto total de los pagos recibidos de cada cliente:**")
    return result;
}