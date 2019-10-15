// console.log('Git it!');

const foodFactory = (food) => {
    return `<div class="food">
        <h2>${food.name}</h2>
        <p>${food.ethnicity}</p>
        <p>${food.category}</p>
        </div>`
}

let foodList = "";

const addFoodToDom = (foodEl) => {
    foodList += foodEl;
    // document.querySelector(".foodList").appendChild(foodEl);
    document.querySelector(".foodList").innerHTML = foodList;
}

fetch("http://localhost:8088/food")
.then(foods => foods.json())
.then(parsedFoods => {
    parsedFoods.forEach(food => {
        const foodAsHTML = foodFactory(food);
        addFoodToDom(foodAsHTML);
    })
})

// console.log(foodList);