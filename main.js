let menu = {
  _meal : '',
  _price : 0,


//Getting the properties w/o direct access to the user
  get todaysSpecial(){
    if(_meal && _price){
      return ("Today's Special is " + _meal + " for $" + _price);
    }
    return "Meal or price was not set correctly!"
  },

//safely setting properties not meant for others
  set settingMeal(mealToCheck){
    if(typeof mealToCheck === 'string'){
      return _meal = mealToCheck
    }
  },

  set settingPrice(priceToCheck){
    if(typeof priceToCheck === 'number'){
      return _price = priceToCheck
    }
  }
}

//Selecting random meal and a price
let meals = ["Pasta", "Pizza", "Chicken", "Nuggets", "Soup", "Curry", "Fish"];
let randMealIndex = Math.floor(Math.random()*meals.length);
let randomMeal = meals[randMealIndex];

let prices = [12, 20, 9, 5];
let randPriceIndex = Math.floor(Math.random()*4);
let randomPrice = prices[randPriceIndex];

menu.settingMeal =randomMeal;
menu.settingPrice = randomPrice;
console.log(menu.todaysSpecial);
