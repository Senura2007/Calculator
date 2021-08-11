var inputLable = document.getElementById('inputLable');

function pushBtn(obj) {
    
    var pushed = obj.innerHTML;
    
    if (pushed == '='){
        inputLable.innerHTML = eval(inputLable.innerHTML);
        
    } else if (pushed == 'AC') {
        inputLable.innerHTML = '0';
        
    } else {
        if (inputLable.innerHTML == '0') {
            inputLable.innerHTML = pushed;
            
        } else {
            inputLable.innerHTML += pushed;
            
        }
    }
}