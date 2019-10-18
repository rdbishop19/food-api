// console.log('Git it!');
import data from "./data.js"
import foodElement from "./food.js"

data.getFoodData().then((myParsedFoods) => {
    myParsedFoods.forEach(food => {
        // Now fetch the food from the OpenFoodFactsAPI
        data.getBarcodeData(food)
            .then(productInfo => {
                foodElement.getValidProductFields(food, productInfo);

                const foodAsHTML = foodElement.createFoodElement(food);
                foodElement.addFoodElementToDom(foodAsHTML);
            });
    });
});
