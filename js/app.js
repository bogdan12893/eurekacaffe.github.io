$(document).ready(function(){
    
    const foods = [
        {
            id: 0,
            name: "Chicken Manchurian",
            category: "Main Course",
            price: 9.99,
            photo: "https://d2e147lbltb8cj.cloudfront.net/r/i/8d38109e-6b0b-47f6-9a1f-a5b7c2407bda_10x_299_195_75"
        },
        {
            id: 1,
            name: "Gobi Manchurian",
            category: "Main Course",
            price: 11.99,
            photo: "https://d2e147lbltb8cj.cloudfront.net/r/i/77344844-b13a-453d-a64d-409b139e942a_10x_299_195_75"
        },
        {
            id: 2,
            name: "Nasi Goreng",
            category: "Main Course",
            price: 10.99,
            photo: "https://d2bjx8mm52i6cz.cloudfront.net/r/i/86fe861b-2919-42c4-b841-9b648a312803_10x_299_195_75"
        },
        {
            id: 3,
            name: "Paprikas",
            category: "Main Course",
            price: 9.99,
            photo: "https://d2e147lbltb8cj.cloudfront.net/r/i/6f1326db-b96e-4ba5-90b3-4972a9069dba_10x_299_195_75"
        },
        {
            id: 4,
            name: "Fajitas",
            category: "Main Course",
            price: 15.99,
            photo: "https://d2l8n1aq25rh47.cloudfront.net/r/i/7037f7d0-a73f-4ca3-8b3e-c43f3a169b5b_10x_299_195_75"
        },
        {
            id: 5,
            name: "Waffles",
            category: "Dessert",
            price: 5.99,
            photo: "https://d2bjx8mm52i6cz.cloudfront.net/r/i/575e6004-d811-4f13-b81c-dd18d7242e33_10x_299_195_75"
        },
        {
            id: 6,
            name: "Churros",
            category: "Dessert",
            price: 5.99,
            photo: "https://d2bjx8mm52i6cz.cloudfront.net/r/i/0eaafbfe-695d-4700-9964-205066cd578c_10x_299_195_75"
        },
        {
            id: 7,
            name: "Broccoli Cheddar",
            category: "Soup",
            price: 7.99,
            photo: "https://d2e147lbltb8cj.cloudfront.net/r/i/9b3f471b-0d5d-4e7a-a3be-7e0ade9e440a_10x_299_195_75"
        },
        {
            id: 8,
            name: "Pizza Porcini e Noci",
            category: "Main Course",
            price: 8.99,
            photo: "https://d2bjx8mm52i6cz.cloudfront.net/r/i/41ebb1e5-2b1c-4375-ae86-443b8ef00b5c_10x_299_195_75"
        },
        {
            id: 9,
            name: "Pizza Salernitana",
            category: "Main Course",
            price: 8.99,
            photo: "https://d2e147lbltb8cj.cloudfront.net/r/i/2cf3915d-9e8f-44d1-9335-eed2cf943285_10x_299_195_75"
        }
    ];

    ///saving the data to localstorage
    let foodsArr = JSON.stringify(foods);
    let foodsLs = localStorage.setItem("savedFoods", foodsArr);
    let foodsObj = JSON.parse(foodsArr);

    //price range for food
    $('#flat-slider').slider({
        max: 30,
        range: true,
        values: [5, 20],
        change: function(e, ui){
            getFoods(ui.values[0], ui.values[1]);
        }
    });

    let current = $('#flat-slider').slider("option", "values");

    getFoods(current[0], current[1]);

    function getFoods(min, max){
        $('#rangeMin').text(`$${min}`);
        $('#rangeMax').text(`$${max}`);

        //if condition pass the card will display in foodResult
        let foodResult ='';
        let checkFoodPrice = foods.map((food)=>{
            if(food.price >= min && food.price <= max){
                //creating the card
                foodResult += `
                <div class="col-md-3">
                   <div class="card">
                       <img class="card-img-top" src="${food.photo}">
                       <div class="card-body">
                           <h5 class="card-title text-center">${food.name}</h5>
                           <h6 class="text-center">${food.category}</h6>
                           <p class="card-text text-center">$${food.price}</p>
                       </div>
                   </div>
               </div>
               `;
            }
        }).join('');

        $("#food-card").html(foodResult);
    }
});

