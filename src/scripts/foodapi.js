// console.log('Git it!');

const foodFactory = (food) => {
    return `<div class="food">
        <h2>${food.name}</h2>
        <p>Ethnicity: ${food.ethnicity}</p>
        <p>Category: ${food.category}</p>
        <p class="ingredient-list">Ingredients:</br>${food.ingredients}</p>
        <p>Country of origin: ${food.countryOrigin}</p>
        </div>`
}

let foodList = "";

const addFoodToDom = (foodEl) => {
    foodList += foodEl;
    // document.querySelector(".foodList").appendChild(foodEl);
    document.querySelector(".foodList").innerHTML = foodList;
}

// fetch("http://localhost:8088/food")
// .then(foods => foods.json())
// .then(parsedFoods => {
//     parsedFoods.forEach(food => {
//         const foodAsHTML = foodFactory(food);
//         addFoodToDom(foodAsHTML);
//     })
// })

fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            console.log(food) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    if (productInfo.product.ingredients_text) {
                      food.ingredients = productInfo.product.ingredients_text
                    } else {
                      food.ingredients = "no ingredients listed"
                    }
                    food.countryOrigin = productInfo.product.countries[0]
                    food.caloriesServing = productInfo.product.nutriments.energy_serving

                    // Produce HTML representation
                    const foodAsHTML = foodFactory(food)

                    // Add representaiton to DOM
                    addFoodToDom(foodAsHTML)
                })
        })
    })