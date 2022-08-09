/*
    spent 1000tk = get 10% discount.
    spent 2000tk = get 15% discount.
    spent 4000tk = get 20% discount.
*/

function discountPrice(price) {
    if (price >= 4000) {
        let discountPrice = price * 20 / 100;
        const netPrice = price - discountPrice;
        return (netPrice);
    } else if (price >= 2000) {
        let discountPrice = price * 15 / 100;
        const netPrice = price - discountPrice;
        return (netPrice);
    } else if (price >= 1000) {
        let discountPrice = price * 10 / 100;
        const netPrice = price - discountPrice;
        return (netPrice);
    } else {
        return ('not discount');
    }
}

console.log(discountPrice(500));