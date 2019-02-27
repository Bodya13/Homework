(function(){
    var area = document.querySelector('.area');
    var circleInp = document.querySelector('#circleInp');
    var squareInp = document.querySelector('#squareInp');
    var numerInp = document.querySelector('#number');
    
    area.addEventListener('click', function(e) {
        var cir = document.createElement('div');
        var squ = document.createElement('div');
        var target = this;
        var num = numerInp.value;
        
        cir.classList.add('circle');
        squ.classList.add('square');

        cir.style.width = num + 'px';
        cir.style.height = num + 'px';
        squ.style.height = num + 'px';
        squ.style.width = num + 'px';

        if(circleInp.checked == true){
            cir.style.top = e.offsetY + 'px';
            cir.style.left = e.offsetX + 'px';
            target.appendChild(cir);  
        }
        else if(squareInp.checked == true){
            squ.style.top = e.offsetY + 'px';
            squ.style.left = e.offsetX + 'px';
            target.appendChild(squ);
        }
    });
    
}())