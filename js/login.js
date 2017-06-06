$(function(){
    var code = '';
    var mobi = /^1[34578]\d{9}$/;
    var status = 0;
    $('.inp-send').on('click',function(){
        var number = $('.inp-mobi').val();
        if(number == ''){
            $('.warning').fadeIn().html('请填写手机号').fadeOut(3000);
        }else if(!mobi.test(number)){
            $('.warning').fadeIn().html('手机号格式有误,请重新输入').fadeOut(3000);
        }else if(mobi.test(number)){
            
            
            if(status == 0){
                status = 1;
                for(var i = 0;i < 4;i++){
                    code += Math.round(Math.random() * 9)
                }
                console.log(code);
                countdown();
            }
            
            
        }
    })
    $('.btn-login').on('click',function(){
        console.log(code);
        var val = $('.inp-code').val()
        if(val !== code){
            $('.warning').fadeIn().html('验证码有误').fadeOut(3000);
            $('.inp-code').val('');
        } else if(val == code){
            $('.warning').fadeIn().html('登陆成功').fadeOut(3000);
        }
    })

})


function countdown(){
    var i = 30
    set = setInterval(function(){
        if(i > 0){
            i --;
            $('.inp-send').val(i+'s后重新获取');  
        } else if(i == 0){
            clearInterval(set);
            $('.inp-send').val('获取验证码');
            status = 0;
        }

    },1000)
    
}