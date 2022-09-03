function stripUnit(num){
    num = num.split('');
    num.pop();
    num.pop();
    return Number(num.join(''));
}

$(document).ready(function(){
    $('#header-icon-ham').click(function(){
        $(this).hide();
        $('#header-icon-close').show();
        $('#header-bottom').show();
    });
    $('#header-icon-close').click(function(){
        $(this).hide();
        $('#header-icon-ham').show();
        $('#header-bottom').hide();
    });
    if(stripUnit($('body').css('width')) <= 1000){
        $('#header-bottom').hide();
        $('#header-bottom').click(function(){
            $(this).hide();
            $('#header-icon-close').hide();
            $('#header-icon-ham').show();
        })
    }
});