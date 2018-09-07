


    var listdata = {
        "list": [{
            value: "1",
            key: "公告",
            suggest: "公告|gonggao|gg"
        }, {
            value: "2",
            key: "新闻",
            suggest: "新闻|xinwen|xw"
        }, {
            value: "3",
            key: "舆情",
            suggest: "舆情|yuqing|yq"
        }, {
            value: "4",
            key: "研报",
            suggest: "研报|yanbao|yb"
        }, {
            value: "5",
            key: "个人笔记",
            suggest: "个人笔记|gerenbiji|grbj"
        }, {
            value: "6",
            key: "主题概念",
            suggest: "主题概念|zhutigainian|ztgn"
        }, {
            value: "7",
            key: "公司主营内容",
            suggest: "公司主营内容|gongsizhuyingneirong|gszynr"
        }, {
            value: "8",
            key: "公司并购案例",
            suggest: "公司并购案例|gongsibinggouanli|gsbgal"
        }]
    };


/*日期*/

      var dateSkin = "skyblue";

      function initComplete() {
          /*下拉框*/
          $("#suggestion3").data("data",listdata);
          $("#suggestion3").render();
          //获取当前主题风格，用于设置日期控件的皮肤
          try {
              dateSkin = themeColor;
          } catch(e) {}

          //自定义点击触发日期控件
          document.getElementById('beginTime').onfocus = function() {
              var endtimeTf = $dp.$('endTime');
              WdatePicker({
                  skin: dateSkin,
                  onpicked: function() {
                      endtimeTf.focus();
                  },
                  maxDate: '#F{$dp.$D(\'endTime\')}'
              });
          }
          document.getElementById('endTime').onfocus = function() {
              //这里设置了最大日期为当前日期，如果不需要则把maxDate:'%y-%M-%d'去掉
              WdatePicker({
                  skin: dateSkin,
                  minDate: '#F{$dp.$D(\'beginTime\')}'
              });
          }

          //平面显示
          WdatePicker({
              skin: dateSkin,
              eCont: 'div1',
              onpicked: function(dp) {
                  top.Toast("showNoticeToast", '你选择的日期是:' + dp.cal.getDateStr())
              }
          })

          document.getElementById('date-11').onfocus = function() {
              WdatePicker({
                  skin: dateSkin,
                  maxDate: '%y-%M-%d'
              });
          }
      }

      //动态生成
      function createDate() {
          var $date = $('<br/><br/><input type="text" class="date" style="width:250px;" dateFmt="yyyy-MM-dd HH:mm:ss"/>');
          $("#testBtn").after($date);
          $date.render();
      }

      //设为不可用
      function disableSelect() {
          $("#date-8").attr("disabled", true);
      }
      //设为可用
      function enableSelect() {
          $("#date-8").attr("disabled", false);
      }

      //动态赋值
      function setValue() {
          $("#date-7").val("2012-07-08");
      }


/*热点主题下拉*/
$(function () {
    $('.slideico').click(function () {
        var ifa = $(this).find('.fa');
        var ztcons = $(this).parent('.zttit').siblings('.ztcons');
        if( ifa.hasClass('fa-minus-square')){
            ifa.removeClass('fa-minus-square').addClass('fa-plus-square');
            ztcons.slideUp();

        }else{
            ifa.removeClass('fa-plus-square').addClass('fa-minus-square');
            ztcons.slideDown()
        }
    })
})
/*end热点主题下拉*/

/*定期财务报表左右收缩展开*/
$(function () {
    $('.contrbtn').click(function () {
        if($('.doubleselect').is(":hidden")){
            $('.doubleselect').show();
            $(this).find('.fa').removeClass('fa-angle-double-right').addClass('fa-angle-double-left')
        }else{
            $('.doubleselect').hide();
            $(this).find('.fa').removeClass('fa-angle-double-left').addClass('fa-angle-double-right')
        }
    })
})
/*end 定期财务报表左右收缩展开*/

/*热点主题设置 菜单展开收起*/
$(function () {
    $('.lmlistbox').mouseenter(function () {
        timer = setTimeout(function () {
            $('.lmlistboxsonhide').slideDown();
        },100)

    }).mouseleave(function () {
       clearTimeout(timer);
        $('.lmlistboxsonhide').slideUp()
    })
})

/*热点主题设置 菜单展开收起*/

/*搜索结果*/
$(function () {
    $('.tjzkbtn').click(function () {
        $('.hide_sx').toggleClass('hide');
        $(this).toggleClass('blue');
        if($(this).hasClass('blue')){
            $(this).find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
            $(this).find('.sx_txt').text('收起筛选条件');
        }else{
            $(this).find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
            $(this).find('.sx_txt').text('展开筛选条件');
        }

    })
})
/*end 搜索结果*/

$(function () {
    /*排序方式选择*/
    $(".deep-search-value").click(function(){
       $(this).siblings(".deep-search-select-types").toggleClass("show");
    });
    $(".deep-search-select-types .deep-search-select-lists").click(function(){
        $(this).closest(".deep-search-select-types").removeClass("show");
        var oldValue=$(this).html();
        $(this).closest(".deep-search-select-types").siblings(".deep-search-value").html(oldValue+' <span class="fa fa-angle-down"></span>');
    });
    $(document).bind("click",function(e){
        var target = $(e.target);
        if(target.closest(".deep-search-value").length == 0&&target.closest(".deep-search-select-types").length == 0){
            $('.deep-search-select-types').removeClass('show')
        };
    })
    /*end 排序方式选择*/
    /*关注公司 */
    $('.gz_company').click(function () {
        var $this = $(this);
        if($(this).hasClass('fa-heart-o')){
            $(this).addClass('fa-heart').removeClass('fa-heart-o');
            $(this).siblings('.txt_gray').text('（已关注）')
            layer.msg('关注成功',{
                time:700
            });
        }else{
            layer.open({
                className: 'delPop',
                title: ['温馨提示', 'background-color: #fff;'],
                content: '确认取消关注？'
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    /*location.reload();*/
                    $this.removeClass('fa-heart').addClass('fa-heart-o');
                    layer.close(index);
                    $this.next().text('（未关注）');
                    layer.msg('已取消关注',{
                        time:700
                    });
                }
            });
        }
    })
    /*end 关注公司 */
})


$(function () {
    /*添加附件*/
    var newfj = '<div class="clearfix xgfj">'+
        '<input type="file" style="width: 187px" class="fl newfile">'+
        '<span class="fa fa-close fl delfj"></span>'+
        '<span class="fa fa-plus-square-o fl addfj"></span>'+
        '</div>'
    $('.fjtdbox').on('click','.addfj',function () {
        $('.fjtdbox').append(newfj)
    });
    $('.fjtdbox').on('click','.delfj',function () {
        $(this).closest('.xgfj').hide()
    });
    $('.addlxr').on('click',function () {
        layer.prompt(function(val, index){
            layer.msg('得到了'+val);
            layer.close(index);
        });
    })
    /*end 添加附件*/

    /*添加回访记录显示*/
    $(".addrec").click(function () {

        if($(".addrecbox").is(":hidden")){
            $(".addrecbox").slideDown();
            $(this).val("添加回访记录收起")
        }else{
            $(".addrecbox").slideUp();
            $(this).val("添加回访记录")
        }

    })
    /*添加回访记录显示end*/
    $(".clearalltxta").click(function () {
        $(".addrecbox textarea").val("")
    })
});
$(function () {
    var testData={"form.paginate.pageNo":1,"form.paginate.totalRows":13,"rows":[
        {"name":"公司名称1","province":"安徽省","city":"合肥市","creatpeople":"王兰军","creatdate":"2012-06-13 00:00:00.0","editedate":"2012-06-13 00:00:00.0","deptId":11},
        {"name":"公司名称2","province":"安徽省","city":"合肥市","creatpeople":"王兰军","creatdate":"2012-06-13 00:00:00.0","editedate":"2012-06-13 00:00:00.0","deptId":12}
    ]};
    var testData2={"form.paginate.pageNo":1,"form.paginate.totalRows":13,"rows":[
        {"name":"公司名称1","province":"安徽省","city":"合肥市","creatpeople":"王兰军","creatdate":"2012-06-13 00:00:00.0","editedate":"2012-06-13 00:00:00.0","deptId":11},
        {"name":"公司名称2","province":"安徽省","city":"合肥市","creatpeople":"王兰军","creatdate":"2012-06-13 00:00:00.0","editedate":"2012-06-13 00:00:00.0","deptId":12}
    ]};

    //数据表格使用
    var g;
    var g2;
    function initComplete(){
        g = $("#maingrid").quiGrid({
            columns: [
                { display: '公司名称', name: 'name', align: 'center',  width: "15%"},
                { display: '所在省份', name: 'province', align: 'center' , width: "15%"},
                { display: '所在城市', name: 'city',  align: 'center' , width: "15%"},
                { display: '创建人', name: 'creatpeople',  align: 'center', width: "15%" },
                { display: '创建日期', name: 'creatdate',  align: 'center', width: "20%" },
                { display: '修改日期', name: 'editedate',  align: 'center', width: "20%" },
                { display: '操作', isAllowHide: false, align: 'left', width: 130,
                    render: function (rowdata, rowindex, value, column){
                        return '<div class="grid_opp_container">'
                            + '<span class="grid_opp_view" onclick="ipotable()">查看</span>'
                            + '<span class="grid_opp_delete" onclick="">删除</span>'
                            + '</div>';
                    }
                }
            ], data:testData, pageSize: 20, rownumbers:true, checkbox:true,percentWidthMode:true,
            height: '100%', width:"100%"
        });
        g2 = $("#maingrid2").quiGrid({
            columns: [
                { display: '公司名称', name: 'name', align: 'center',  width: "15%"},
                { display: '所在省份', name: 'province', align: 'center' , width: "15%"},
                { display: '所在城市', name: 'city',  align: 'center' , width: "15%"},
                { display: '创建人', name: 'creatpeople',  align: 'center', width: "15%" },
                { display: '创建日期', name: 'creatdate',  align: 'center', width: "20%" },
                { display: '修改日期', name: 'editedate',  align: 'center', width: "20%" },
                { display: '操作', isAllowHide: false, align: 'left', width: 130,
                    render: function (rowdata, rowindex, value, column){
                        return '<div class="grid_opp_container">'
                            + '<span class="grid_opp_view" onclick="ipotable()">查看</span>'
                            + '<span class="grid_opp_delete" onclick="">删除</span>'
                            + '</div>';
                    }
                }
            ], data:testData2, pageSize: 20, rownumbers:true, checkbox:true,percentWidthMode:true,
            height: '100%', width:"100%"
        });


    }
    function onView(rowid){
        top.Toast("showNoticeToast", "选择的记录Id是:" + rowid );
    }

    function onEdit(rowid){
        top.Toast("showNoticeToast", "修改的记录Id是:" + rowid );
        // for (var record in g.records){
        //   if(g.records[record]['id']==rowid){
        //     top.Toast("showNoticeToast", JSON.stringify(g.records[record]));
        //   }
        // }
    }

    function onDelete(rowid,rowidx){
        top.Toast("showNoticeToast", "删除的记录Id是:" + rowid );
    }
})

