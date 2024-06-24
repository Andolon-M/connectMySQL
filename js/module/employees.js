import { connection } from "../../db/connection.js";

// ### Consultas de una sola tabla

// 2. **Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':**
export const getAllEmployeesByOfficeId = async({id=1}=arg) =>{
    let [result] = await connection.execute(`select * from employees where officeCode = ?`, [id]);
    console.log("2. **Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':**")
    return result;
}



// ### Consultas de múltiples tablas

// 2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**
export const getAllNameAndEmailOffEmployeeByBoos = async({id=1143}={}) =>{
    let [result] = await connection.execute(`select firstName as Nombre, lastName as Apellido from employees where reportsTo = ?;`, [id]);
    console.log("2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**")
    return result;
}