const data = {
    getFoodData() {
        return fetch('http://localhost:8088/food').then((r) => r.json())
    },
    getBarcodeData(food) {
        return fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
        .then(response => response.json())
    }
}

export default data