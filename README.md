### Consultas de una sola tabla

1. **Recuperar todas las líneas de productos con sus descripciones:**

   ```sql
   SELECT productLine, textDescription FROM productlines;
   ```

2. **Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':**

   ```sql
   select * from employees where officeCode = 1
   ```

3. **Listar todas las órdenes que tienen un estado de 'Enviado':**

   ```sql
   select * from orders where status = 'Shipped';
   ```

4. **Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:**

   ```sql
   select * from payments where customerNumber = 103;
   ```

5. **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:**

   ```sql
   select * from customers where country = 'USA' AND  creditLimit >= 50000 ;
   ```

### Consultas de múltiples tablas

1. **Listar todos los productos junto con las descripciones de sus líneas de productos:**

   ```sql
   select p.productCode, p.productName as producto_nombre, p.productLine, pl.textDescription from products  p inner join productlines pl on p.productLine = pl.productLine; 

   ```

2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**

   ```sql
   select firstName as Nombre, lastName as Apellido from employees where reportsTo = 1143;
   ```

3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**

   ```sql
   select o.orderNumber,	o.orderDate,	o.requiredDate,	o.shippedDate,	o.status,	o.comments from orders o inner join customers on o.customerNumber = customers.customerNumber where customers.country = 'France';
   ```

4. **Listar el monto total de los pagos recibidos de cada cliente:**

   ```sql
   select c.customerNumber, c.customerName, sum(p.amount) as total_pagos from payments p inner join customers c on p.customerNumber = c.customerNumber group by p.customerNumber, c.customerName;
   ```

5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 103:**

   ```sql
   select c.customerNumber, c.customerName, o.orderNumber, od.productCode, p.productName from customers c  inner join orders o on c.customerNumber = o.customerNumber inner join orderdetails od on o.orderNumber = od.orderNumber inner join products p on od.productCode = p.productCode where c.customerNumber = 103 order by o.orderNumber, p.productName;
   ```