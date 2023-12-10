var input = document.getElementById('in');
var btn = document.querySelectorAll('button');
var str = "";

for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click',handleClick);
    function handleClick() {
        var btnInnerHtml = this.innerHTML;
        makeInput(btnInnerHtml);
    }
}

document.addEventListener('keypress',function (e) {
    makeInput(e.key);
})

function makeInput(key) {
    switch (key) {
        case '=':
            str = eval(str);
            input.value = str;
            break;
        case 'AC':
            str = "";
            input.value = str;
            break;
        case 'DEL':
            str = str.substring(0,str.length-1);
            input.value = str;
            break;
        default :
            str += key;
            input.value = str;
            break;
    }
}