// convert miles to km

function mileToKm(mile) {
    const km = mile * 1.609344;
    return km;
}

const totalMile = 80;
const finalKm = mileToKm(totalMile);
console.log('My total km: ', finalKm.toFixed(2));