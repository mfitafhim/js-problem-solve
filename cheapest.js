// find cheapest phone from an array
const phones = [
    { name: 'Samsung', camera: '12mp', storage: '8gb', price: 30000, color: 'black' },
    { name: 'Iphone', camera: '12mp', storage: '8gb', price: 100000, color: 'black' },
    { name: 'Xiaomi', camera: '12mp', storage: '8gb', price: 50000, color: 'black' },
    { name: 'Vivo', camera: '12mp', storage: '8gb', price: 20000, color: 'black' },
    { name: 'Symphony', camera: '12mp', storage: '8gb', price: 10000, color: 'black' }
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        // console.log(phone);
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
console.log(cheapestPhone(phones));
