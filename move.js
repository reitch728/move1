$(document).ready(function(){
    $('.right').click(function(){
        $('#box').css(
            { left: '+=10px'}
        );
    })
})
$(document).ready(function(){
    $('.left').click(function(){
        $('#box').css(
            { left: '-=10px'}
        );
    })
})
$(document).ready(function(){
    $('.up').click(function(){
        $('#box').css(
            { top: '-=10px'}
        );
    })
})
$(document).ready(function(){
    $('.down').click(function(){
        $('#box').css(
            { top: '+=10px'}
        );
    })
})
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            $('#box').css(
                { left: '-=5px'}
            );
            break;
        case 38:
            $('#box').css(
                { top: '-=5px'}
            );
            break;
        case 39:
            $('#box').css(
                { left: '+=5px'}
            );
            break;
        case 40:
            $('#box').css(
                { top: '+=5px'}
            );
            break;
         case 100:
            $('#box').css(
                { left: '-=5px'}
            );
            break;
        case 104:
            $('#box').css(
                { top: '-=5px'}
            );
            break;
        case 102:
            $('#box').css(
                { left: '+=5px'}
            );
            break;
        case 98:
            $('#box').css(
                { top: '+=5px'}
            );
            break;
         case 65:
            $('#box').css(
                { left: '-=5px'}
            );
            break;
        case 87:
            $('#box').css(
                { top: '-=5px'}
            );
            break;
        case 68:
            $('#box').css(
                { left: '+=5px'}
            );
            break;
        case 83:
            $('#box').css(
                { top: '+=5px'}
            );
            break;
    }
};