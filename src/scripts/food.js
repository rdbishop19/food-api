const foodElement = {
    createFoodElement(food) {
        const { name, ethnicity, category, ingredients, countryOrigin, energy, fat, sugar } = food;
        console.log('food', food);
        
	    return `<div class="food">
            <h2>${name}</h2>
            <p>Ethnicity: ${ethnicity}</p>
            <p>Category: ${category}</p>
            <p class="ingredient-list">Ingredients:</br>${ingredients}</p>
            <p>Calories/serving: ${energy}</p>
            <p>Fat/serving: ${fat}</p>
            <p>Sugar/serving: ${sugar}</p>
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