$(function(){
    $('.btn-login').on('click',function(){
        var acc = $('.acc-inp').val();
        var pass = $('.inp-con').val();
        if(acc == '' || pass == ''){
            $('.warning').fadeIn().html('账号或密码不能为空').fadeOut(3000)
        }
    });
    $('.close').on('click',function(){
        $('.notice').fadeOut();
    })
})