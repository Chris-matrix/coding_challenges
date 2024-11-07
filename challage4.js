// Scenario: Online Store Discount Calculation
// An online store wants to calculate discounts for its customers based on their membership level. 
// Your task is to write a function that can process different discount levels using a callback function.

/* Challenge: JavaSript Callbacks
* 
* 0. Call the Apply Discount function for each discount and log the results 
* 1. Create a new discount function called "seasonalDiscount" that provides a 15% discount and use it with "applyDiscount".
* 2. Modify the "applyDiscount" function to also log the original price, discount type, and final price.
*/

// Example usage
const originalPrice = 100;

function applyDiscount(price, discountCallback) {
    return discountCallback(price);
}

function regularCustomerDiscount(price) {
    return price * 0.95; // 5% discount
}

function premiumCustomerDiscount(price) {
    return price * 0.90; // 10% discount
}

function vipCustomerDiscount(price) {
    return price * 0.80; // 20% discount
}

// calling a function
const regularprice = applyDiscount(originalPrice, regularCustomerDiscount); // 95
console.log(`Regular customer discount: $${regularPrice}`);

const premiumPrice = applyDiscount(originalPrice, premiumCustomerDiscount); // 90
const vipPrice = applyDiscount(originalPrice, vipCustomerDiscount); // 80