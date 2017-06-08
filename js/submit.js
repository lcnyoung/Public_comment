$(function(){
    var price = $('#un-price').text();
    $('.plus').on('click',function(){
        var i = parseInt($('.count-inp').val());
        i++;
        $('.count-inp').val(i);
        $('.total-price,#all-money').text(Number(i * price).toFixed(2));
    })
    $('.minus').on('click',function(){
        var m = parseInt($('.count-inp').val());
        if(m>1 )
        m--;
        $('.count-inp').val(m);
        $('.total-price,#all-money').text(Number(m * price).toFixed(2));
    })
})