import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProduct } from "../data/products.js";
//import '../data/cart-class.js';

// import '../data/backend-practice.js';


loadProduct(()=>
{
renderOrderSummary();
renderPaymentSummary();
});