import { connection } from "../../db/connection.js";

// ### Consultas de una sola tabla

// 3. **Listar todas las órdenes que tienen un estado de 'Enviado':**
export const getAllOrdersByStatus = async({status='Shipped'}=arg) =>{
    let [result] = await connection.execute(`select * from orders where status = ?`, [status]);
    console.log("3. **Listar todas las órdenes que tienen un estado de 'Enviado':**")
    return result;
}



// ### Consultas de múltiples tablas

// 3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**

export const getAllOrdersByCountry = async({country='France'}={}) =>{
    let [result] = await connection.execute(`select o.orderNumber,	o.orderDate,	o.requiredDate,	o.shippedDate,	o.status,	o.comments from orders o inner join customers on o.customerNumber = customers.customerNumber where customers.country = ?`, [country]);
    console.log("3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**")
    return result;
}

// 5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 103:**
export const getOrdersByCustomer = async({id=103}={}) =>{
    let [result] = await connection.execute(`
        SELECT
            c.customerNumber,
            c.customerName,
            o.orderNumber,
            od.productCode,
            p.productName
        FROM
            customers c
        INNER JOIN
            orders o ON c.customerNumber = o.customerNumber
        INNER JOIN
            orderdetails od ON o.orderNumber = od.orderNumber
        INNER JOIN
            products p ON od.productCode = p.productCode
        WHERE
            c.customerNumber = ?
        ORDER BY
            o.orderNumber,
            p.productName;

        `, [id]);
    console.log("5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 103:**")
    return result;
}