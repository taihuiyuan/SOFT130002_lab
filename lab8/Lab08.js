
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

/*Global Variable Area */
const box = document.getElementById("container");
const ulObj = box.children[0];
const list = ulObj.children;
const olObj = box.children[1];
const list2 = olObj.children;
const imgWidth = box.offsetWidth;
const right = document.getElementById("arrow_right");
const left = document.getElementById("arrow_left");
let pic = 0;

/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
right.onclick = onmouseclickHandle;
function onmouseclickHandle() {
    if (pic === list.length - 1) {
        pic = 0;//先设置pic=0
        ulObj.style.left = 0 + "px";//把ul的位置还原成开始的默认位置
    }
    pic++;//立刻设置pic加1,那么此时用户就会看到第二个图片了
    animate(ulObj, -pic * imgWidth);
    if (pic === list.length) {
        //第五个按钮颜色干掉
        list2[list2.length - 1].className = "";
        //第一个按钮颜色设置上
        list2[0].className = "on";
    } else {
        //干掉所有的小按钮的背景颜色
        for (let i = 0; i < list2.length; i++) {
            list2[i].removeAttribute("class");
        }
        list2[pic - 1].className = "on";
    }
}
left.onclick = function () {
    if (pic === 0){
        pic=list.length-1;
        ulObj.style.left=-pic*imgWidth+"px";
    }
    pic--;
    animate(ulObj,-pic*imgWidth);
    if (pic === 0) {
        //第一个按钮颜色干掉
        list2[0].className = "";
        //第五个按钮颜色设置上
        list2[list2.length - 1].className = "on";
    } else {
        //干掉所有的小按钮的背景颜色
        for (let i = 0; i < list2.length; i++) {
            list2[i].removeAttribute("class");
        }
        list2[pic - 1].className = "on";
    }
};
function animate(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        let current = element.offsetLeft;
        //每次移动的距离
        let step = 10;
        step = current < target ? step : -step;
        //当前移动到位置
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //清理定时器
            clearInterval(element.timeId);
            //直接到达目标
            element.style.left = target + "px";
        }
    }, 10);
}

/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
let timeId = setInterval(onmouseclickHandle, 2000);
box.onmouseover=function () {
    clearInterval(timeId);
};
box.onmouseout=function () {
    clearInterval(timeId);
    timeId=setInterval(onmouseclickHandle,2000);
};

/*********************************************end*************************************/


/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
for(let i=0; i<list2.length; i++){
    //为按钮注册mouseover事件
    list2[i].onmouseover = function () {
        //先清除所有按钮的样式
        for (let j=0; j<list2.length; j++){
            list2[j].removeAttribute("class");
        }
        this.className="on";
        pic=i+1;
        animate(ulObj,-pic*imgWidth);
    }
}
//设置第一个的背景颜色
list2[0].className = "on";

/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
//绑定表格单元格的点击事件
$("td").on("click", function(event){
    const $td = $(this);
    // 如果td中已经有文本框了，就不处理这个事件了
    const $input = $td.find("input");
    if($input.length > 0){
        return false;
    }
    // 如果td中没有文本框，就获取值，添加文本框
    const val = $td.text();
    $td.html("<input type='text' value='" + val + "'/>");
    $td.find("input").focus();
    //失去焦点，input改为原来的
    $td.find("input").blur(function () {
        const $input = $(this);
        const $td = $input.parent("td");
        $td.text($input.val());
    });
    setCaretPosition($("input"),0);
    // 阻止事件冒泡
    event.stopPropagation();
});

//定位光标
function setCaretPosition(ctrl, pos){
    ctrl.focus();
    ctrl.setSelectionRange(pos,pos);
}


/*********************************************end*************************************/