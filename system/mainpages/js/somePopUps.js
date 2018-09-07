//收藏
$(function () {
    $('#underLayer1').hide();
    $('.shouc').click(function () {
        var $this=$(this);

        if($this.hasClass("fa-heart-o")){
            layer.closeAll();
            layer.open({
                className: 'delPop',
                title: ['温馨提示', 'background-color: #fff;'],
                content: '确认收藏？'
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    /*location.reload();*/
                    $this.removeClass('fa-heart-o').addClass('fa-heart');
                    layer.close(index);
                    layer.open({
                        content: '收藏成功'
                        ,skin: 'msg'
                        ,time: 1 //1秒后自动关闭
                    });
                }
            });
        }else {
            layer.closeAll();
            layer.open({
                className: 'delPop',
                title: ['温馨提示', 'background-color: #fff;'],
                content: '确认取消收藏？'
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    /*location.reload();*/
                    $this.removeClass('fa-heart').addClass('fa-heart-o');
                    layer.close(index);
                    layer.open({
                        content: '取消收藏成功'
                        ,skin: 'msg'
                        ,time: 1 //1秒后自动关闭
                    });
                }
            });
        };

    });
    $('.gzhu').click(function () {
        var $this=$(this);

        if($this.hasClass("fa-heart-o")){
            layer.closeAll();
            layer.open({
                className: 'delPop',
                title: ['温馨提示', 'background-color: #fff;'],
                content: '确认关注？'
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    /*location.reload();*/
                    $this.removeClass('fa-heart-o').addClass('fa-heart');
                    layer.close(index);
                    layer.open({
                        content: '关注成功'
                        ,skin: 'msg'
                        ,time: 1 //1秒后自动关闭
                    });
                }
            });
        }else {
            layer.closeAll();
            layer.open({
                className: 'delPop',
                title: ['温馨提示', 'background-color: #fff;'],
                content: '确认取消关注？'
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    /*location.reload();*/
                    $this.removeClass('fa-heart').addClass('fa-heart-o');
                    layer.close(index);
                    layer.open({
                        content: '取消关注成功'
                        ,skin: 'msg'
                        ,time: 1 //1秒后自动关闭
                    });
                }
            });
        };

    });
});

//分类公司>客户公司
$(function () {
    $('.tabheadcons').click(function () {
        var index=$(this).index();
        $(this).addClass('current').siblings('.tabheadcons').removeClass('current');
        $('.pageconts').eq(index).show().siblings('.pageconts').hide();
    })
});


//个人中心>设置
$(function () {
    $('#underLayer1').hide();
    $('.signOut').click(function () {
        layer.closeAll();
        layer.open({
            className: 'delPop',

            content: '确认退出登录吗？'
            ,btn: ['确定', '取消']
            ,yes: function(index){
                /*location.reload();*/
                layer.close(index);
            }
        });
    })
});

//客户公司tabhead滚动固定
$(function () {
    $(window).on('scroll',function () {
        if($(window).scrollTop() >= 88){

            $('.tabhead').addClass('fixed');
        }else{
            $('.tabhead').removeClass('fixed');
        }
    });
    /* $('.tabheadcons').click(function () {
     $('html, body').animate({scrollTop:0}, 50);
     })*/
});

//用户登录
$(function () {

    $('.loginboxs input').bind('input focus',function () {
        $('.icon-clear').hide();
        var $this = $(this);
        var k = $(this).val();
        if(k!=''){
            $this.next().show();
            $this.next().click(function () {
                $this.val('');
                $(this).hide();
            })
        }else{
            $this.next().hide();
        }
    });
    $('.loginboxs input').bind('blur',function () {
        setTimeout(function()
        {
            $('.icon-clear').hide();
        },250)

    });
});


//公司详情
$(function () {

    $('#underLayer1').hide();
    $('.infocollectHeart').click(function () {
        var $this=$(this);

        if($this.hasClass("fa-heart-o")){
            layer.closeAll();
            layer.open({
                className: 'delPop',
                title: ['选择分组', 'background-color: #fff;'],
                content: '<div class="gzclass">'+'客户公司'+'<i class="fa  info-blue gzgslx fa-square-o">'+'</i>'+'</div>'+'<div class="gzclass">'+'供应商'+'<i class="fa  info-blue gzgslx fa-square-o">'+'</i>'+'</div>'+'<div class="gzclass">'+'竞争对手'+'<i class="fa  info-blue gzgslx fa-square-o">'+'</i>'+'</div>'+'<div class="gzclass">'+'子公司'+'<i class="fa  info-blue gzgslx fa-square-o">'+'</i>'+'</div>'
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    /*location.reload();*/
                    if($('.gzgslx ').hasClass('fa-check-square-o')){
                        $this.removeClass('fa-heart-o').addClass('fa-heart');
                        $this.next().html('已关注');
                        layer.close(index);
                        layer.open({
                            content: '关注成功'
                            ,skin: 'msg'
                            ,time: 1 //1秒后自动关闭
                        });
                    }
                }
            });
            $('.gzgslx ').click(function () {
                $('.gzgslx ').removeClass('fa-check-square-o').addClass('fa-square-o');
                $(this).removeClass('fa-square-o').addClass('fa-check-square-o');

            });
        }else {
            layer.closeAll();
            layer.open({
                className: 'delPop',
                title: ['温馨提示', 'background-color: #fff;'],
                content: '确认取消关注？'
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    /*location.reload();*/
                    $this.removeClass('fa-heart').addClass('fa-heart-o');
                    layer.close(index);
                    $this.next().html('未关注');
                }
            });
        };

    })
});
//日历页面的事件收藏
$(function () {
    $('.followbtn').on('click',function (event) {
        event.stopPropagation();
        var $this = $(this);
        if($this.hasClass('nofollow')){
            $this.removeClass('nofollow');
            $this.find('.followstar').css('color','#fed545');
            $this.find('.followtxt').html('已关注');
            layer.msg('关注成功', {
                time: 700
            });

        }else{
            $this.addClass('nofollow');
            $this.find('.followstar').css('color','#b8b8b8');
            $this.find('.followtxt').html('未关注');
            layer.msg('已取消关注',{
                time:700
            });
        };

    })
    $('.followbtn').mouseover(function () {
        var $this = $(this);
        if($this.hasClass('nofollow')){
            $this.find('.tipsgz').show();
            $this.find('.tipsnogz').hide();
        }else{
            $this.find('.tipsnogz').show();
            $this.find('.tipsgz').hide();
        }
    }).mouseleave(function () {
      $('.followtips').hide();
    })
});

/*首页弹框--项目信息反馈*/
$(function () {
    $('body').on('click','.sz_handle',function () {
        var index = layer.open({
            type: 2,
            content: 'szHandle.html',
            area: ['320px', '195px'],
            maxmin: true
        });
        layer.full(index);

    });
    $('body').on('click','.zyc_handle',function () {
        var index2 = layer.open({
            type: 2,
            content: 'szHandle.html',
            area: ['320px', '195px'],
            maxmin: true
        });
        layer.full(index2);

    });
    $('body').on('click','.xp_handle',function () {
        var index2 = layer.open({
            type: 2,
            content: 'tablepage.html',
            area: ['320px', '195px'],
            maxmin: true
        });
        layer.full(index2);

    });

});
/*首页弹框--项目信息反馈*/
