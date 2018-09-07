/*资讯页面的一些js*/
$(function () {
    $(window).on('scroll',function() {
        var $scroll = $(this).scrollTop();
        if($scroll>560){
            $('.backtop').show();
        }else{
            $('.backtop').hide();
        }
    });
    //回到顶部
    $('.backtop').on('click',function(){
        $('html,body').animate({//$('html,body')兼容问题body属于chrome
            scrollTop:0
        })
    });

    // tab切换
    $('.ainfotabs span').click(function () {
        var $this = $(this);
        var num = $this.index();
        $this.addClass('active').siblings().removeClass('active');
        $('.ainfocons .infocon').eq(num).addClass('active').siblings().removeClass('active')
    })
})
/*资讯页面的一些js*/


/*搜索框显示隐藏*/

 $(function () {
     $('.zxsearchlogo').click(function () {
         if ($('.searchboxdiv').is(":hidden")){
             $('.searchboxdiv').show();
         }else{
             $('.searchboxdiv').fadeOut();
         }

     });
     $('.hideselectbox').click(function () {
         $('.searchboxdiv').fadeOut();

     })
 });

/*end 搜索框显示隐藏*/

/*栏目定制*/
$(function () {
    $('.morelmbtn').click(function () {
        if ($('.dzlmbox').is(":hidden")){
            $('.dzlmbox').show();

        }else{
            $('.dzlmbox').fadeOut();
        }

    });
    $('.editbtn').click(function () {
        $('.dzlmboxin1').find('.fa-minus-square').show();
        $('.dzlmboxin2').find('.fa-plus-square').show();
    });
    $('.savebtn').click(function () {
        $('.dzlmbox').fadeOut();
        $('.fa-minus-square').hide();
        $('.fa-plus-square').hide();
    });
    $(document).bind("click",function(e){
        var target = $(e.target);
        if(target.closest(".dzlmbox").length == 0&&target.closest(".morelmbtn").length ==0 ){
            $('.dzlmbox').fadeOut()
        };
        if(target.closest(".zxsearchlogo").length == 0&&target.closest(".searchboxdiv").length ==0 ){
            $('.searchboxdiv').fadeOut()
        };
        if(target.closest(".px_box").length == 0 ){
            $('.px_box').fadeOut()
        };
    })
});
//8-29新增
$(function () {
    /* class:btnactived*/
    $('.btnactived').addClass('button button-glow button-rounded button-primary-flat');
    /*tab切换*/
    $(".mytab_tit").on("click",".timeSel",function () {
        var index =$(this).index();
        $(this).addClass("actived").siblings(".timeSel").removeClass("actived");
        $(".mytab_cons").eq(index).show().siblings(".mytab_cons").hide()
    });

    $(".mytabTit_li").on("click",function () {
        var index =$(this).index();
        $(this).addClass("actived").siblings(".mytabTit_li").removeClass("actived");
        $(".mytabCon_li").eq(index).show().siblings(".mytabCon_li ").hide()
    })
    /*收起*/
    $(".packup").on("click",function () {
        var $this =$(this);
        if($this.hasClass("fa-angle-up")){
            $this.removeClass("fa-angle-up").addClass("fa-angle-down");
            $this.siblings(".actList_ul").hide();
            $this.find('i').text('展开');
        }else{
            $this.removeClass("fa-angle-down").addClass("fa-angle-up");
            $this.siblings(".actList_ul ").show();
            $this.find('i').text('收起');
        }
    })
});

//首页轮播图
$(function () {
    /*轮播图*/
    var bannerlen = $('.bannerImg li').length;
    var timer_=null;
    $(".banner").mouseenter(function () {
        $(".arrows").fadeIn();
        clearInterval(timer_);
    }).mouseleave(function () {
        $(".arrows").fadeOut();
        timer_=setInterval(function () {
            num++;
            num=num>(bannerlen-1)?0:num;
            $(".bannerImg li").eq(num).fadeIn();
            $(".bannerImg li").eq(num-1).fadeOut();
            $(".circles li").eq(num).addClass("current").siblings("li").removeClass("current");
            $(".bannerImg li").eq(num).addClass("current").fadeIn().siblings(".bannerImg li").removeClass("current");
        },2000)
    });
    var num=0;
    $(".Larr").click(function () {
        $(".bannerImg li").eq(num).fadeOut();
        num--;
        num=num<0?(bannerlen-1):num;
        $(".bannerImg li").eq(num).fadeIn();
        $(".circles li").eq(num).addClass("current").siblings("li").removeClass("current");
        $(".bannerImg li").eq(num).addClass("current").fadeIn().siblings(".bannerImg li").removeClass("current");
    }) ;
    $(".Rarr").click(function () {
        num++;
        num=num>(bannerlen-1)?0:num;
        $(".bannerImg li").eq(num).fadeIn();
        $(".bannerImg li").eq(num-1).fadeOut();
        $(".circles li").eq(num).addClass("current").siblings("li").removeClass("current");
        $(".bannerImg li").eq(num).addClass("current").fadeIn().siblings(".bannerImg li").removeClass("current");
    });


    timer_=setInterval(function () {
        num++;
        num=num>(bannerlen-1)?0:num;

        $(".bannerImg li").eq(num).fadeIn();
        $(".bannerImg li").eq(num-1).fadeOut();
        $(".circles li").eq(num).addClass("current").siblings("li").removeClass("current");
        $(".bannerImg li").eq(num).addClass("current").fadeIn().siblings(".bannerImg li").removeClass("current");
    },3000);
    $('body').on('click','.circles li',function () {
        num=$(this).index();
        $(this).addClass("current").siblings("li").removeClass("current");
        $(".bannerImg li").eq(num).fadeIn().siblings().fadeOut();
        $(".bannerImg li").eq(num).addClass("current").fadeIn().siblings(".bannerImg li").removeClass("current");
    })

    /*轮播图end*/


   setInterval(function () {
       $('.bannerImg').height($('.bannerImg li.current').height())//让bannerImg这个盒子根据图片的高度来自适应
    },100);
    /*小圆点动态显示*/
    console.log('bannerLen'+bannerlen);
    for(var i=0;i<bannerlen;i++){
        var circleLis = null;
        if(i == 0){
            circleLis = '<li class="current"></li>'
        }else {
            circleLis = '<li></li>'
        }
        $('.circles').append(circleLis)
    }
});

/********12-8新增筛选功能*********/
$(function () {
    $('.optionBox').on('click','.optionLis .openSonBox',function (e) {/*鼠标移入含子选项的optionLis，子选项展开*/
        e.stopPropagation();

        if( $(this).siblings('.sonNodeBox').is(":hidden")){
            $(this).css("transform", "rotate(180deg)");
        }else{
            $(this).css("transform", "rotate(360deg)");
        }
        $(this).siblings('.sonNodeBox').toggle(200);
    });
    $(".optionBox").on('click','.optionLis',function (e) {/*点击可选项*/
        e.stopPropagation();
        if($(this).hasClass('actived') ==false ){
            var indexVal = $(this).attr('id');
            var innerTxt = $(this).children('a').text();
            var selectRsLis = '<li class="selectRsLis" value="'+indexVal+'" title="'+innerTxt+'"><a class="selInnerTxt">'+innerTxt+'</a><span class="fa fa-close closeOptionBtn"></span></li>';
            $('.selectRsBox').append(selectRsLis);
            $(this).addClass('actived');
        }
    })

    $('.selectRsBox').on('click','.selectRsLis .closeOptionBtn',function () {/*点击已选元素的删除按钮*/
        var selindexVal = $(this).closest('.selectRsLis').attr('value');
        $('.optionBox').find('#'+selindexVal+'').removeClass('actived');
            $(this).closest('.selectRsLis').remove();
    })
})




