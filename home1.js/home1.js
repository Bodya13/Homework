var color, memory, codeBreak;
var memoryArr = [32, 64, 128, 256];
var colorArr = ["black", "Black", "gold", "Gold", "silver", "Silver"];

function cancelOrTry(parameter){
    if(parameter === null){
        document.write('See you soon');
        codeBreak = 1;
    }
    else alert("Try again, please");
}

while(true){
    memory = prompt("Memory?", "Example: 256");
    for(var i = 0; i < memoryArr.length; i++){
        if(+memory == memoryArr[i]){
            while(true){
                color = prompt("Color?", "Example: black");
                for(var j = 0; j < colorArr.length; j++){
                    if(color === colorArr[j]){
                        if(j < 2) document.write('<img src="img/black1.png">');
                        else if(j > 3) document.write('<img src="img/silver.png">');
                        else document.write('<img src="img/gold.png">');
                        codeBreak = 1;
                    }
                }
                if(codeBreak == 1){
                    i = memoryArr.length;
                    break;
                }
                cancelOrTry(color);
                if(codeBreak == 1) break;
            }
        }
    }
    if(codeBreak == 1) break;
    cancelOrTry(memory);
    if(codeBreak == 1) break;
}