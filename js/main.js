import { getAllCustomersByContryandCreditLimit, getCreditLimitPromOfAllCustomers, getpaymentsByCustomerId, prueba } from "./module/customers.js";
import { getAllEmployeesByOfficeId, getAllNameAndEmailOffEmployeeByBoos } from "./module/employees.js";
import { getAllOrdersByCountry, getAllOrdersByStatus, getOrdersByCustomer } from "./module/orders.js";
import { getAllPaymentsByCustomers } from "./module/payments.js";
import { getAllProductsDescription, getAllProductsWithYourTexProductLine } from "./module/product.js"
//Consulta de prueba:
// console.log(await prueba());


// ### Consultas de una sola tabla
//1
// console.log(await getAllProductsDescription());

//2
// console.log(await getAllEmployeesByOfficeId());

//3
// console.log(await getAllOrdersByStatus());

//4
// console.log( await getpaymentsByCustomerId({id:114}));

//5. 
// console.log(await getAllCustomersByContryandCreditLimit()); //asi se envian los datos: {country: 'Spain', creditLimit: 227600.00}



// ### Consultas de múltiples tablas

//1.
// console.log(await getAllProductsWithYourTexProductLine()) //limitado en la consulta a 5 registros

//2. 
// console.log(await getAllNameAndEmailOffEmployeeByBoos()) //asi se cambia busca por un jefe diferente al por defecto: {id: 1143}

//3. 
// console.log(await getAllOrdersByCountry()) //asi se cambia el pais de busqueda por defecto: {country: 'Spain'}

//4.
// console.log(await getAllPaymentsByCustomers()) // la respuesta esta limitada a 10 registros para las pruebas en dev

//5.
// console.log(await getOrdersByCustomer()) // asi se busca por un id diferente al establecido por defecto: {id:112}





// ## Parte 2/2

// ### Consultas de una sola tabla

// 1. **Obtener el promedio del límite de crédito de todos los clientes:**
console.log(await getCreditLimitPromOfAllCustomers())   

   

// 2. **Calcular el total de productos en stock:**

   
   
   

// 3. **Encontrar el precio medio de compra de todos los productos:**

   
   
   

// 4. **Contar la cantidad de oficinas en cada país:**

   
   
   

// 5. **Calcular el total de pagos recibidos:**

   
   
   

// 6. **Obtener la cantidad total de empleados:**

   
   
   

// 7. **Calcular la cantidad media de productos pedidos en las órdenes:**

   
   
   

// 8. **Encontrar el precio total de todos los productos:**

   
   
   

// 9. **Calcular el promedio del precio sugerido (MSRP) de los productos:**

   
   
   

// 10. **Contar la cantidad de empleados por título de trabajo:**





// ### Consultas de múltiples tablas

// 1. **Calcular el total de pagos recibidos por cada cliente:**

   
   
   

// 2. **Obtener el promedio del límite de crédito de los clientes por país:**

   
   
   

// 3. **Calcular el total de órdenes realizadas por cada cliente:**

   
   
   

// 4. **Encontrar la cantidad total de productos pedidos por cada cliente:**

   
   
   

// 5. **Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:**

   
   
   

// 6. **Obtener el promedio de la cantidad de productos en stock por línea de productos:**

   
   
   

// 7. **Calcular el total de pagos recibidos por cada país:**

   
   
   

// 8. **Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:**

   
   
   

// 9. **Calcular el total de órdenes gestionadas por cada empleado:**

   
   
   

// 10. **Obtener la cantidad total de productos vendidos por cada línea de productos:**

    
    
    

// 11. **Encontrar el promedio de la cantidad de productos ordenados por cada cliente:**

    
    
    

// 12. **Calcular el total de ventas realizadas en cada país:**

    
    
    

// 13. **Obtener el promedio del precio de compra de los productos por línea de productos:**

    
    
    

// 14. **Encontrar la cantidad total de productos vendidos por cada vendedor:**

    
    
    

// 15. **Calcular el total de pagos recibidos por cada vendedor:**

    
    
    

// 16. **Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:**

    
    
    

// 17. **Encontrar el total de ventas realizadas por cada oficina:**

    
    
    

// 18. **Calcular la cantidad media de productos pedidos por cada cliente:**

    
    
    

// 19. **Obtener el total de pagos realizados en cada año:**

    
    
    

// 20. **Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos:**

    
    
    