const data = {
    getFoodData() {
        return fetch('http://localhost:8088/food').then((r) => r.json())
    }
}

export default data