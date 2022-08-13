window.addEventListener('load',function(){
    // // 屏幕自适应窗口
    // var screenWidth=$(window).width();
    // $("#body").css("width",screenWidth);
    
    // 轮播图
    // 动态生成小圆圈
    var big_box1 =  document.getElementsByClassName('big_box1')[0];
    var focus = document.getElementsByClassName('focus')[0];
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    var reBg = focus.querySelector('.reBg');
    var changeBg = focus.querySelector('.changeBg');

    var index = 0;
    var clear = function(){
        for(var i=0; i<ul.children.length; i++){
            ul.children[i].className = '';
            ol.children[i].className = '';
        }
    }
    var go = function(){
        clear();
        ul.children[index].className = 'active';
        ol.children[index].className = 'current';
    }
    //自动播放
    var goNext = function(){
        if(index < ul.children.length-1){
            index++;
        }else {
            index = 0;
        }
        go();
        // 改变背景图片跟背景颜色
        if(index == 1){
            big_box1.style.backgroundImage = "url('images/轮播图22.png')";
        }else if(index == 3){
            big_box1.style.backgroundImage = "url('images/轮播图33.png')";
        }else if(index == 5){
            big_box1.style.backgroundImage = "";
            reBg.style.display = 'none';
            changeBg.style.display = 'block';
        }else{
            big_box1.style.backgroundImage = "url('images/轮播图11.png')";
        }  
        if(index == 5){
            big_box1.style.backgroundColor = "#040431";
        }else{
            big_box1.style.backgroundColor = "#141a24";
        }   
          // 轮播盒子
        if(index == 5){
            reBg.style.display = 'none';
            changeBg.style.display = 'block';
        }else {
            reBg.style.display = 'block';
            changeBg.style.display = 'none';
        }
    }
    for(var i=0; i<ul.children.length; i++){
        // 创建ol的li
        var li = document.createElement('li')
        ol.appendChild(li);

        // 记录小圆圈的索引号（自定义属性）
        li.setAttribute('index',i);

         // 小圆圈排他思想(把这个放到创建li的for循环是因为 要给每个小li加点击事件)
        li.onclick = function(){
            clear();
            this.className = 'current';

            // 拿到小圆圈的索引号
            var pointIndex = this.getAttribute('index');
            index = pointIndex;
            console.log(index);
            go();
            // 改变背景图片跟背景颜色
            if(index == 1){
                big_box1.style.backgroundImage = "url('images/轮播图22.png')";
            }else if(index == 3){
                big_box1.style.backgroundImage = "url('images/轮播图33.png')";
            }else if(index == 5){
                big_box1.style.backgroundImage = "";
            }else{
                big_box1.style.backgroundImage = "url('images/轮播图11.png')";
            }
            if(index == 5){
                big_box1.style.backgroundColor = "#040431";
            }else{
                big_box1.style.backgroundColor = "#141a24";
            }
             // 轮播盒子
        if(index == 5){
            reBg.style.display = 'none';
            changeBg.style.display = 'block';

        }else {
            reBg.style.display = 'block';
            changeBg.style.display = 'none';
        }
        }
    }
    ol.children[0].className = 'current';
    // 自动播放
    focus.addEventListener('mouseenter',function() {
        //当鼠标放在轮播图上就停止自动播放
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave',function() {
        //当鼠标离开轮播图就自动播放 
        timer = setInterval(function() {
      goNext();
  },3000); 
    });
    var timer = setInterval(function() {
        goNext();
    },3000);

// 移动端轮播图
    var big_box11 =  document.getElementsByClassName('big_box11')[0];
    var focus1 = document.getElementsByClassName('focus1')[0];
    var ul1 = focus1.querySelector('ul');
    var ol1 = focus1.querySelector('.circle1');
    var index1 = 0;
    var clear1 = function(){
        for(var i=0; i<ul1.children.length; i++){
            ul1.children[i].className = '';
            ol1.children[i].className = '';
        }
    }
    var go1 = function(){
        clear1();
        ul1.children[index1].className = 'active1';
        ol1.children[index1].className = 'current1';
    }
    var goNext1 = function(){
        if(index1 < ul1.children.length-1){
            index1++;
        }else {
            index1 = 0;
        }
        go1();
        if(index1 == 1){
            big_box11.style.backgroundImage = "url('images/轮播图22.png')";
            big_box11.style.backgroundColor = "#141a24"
        }else if(index1 == 3){
            big_box11.style.backgroundImage = "url('images/轮播图33.png')";
            big_box11.style.backgroundColor = "#141a24"
        }else if(index1 == 5){
            big_box11.style.background = "";
        }else{
            big_box11.style.backgroundImage = "url('images/轮播图11.png')";
            big_box11.style.backgroundColor = "#141a24"
        }
    }
    for(var i=0; i<ul1.children.length; i++){
        // 创建ol的li
        var li = document.createElement('li')
        ol1.appendChild(li);
        li.setAttribute('index1',i);
         // 小圆圈排他思想(把这个放到创建li的for循环是因为 要给每个小li加点击事件)
        li.onclick = function(){
            clear1();
            this.className = 'current1';

            // 拿到小圆圈的索引号
            var pointIndex1 = this.getAttribute('index1');
            index1 = pointIndex1;
            console.log(index1);
            go1();
            if(index1 == 1){
                big_box11.style.backgroundImage = "url('images/轮播图22.png')";
                big_box11.style.backgroundColor = "#141a24"
            }else if(index1 == 3){
                big_box11.style.backgroundImage = "url('images/轮播图33.png')";
                big_box11.style.backgroundColor = "#141a24"
            }else if(index1 == 5){
                big_box11.style.background = "";
            }else{
                big_box11.style.backgroundImage = "url('images/轮播图11.png')";
                big_box11.style.backgroundColor = "#141a24"
            }
        }
    }
    ol1.children[0].className = 'current1';
    ul1.children[0].className = 'active1';
    focus1.addEventListener('mouseenter',function() {
        //当鼠标放在轮播图上就停止自动播放
        clearInterval(timer1);
        timer1 = null;
    });
    focus1.addEventListener('mouseleave',function() {
        //当鼠标离开轮播图就自动播放 
        timer1 = setInterval(function() {
      goNext1();
  },3000); 
    });
    var timer1 = setInterval(function() {
        goNext1();
    },3000);
    
    // 盒子动画效果
    var a = document.querySelector('.a');
    var b = document.querySelector('.b');
    var c = document.querySelector('.c');
    var d = document.querySelector('.d');
    var aa = document.querySelector('.aa');
    console.log(aa);
    a.onmouseover = function(){
        this.children[0].src = 'images/1.gif';
        
    }
    a.onmouseout = function(){
        this.children[0].src = 'images/2.png';
    }
    b.onmouseover = function(){
        this.children[0].src = 'images/3.gif';
    }
    b.onmouseout = function(){
        this.children[0].src = 'images/4.png';
    }
    c.onmouseover = function(){
        this.children[0].src = 'images/5.gif';
    }
    c.onmouseout = function(){
        this.children[0].src = 'images/6.png';
    }
    d.onmouseover = function(){
        this.children[0].src = 'images/7.gif';
    }
    d.onmouseout = function(){
        this.children[0].src = 'images/8.png';
    }
    aa.onmouseover = function(){
        this.children[0].src = 'images/3.gif';
    }
    aa.onmouseout = function(){
        this.children[0].src = 'images/4.png';
    }
   
    // 蓝色盒子
    var blue1 = document.querySelector('.blue1');
    var btn1 = blue1.querySelector('button');
    // console.log(btn);
    btn1.onmousemove = function(){
        this.style.backgroundColor = '#fff';
        this.style.color = '#00a4ff';
    }
    btn1.onmouseout = function(){
        this.style.backgroundColor = '#00a4ff';
        this.style.color = '#fff';
    }
    var blue2 = document.querySelector('.blue2');
    var btn2 = blue2.querySelector('button');
    // console.log(btn);
    btn2.onmousemove = function(){
        this.style.backgroundColor = '#fff';
        this.style.color = '#00a4ff';
    }
    btn2.onmouseout = function(){
        this.style.backgroundColor = '#00a4ff';
        this.style.color = '#fff';
    }
    // 简介分页
    var big_box2 = document.querySelector('.big_box2');
    var left = big_box2.querySelector('.left');
    var right = big_box2.querySelector('.right');
    var btn3 = left.querySelector('button');
    // console.log();
    btn3.onmousemove = function(){
        this.style.backgroundColor = '#fff';
        this.style.color = '#00a4ff';
    }
    btn3.onmouseout = function(){
        this.style.backgroundColor = '#00a4ff';
        this.style.color = '#fff';
    }

    var ulul = right.querySelector('ul');
    var rightli = ulul.querySelectorAll('li');
    var leftli = left.querySelectorAll('li');
    // console.log(rightli)
    var liIndex = 0;
    //左边字体全部清除
    var cleardp = function(){
        for(var i=0;i<leftli.length;i++){
            leftli[i].style.display = 'none';
        }
    }
    for(var i=0; i<rightli.length-1; i++){
        rightli[i].setAttribute('liIndex',i);
        // rightli[i].setAttribute('index',i);
        rightli[i].onclick = function(){
            cleardp();
            var middleIndex = this.getAttribute('liIndex');
            liIndex = middleIndex;
            leftli[liIndex].style.display = 'block';
            if(liIndex == 0||liIndex ==2||liIndex == 4||liIndex == 6||liIndex == 8){
                big_box2.style.backgroundImage = 'url("images/简介.jpg")'
            }else{
                big_box2.style.backgroundImage = 'url("images/大数据.jpg")'
            }
            //右边li的样式全清除，然后给点击加该样式的类名
            for(var i=0; i<rightli.length-1; i++){
                rightli[i].className = '';
            }
            this.className = 'hold';
            // console.log(this);
        }
    }

    //箭头向右滑动
    var bd9 = document.querySelector('.bd9');
    var toRight = document.querySelector('.toRight');
    // console.log(toRight);
    bd9.onmousemove = function(){
        toRight.style.left = '50%';
    }
    bd9.onmouseout = function(){
        toRight.style.left = '35%';
    }
    

       // 移动端简介分页
       var big_box22 = document.querySelector('.big_box22');
       var ul2 = big_box22.querySelector('ul');
       var arr = ul2.children;
    for(var i=0; i<arr.length-1; i++){
        arr[i].setAttribute('index',i);  
        arr[i].onclick = function(){
            var arrIndex = this.getAttribute('index');
            // 找数组的下一个元素，改display
            var nextIndex = Number(arrIndex)+Number(1);
            // console.log(0)
            //会先执行else的内容？？
            if(arr[nextIndex].style.display == "block"){
                // console.log(1);
                arr[nextIndex].style.display = "none";
            }else{
                arr[nextIndex].style.display = "block";
                // console.log(2)
            }
        }
        
    }

    // 云服务分页
      var aaa = document.querySelector('.aaa');
    //   console.log(aaa);
      var btns = aaa.querySelectorAll('li');
      var items =document.querySelectorAll('.item');

      for (var i = 0;i < btns.length; i++) {
          btns[i].setAttribute('index',i)
          btns[i].onclick = function() {
            var index = this.getAttribute('index');
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            } 
            items[index].style.display = 'block';
      }
    }
    var aaa1 = document.querySelector('.aaa1');
    // console.log(aaa);
    var btns1 = aaa1.querySelectorAll('li');
    var items1 =document.querySelectorAll('.item1');

    for (var i = 0;i < btns1.length; i++) {
        btns1[i].setAttribute('index',i)
        btns1[i].onclick = function() {
          var index = this.getAttribute('index');
          for (var i = 0; i < items1.length; i++) {
              btns1[i].className = 'col-xs-4';
              items1[i].style.display = 'none';
          } 
          this.className = 'col-xs-4 pick';
          items1[index].style.display = 'block';
    }
  }

    var bb = document.querySelector('.bb');
    var toRight1 = document.querySelector('.toRight1');
    // console.log(toRight);
    bb.onmousemove = function(){
        toRight1.style.right = '38%';
    }
    bb.onmouseout = function(){
        toRight1.style.right = '35%';
    }

    var bottom11 = document.querySelectorAll('.bottom11');
    var toRight2 = document.querySelectorAll('.toRight2');
    bottom11[0].onmousemove = function(){
        toRight2[0].style.right = '55%';
    }
    bottom11[0].onmouseout = function(){
        toRight2[0].style.right = '50%';
    }
    bottom11[1].onmousemove = function(){
        toRight2[1].style.right = '55%';
    }
    bottom11[1].onmouseout = function(){
        toRight2[1].style.right = '50%';
    }
    bottom11[2].onmousemove = function(){
        toRight2[2].style.right = '55%';
    }
    bottom11[2].onmouseout = function(){
        toRight2[2].style.right = '50%';
    }
    
    // 地图
    var gg = document.querySelector('.gg');
    var dld = document.querySelector('.dld');
    var dls = document.querySelector('.dls');
    var sbl = document.querySelector('.sbl');
    var amstd = document.querySelector('.amstd');
    var jn = document.querySelector('.jn');
    var bj = document.querySelector('.bj');
    var gz = document.querySelector('.gz');
    var xg = document.querySelector('.xg');
    var dj = document.querySelector('.dj');
    var xn = document.querySelector('.xn');
    var con = document.querySelector('.con');
    var place = document.querySelector('.place');
    // console.log(gg.innerText);
    gg.onmouseover = function(){
        con.style.display = 'block';
        place.innerText = this.innerText;
        con.style.top = '19%';
        con.style.left = '6%';
    }
    gg.onmouseout = function(){
        con.style.display = 'none';
    }
    dld.onmouseover = function(){
        con.style.display = 'block';
        place.innerText = this.innerText;
        con.style.top = '14%';
        con.style.left = '17%';
    }
    dld.onmouseout = function(){
        con.style.display = 'none';
    }
    dls.onmouseover = function(){
        con.style.display = 'block';
        place.innerText = this.innerText;
        con.style.top = '25%';
        con.style.left = '14%';
    }
    dls.onmouseout = function(){
        con.style.display = 'none';
    }
    sbl.onmouseover = function(){
        con.style.display = 'block';
        place.innerText = this.innerText;
        con.style.top = '58%';
        con.style.left = '26%';
    }
    sbl.onmouseout = function(){
        con.style.display = 'none';
    }
    amstd.onmouseover = function(){
        con.style.display = 'block';
        place.innerText = this.innerText;
        con.style.top = '5%';
        con.style.left = '44%';
    }
    amstd.onmouseout = function(){
        con.style.display = 'none';
    }
    jn.onmouseover = function(){
        con.style.display = 'block';
        place.innerText = this.innerText;
        con.style.top = '35%';
        con.style.left = '61%';
    }
    jn.onmouseout = function(){
        con.style.display = 'none';
    }
    bj.onmouseover = function(){
        con.style.display = 'block';
        place.innerText = this.innerText;
        con.style.top = '14%';
        con.style.left = '71%';
    }
    bj.onmouseout = function(){
        con.style.display = 'none';
    }
    gz.onmouseover = function(){
        con.style.display = 'block';
        place.innerText = this.innerText;
        con.style.top = '25%';
        con.style.left = '67%';
    }
    gz.onmouseout = function(){
        con.style.display = 'none';
    }
    xg.onmouseover = function(){
        con.style.display = 'block';
        place.innerText = this.innerText;
        con.style.top = '31%';
        con.style.left = '69%';
    }
    xg.onmouseout = function(){
        con.style.display = 'none';
    }
    dj.onmouseover = function(){
        con.style.display = 'block';
        place.innerText = this.innerText;
        con.style.top = '20%';
        con.style.left = '79%';
    }
    dj.onmouseout = function(){
        con.style.display = 'none';
    }
    xn.onmouseover = function(){
        con.style.display = 'block';
        place.innerText = this.innerText;
        con.style.top = '61%';
        con.style.left = '82%';
    }
    xn.onmouseout = function(){
        con.style.display = 'none';
    }

    var bd = document.querySelector('.bottom');
    var toRight3 = document.querySelector('.toRight3');
    bd.onmouseover = function(){
        toRight3.style.right = '-30%';
    }
    bd.onmouseout = function(){
        toRight3.style.right = '-10%';
    }

    var more = document.querySelector('.more');
    var toRight4 = document.querySelector('.toRight4');
    more.onmouseover = function(){
        toRight4.style.right = '-50%';
    }
    more.onmouseout = function(){
        toRight4.style.right = '-25%';
    }

    // 导航栏
    var nav = document.querySelector('.nav');
    var navleft = nav.querySelector('.left');
    var navleftli = navleft.querySelectorAll('li');
    var d1 = document.querySelector('.d1');
    var box1 = document.querySelector('.box1');
    var body = document.querySelector('body');
    // 设置定时器
    var timer3 = setInterval(function() {
    },500);
    var timer4 = setInterval(function() {
    },500);
    //鼠标停留0.5s出现盒子
    d1.onmouseover = function(){
        // 当鼠标经过时先把其他盒子隐藏在显示自己的盒子
        timer3 = setInterval(function() {
            box2.style.display = 'none';
            box1.style.display = 'block';
        },500);
    }
    //鼠标不在li标签和盒子时，盒子才会显示
    d1.onmouseout = function(){
        box1.onmouseover = function(){
            box1.style.display = 'block';
        }
        box1.onmouseout = function(){
            box1.style.display = 'none';
            clearInterval(timer3);
            timer3 = null;
        }
        box1.style.display = 'none';
        clearInterval(timer3);
        timer3 = null;
    }
    //点击显示
    // d1.onclick = function(e){
    //     if(box1.style.display == 'block'){
    //         box1.style.display = 'none';
    //     }else{
    //         box1.style.display = 'block';
    //     }
    //     // 多次点击阻止冒泡
    //     e.stopPropagation();
    // }
    var d2 = document.querySelector('.d2');
    var box2 = document.querySelector('.box2');
    d2.onmouseover = function(){
        timer4 = setInterval(function() {
            box1.style.display = 'none';
            box2.style.display = 'block';
        },500);   
    }
    d2.onmouseout = function(){
        box2.onmouseover = function(){
            box2.style.display = 'block';
        }
        box2.style.display = 'none';
        clearInterval(timer4);
        timer4 = null;
    }
    box2.onmouseout = function(){
        box2.style.display = 'none';
        clearInterval(timer4);
        timer4 = null;
    }
    // d2.onclick = function(e){
    //     if(box2.style.display == 'block'){
    //         box2.style.display = 'none';
    //     }else{
    //         box2.style.display = 'block';
    //     }
    //     e.stopPropagation();
    // }
    // body.onclick = function(e){
    //     box1.style.display = 'none';
    //     box2.style.display = 'none';
    // }

    //选项卡
    var slt = document.querySelectorAll('.slt');
    var rightSlt = box1.querySelectorAll('.right');
    // console.log(rightSlt);
    // console.log(slt)
    for(var i=0; i<slt.length; i++){
        slt[i].setAttribute('index',i);
        slt[i].onclick = function(){
            var sltIndex = this.getAttribute('index');
            for(var i=0; i<slt.length; i++){
                slt[i].className = 'slt';
                rightSlt[i].style.display = 'none';
            }
            this.className = 'slt lucky';
            rightSlt[sltIndex].style.display = 'block';
            console.log(rightSlt[sltIndex])
        }
    }
    

    // 移动端导航栏
    var nav1 = document.querySelector('.nav1');
    var one = nav1.querySelector('.one');
    var cd = nav1.querySelector('.cd');
    var ss = nav1.querySelector('.ss');
    var ssBox = nav1.querySelector('.ssBox');
    var two = nav1.querySelector('.two');
    var left_cd = document.querySelector('.left_cd');
    cd.onclick = function(){
        one.style.display = 'none';
        two.style.display = 'block';
        // two.style.transform = 'rotateY(90deg)';
        left_cd.style.display = 'block';
    }
    two.onclick = function(){
        one.style.display = 'block';
        two.style.display = 'none';
        if(ssBox.style.display == 'block'){
            ssBox.style.display = 'none';
        }
        if(left_cd.style.display == 'block'){
            left_cd.style.display = 'none';
        }
    }
    ss.onclick = function(){
        one.style.display = 'none';
        two.style.display = 'block';
        ssBox.style.display = 'block';
    }
//    移动端侧边栏
    var left_cd = document.querySelector('.left_cd');
    var drop2 = left_cd.querySelectorAll('.drop2');
    var drop1 = left_cd.querySelectorAll('.drop1');
    var dropdown2 = left_cd.querySelectorAll('.dropdown2');
    var dropdown = left_cd.querySelectorAll('.dropdown');
    var changeImg2 = document.querySelectorAll('.changeImg2');
    var changeImg1 = document.querySelectorAll('.changeImg1');
    //第一层
    for(var i=0; i<dropdown.length; i++){
        drop1[i].setAttribute('index',i); 
        dropdown[i].setAttribute('index',i); 
        changeImg1[i].setAttribute('index',i); 
        dropdown[i].onclick = function(e){
            console.log(111);
            var dropdownIndex = this.getAttribute('index'); 
            var drop1Index = this.getAttribute('index'); 
            var changeImg1Index = this.getAttribute('index'); 
            if(drop1[drop1Index].style.display == 'block'){
                console.log(222);
                drop1[drop1Index].style.display = 'none';
                dropdown[dropdownIndex].style.color = '#fff';                
                changeImg1[changeImg1Index].src = 'image/tonext.png';
            }else{
                console.log(333);                
                drop1[drop1Index].style.display = 'block';
                dropdown[dropdownIndex].style.color = '#0098ff';
                changeImg1[changeImg1Index].src = 'image/topre.png';
            }
            e.stopPropagation();
        }
    }
    //第二层
    for(var i=0; i<dropdown2.length; i++){
        drop2[i].setAttribute('index',i); 
        dropdown2[i].setAttribute('index',i); 
        changeImg2[i].setAttribute('index',i); 
        dropdown2[i].onclick = function(e){
            console.log(111);
            var dropdown2Index = this.getAttribute('index'); 
            var drop2Index = this.getAttribute('index'); 
            var changeImg2Index = this.getAttribute('index'); 
            if(drop2[drop2Index].style.display == 'block'){
                console.log(222);
                drop2[drop2Index].style.display = 'none';
                dropdown2[dropdown2Index].style.color = '#fff';                
                changeImg2[changeImg2Index].src = 'image/tonext.png';
            }else{
                console.log(333);                
                drop2[drop2Index].style.display = 'block';
                dropdown2[dropdown2Index].style.color = '#0098ff';
                changeImg2[changeImg2Index].src = 'image/topre.png';
            }
            e.stopPropagation();
        }
    }
    // 返回顶部按钮
    var btnTop = document.querySelector("#btnTop");
    //返回值是一个包含width、height、top、right、bottom、left、x、y的对象
    // var rect = btnTop.getBoundingClientRect();
    // console.log(rect);
    window.onscroll = function() {
        scrollFunction();
    }
             
    function scrollFunction() {
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1200) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    }
    btnTop.addEventListener('click',function(){
        window.scroll(0 , 0);
    })

})