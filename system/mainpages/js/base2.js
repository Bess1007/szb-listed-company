

//换肤所需公共代码

$(function () {

//动态加载 CSS 文件
    var skinT = localStorage.getItem('keya');//接收从main.html传过来的keya的
    var dynamicLoading = {
        css: function(path){
            if(!path || path.length === 0){
                throw new Error('argument "path" is required !');
            }
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.href = path;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            head.appendChild(link);
        },
        js: function(path){
            if(!path || path.length === 0){
                throw new Error('argument "path" is required !');
            }
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.src = path;
            script.type = 'text/javascript';
            head.appendChild(script);
        }
    };
    if(skinT == 0){
        dynamicLoading.css("css/szRed.css");
    }else{
        dynamicLoading.css("css/szBlue.css");
    }

})
