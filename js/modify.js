$(function(){
    $('.commit').on('click',function(){
        var mobi = $('.account-input').val();
        var old = $('.pass-input').val();
        var newmobi = $('.new-input').val();
        
        if(mobi !== '' && old !== '' && newmobi !== ''){
            console.log(mobi)
            $.post('/modify',{
                userMobi : mobi,
                userPwd: old,
                style_: 'check3'
            },function(data){
                if(data == 'true'){
                    $.post('/modify',{
                        userMobi : mobi,
                        style_: 'update_',
                        newPwd: newmobi
                    })
                    $('.warn').stop(true).fadeIn().html('修改成功').fadeOut(3000);
                } else if(data == 'false'){
                    $('.warn').stop(true).fadeIn().html('输入有误!!').fadeOut(3000);
                }
            })
        } else{
            $('.warn').stop(true).fadeIn().html('输入有误!!').fadeOut(3000);
        }
    })
})