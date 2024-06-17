import { getpaymentsByCustomer103, getpaymentsByCustomerId } from "./module/customers.js";
import { getAllProductsDescription } from "./module/product.js"


// console.log(await getpaymentsByCustomer103());

console.log( await getpaymentsByCustomerId({id:114}));
