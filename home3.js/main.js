var find = function(arr, predicate) {
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }
}
var findIndex = function(arr, predicate) {
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return i;
    }
  }
  return null;
}


var SIZES = [{
    name: 'small',
    price: 100
  },
  {
    name: 'medium',
    price: 200
  },
  {
    name: 'large',
    price: 300
  }
];
var INGREDIENTS = [{
    name: 'chicken',
    price: 100
  },
  {
    name: 'pork',
    price: 150
  },
  {
    name: 'salad',
    price: 10
  },
  {
    name: 'tomato',
    price: 20
  },
  {
    name: 'pepper',
    price: 15
  }
]


var Burger = function(size) {
  this.size = size;
  this.stuffing = [];
  this.price = 0;
  this._calculatePrice();
}


Burger.prototype.getAllSizes = function() {
  return SIZES;
}
Burger.prototype.getAllIngredients = function() {
  return INGREDIENTS;
}

Burger.prototype.changeSize = function(sizeName) {
  var foundSize = find(SIZES, function(size) {
    return size.name === sizeName
  });
  if (foundSize) {
    this.size = foundSize;
  }
}
Burger.prototype.addIngredient = function(ingredientName) {
  var foundIngredient = find(INGREDIENTS, function(i) {
    return i.name === ingredientName;
  });
  if (!foundIngredient) {
    return;
  }
  var chosenIngredient = find(this.stuffing, function(i) {
    return i.name === foundIngredient.name;
  });
  if (!chosenIngredient) {
    this.stuffing.push(foundIngredient);
    this._calculatePrice();
  }
}
Burger.prototype.removeIngredient = function(ingredientName) {
  var chosenIngredientIndex = findIndex(this.stuffing, function(i) {
    return i.name === ingredientName;
  });

  if (chosenIngredientIndex !== null) {
    this.stuffing.splice(chosenIngredientIndex, 1);
    this._calculatePrice();
  }
}
Burger.prototype._calculatePrice = function() {
  var price = this.size.price;
  for (var i = 0; i < this.stuffing.length; i++) {
    price += this.stuffing[i].price;
  }
  this.price = price;
}


Burger.prototype.deleteAllIngredients = function() {
  this.stuffing = [];
}


// burger1.changeSize('large');
// console.log(burger1);
// burger1.changeSize('medium');
// burger1.addIngredient('pork');
// burger1.addIngredient('tomato');
// burger1.removeIngredient('tomato');
