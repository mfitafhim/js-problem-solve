//  Calculate the total cost of the products in a shopping cart

let shoppingCart = [
    { name: 'shirt', price: 1200, quantity: 3 },
    { name: 'pant', price: 1600, quantity: 3 },
    { name: 'panjabi', price: 1800, quantity: 3 },
    { name: 'lungi', price: 500, quantity: 2 },
    { name: 'tupi', price: 200, quantity: 2 },
    { name: 'top', price: 100, quantity: 4 }
];

function totalCost(product) {
    sum = 0;
    for (let i = 0; i < product.length; i++) {
        const products = product[i];
        // console.log(products);
        const productTotal = products.price * products.quantity;
        sum += productTotal;
    }
    return sum;
}

let expense = totalCost(shoppingCart);
console.log('Total expense:', expense);