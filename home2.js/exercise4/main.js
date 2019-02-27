var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

function pluck(array, field){
    var fieldArr = [];
    for(var i = 0; i < array.length; i++){
        fieldArr.push(array[i][field]);
    }
    return fieldArr;
}
console.log(pluck(characters, 'name'));
