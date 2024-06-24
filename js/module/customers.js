import { connection } from "../../db/connection.js";

// ### Consultas de una sola tabla


// 4. **Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:**
export const getpaymentsByCustomerId = async({id=103}=arg) =>{
    let [result] = await connection.execute(`select * from payments where customerNumber = ?`, [id]);
    console.log("4. **Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:**")
    return result;
}

// 5. **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:**
export const getAllCustomersByContryandCreditLimit = async({country='USA', creditLimit='50000'}={}) =>{
    let [result] = await connection.execute(`select * from customers where country = ? AND  creditLimit >= ?`, [country, creditLimit]);
    console.log("5. **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:**")
    return result;
}



// ### Consultas de múltiples tablas



// ## Parte 2/2

// ### Consultas de una sola tabla

// 1. **Obtener el promedio del límite de crédito de todos los clientes:**

export const getCreditLimitPromOfAllCustomers = async() =>{
    let [result] = await connection.execute(`
        select 
        avg(creditLimit) as 'Limite de credito promedio' 
        from customers;
    `);
    console.log("1. **Obtener el promedio del límite de crédito de todos los clientes:**")
    return result;
}

export const prueba = async() =>{
    let [result] = await connection.query(`
        select
                 c.customerNumber as customerNumber, c.customerName, c.country, c.creditLimit
             from
                 customers c
                     join (
                         select
                             max(creditLimit) as credito_maximo
                         from
                             customers
                     ) as credito_maximo
             on
                 c.creditLimit  = credito_maximo.credito_maximo;
    
    `);
    console.log("")
    return result;
}

