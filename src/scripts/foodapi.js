// console.log('Git it!');

const foodFactory = (food) => {
	return `<div class="food">
        <h2>${food.name}</h2>
        <p>Ethnicity: ${food.ethnicity}</p>
        <p>Category: ${food.category}</p>
        <p class="ingredient-list">Ingredients:</br>${food.ingredients}</p>
        <p>Country of origin: ${food.countryOrigin}</p>
        <p>Calories/serving: ${food.caloriesServing}</p>
        <p>Fat/serving: ${food.fatServing}</p>
        <p>Sugar/serving: ${food.sugarServing}</p>
        </div>`;
};

let foodList = '';

const addFoodToDom = (foodEl) => {
	foodList += foodEl;
	document.querySelector('.foodList').innerHTML = foodList;
};

const getValidProductFields = (productInfo, food) => {
	if (productInfo.product.ingredients_text) {
		food.ingredients = productInfo.product.ingredients_text;
	} else {
		food.ingredients = 'No ingredients listed';
    }
    if (productInfo.product.countries){
        food.countryOrigin = productInfo.product.countries;
    }
    if (productInfo.product.nutriments.energy_serving) {
        food.caloriesServing = `${productInfo.product.nutriments.energy_serving} 
        ${productInfo.product.nutriments.energy_unit}`;
    }
    else {
        food.caloriesServing = 'Not listed'
    }
    if (productInfo.product.nutriments.fat_serving) {
	    food.fatServing = `${productInfo.product.nutriments.fat_serving} 
        ${productInfo.product.nutriments.fat_unit}`;
    }
    else {
        food.fatServing = 'Not listed';
    }
    if (productInfo.product.nutriments.sugars_serving){
	    food.sugarServing = `${productInfo.product.nutriments.sugars_serving} 
        ${productInfo.product.nutriments.sugars_unit}`
    }
    else {
        food.sugarServing = 'Not listed';
    }
};

fetch('http://localhost:8088/food').then((response) => response.json()).then((myParsedFoods) => {
	myParsedFoods.forEach((food) => {
		console.log(food); // Should have a `barcode` property

		// Now fetch the food from the Food API
		fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
			.then((response) => response.json())
			.then((productInfo) => {
				getValidProductFields(productInfo, food); // refactored into external function

				// Produce HTML representation
				const foodAsHTML = foodFactory(food);

				// Add representaiton to DOM
				addFoodToDom(foodAsHTML);
			});
	});
});
