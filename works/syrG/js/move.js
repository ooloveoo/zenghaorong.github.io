//  #main{
//     position: relative;
// }
// .moveBox{
//     position: relative;
//     overflow: hidden;
//     transition: all 0.2s ease;
//     -webkit-transition: all 0.2s ease;
// }
// .move-item{
//     border-bottom: 1px solid #ddd;
//     background-color: #fff;
//     height: 50px;
//     transition: all 0.2s ease;
//     -webkit-transition:all 0.2s ease;
// }
// .moveBox button{
//     color: #fff;
//     background-color: red;
//     border:none;
//     outline: none;
//     height: 50px;
//     width: 80px;
//     color: #fff;
//     position: absolute;
//     right: 0;
//     top: 0;
    
//     border-bottom: 1px solid #ddd;
//     z-index: -1;
// }

 // <div id="main">
         
 //            <div class="moveBox">
 //                <div class="move-item">这是一组数据</div>
 //                <button class="del-btn">删除</button>
 //            </div>
 //            <div class="moveBox">
 //                <div class="move-item">这是一组数据</div>
 //                <button class="del-btn">删除</button>
 //            </div>
 //            <div class="moveBox">
 //                <div class="move-item">这是一组数据</div>
 //                <button  class="del-btn">删除</button>
 //            </div>
 //            <div class="moveBox">
 //                <div class="move-item">这是一组数据</div>
 //                <button class="del-btn">删除</button>
 //            </div>
 //            <div class="moveBox">
 //                <div class="move-item">这是一组数据</div>
 //                <button class="del-btn">删除</button>
 //            </div>
 //        </div>

$(function() {
            

    var rt = 80;

    	var move=$('.move-item');
    touch.on('.move-item', 'touchstart', function(ev) {
        ev.preventDefault();
    });

    //向右滑动
    touch.on('.move-item', 'swiperight', function(ev) {
        this.style.webkitTransform = "translateX(0)";
    });

    //向左滑动
    touch.on('.move-item', 'swipeleft', function(ev) {
    	var that=this;
    	$(move).each(function(){
    		if($(this)[0]==that){
    			$(this)[0].style.webkitTransform = "translateX(-"+rt+"px)";
    		}else{
    			$(this)[0].style.webkitTransform = "translateX(0)";
    		}
    	});
       
    });
});