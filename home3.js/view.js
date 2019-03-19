var sizeBtns = document.querySelectorAll('.sizes');
var burgerImg = document.querySelector('.burger');
var burgerStyle = window.getComputedStyle(burgerImg);
var burgerWidthPx = burgerStyle.width;
var burgerWidth = +burgerWidthPx.slice(0, 3);
var ingredientsBtns = document.querySelectorAll('.ingredients');
var burgerIngredients = document.querySelector('.burgerIngredients');
var summarySizes = document.querySelectorAll('.summarySizes');
var burger1 = new Burger(SIZES[0]);
var total = document.querySelector('.total');
total.innerHTML = (`Total: ${burger1.price}`);

function changeSizeBtns(btn, i){
    btn.style.backgroundColor = 'green';
    btn.style.color = 'white';
    if(btn == sizeBtns[i]){
        return;
    }
    else{
        sizeBtns[i].style.backgroundColor = 'azure';
        sizeBtns[i].style.color = '#696969';
        summarySizes[i].style.display = 'none';
    }
}
function changeBurgerWidth(parameter){
    if(parameter < 20) burgerWidth += parameter;
    else {
        burgerWidth = parameter;
        deleteAllingredients();
    }
    burgerImg.style.width = burgerWidth + 'px';
}
function deleteAllingredients(){
    for(var i = 0; i < indexArr.length; i++){
        ingredientsBtns[indexArr[i]].classList.toggle('green-white');
    }
    indexArr = [];
    burger1.deleteAllIngredients();
    burger1._calculatePrice();
    total.innerHTML = (`Total: ${burger1.price}`);
}

var i = 2;
var indexArr = [];
sizeBtns[0].addEventListener('click', function(){
    summarySizes[0].style.display = 'block';
    changeSizeBtns(this, i);
    i = 0;
    changeBurgerWidth(224);
    burger1.changeSize('large');
    burger1._calculatePrice();
    total.innerHTML = (`Total: ${burger1.price}`);
})
sizeBtns[1].addEventListener('click', function(){
    summarySizes[1].style.display = 'block';
    changeSizeBtns(this, i);
    i = 1;
    changeBurgerWidth(192);
    burger1.changeSize('medium');
    burger1._calculatePrice();
    total.innerHTML = (`Total: ${burger1.price}`);
})
sizeBtns[2].addEventListener('click', function(){
    summarySizes[2].style.display = 'block';
    changeSizeBtns(this, i);
    i = 2;
    changeBurgerWidth(160);
    burger1.changeSize('small');
    burger1._calculatePrice();
    total.innerHTML = (`Total: ${burger1.price}`);
})

burgerIngredients.addEventListener('click', function(e){
    var coordinate = e.layerX;
    var j = Math.floor(coordinate / 224);
    ingredientsBtns[j].classList.toggle('green-white');
    indexArr.push(j);
    var one = true;
    
    for(var i = -1; i < indexArr.length - 1; i++){
        if(j == indexArr[i]){
            changeBurgerWidth(-16);
            indexArr.splice(i, 1);
            indexArr.length--;
            one = false;
            burger1.removeIngredient(INGREDIENTS[j].name);
            burger1._calculatePrice();
            total.innerHTML = (`Total: ${burger1.price}`);
            break;
        }
    }
    if(one) {
        changeBurgerWidth(16);
        burger1.addIngredient(INGREDIENTS[j].name);
        burger1._calculatePrice();
        total.innerHTML = (`Total: ${burger1.price}`);    
    }
})

