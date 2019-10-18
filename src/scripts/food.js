const foodElement = {
    createFoodElement(food) {
        const { name, ethnicity, category, ingredients, countryOrigin, energy, fat, sugar } = food;
        console.log('food', food);

	    return `<div class="food">
            <h2>${name}</h2>
            <p><strong>Ethnicity:</strong> ${ethnicity}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p class="ingredient-header"><strong>Ingredients:</strong></br>
            <p class="ingredient-list">${ingredients}</p>
            <p><strong>Calories/serving:</strong> ${energy}</p>
            <p><strong>Fat/serving:</strong> ${fat}</p>
            <p><strong>Sugar/serving:</strong> ${sugar}</p>
            </div>`;
    },
    getValidProductFields(food, productInfo) {
                
        const { ingredients_text } = productInfo.product;
        const { energy, energy_unit, fat, fat_unit, sugars, sugar_unit } = productInfo.product.nutriments
        
        food.ingredients = ingredients_text ? ingredients_text : "No ingredients listed";
        food.energy = energy_unit ? `${energy} ${energy_unit}` : "Unavailable";
        food.fat = fat_unit ? `${fat} ${fat_unit}` : "Unavailable";
        food.sugar = sugar_unit ? `${sugars} ${sugar_unit}` : "Unavailable";
    },
    addFoodElementToDom(foodElement){
        document.querySelector('.foodList').innerHTML += foodElement;
    }
};

export default foodElement;