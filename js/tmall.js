var slide = document.getElementsByClassName("swiper-slide");
var lbd = document.querySelectorAll(".lbd div");
var z = document.querySelector(".swiper-slide")
console.log(lbd);
var num = 0 ;

var t = setInterval(function () {
    num++;
    if (num>slide.length-1) {
        num = 0;
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.opacity=0;
        lbd[i].style.background="#000"
    }
    slide[num].style.opacity=1;
    lbd[num].style.background="white"

    for (let i = 0; i < lbd.length; i++) {
        lbd[i].onclick=function () {
            // clearInterval(t)
            for (let j = 0; j < lbd.length; j++) {
                lbd[j].style.background="#000"
                slide[j].style.opacity=0;
            }
            lbd[i].style.background="white";
            slide[i].style.opacity=1;
            console.log(slide[i]);  
        }
        lbd.onmouseout=function () {
            //   t=setInterval()
              console.log(1);
        }

        
    }


},1000)





var topss = document.getElementById("topss");
var leftk = document.querySelector("#leftk")
var left = document.querySelectorAll("#leftk li");

for (let i = 0; i < left.length; i++) {
    console.log(left[i]);
}
window.onscroll=function () {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop>800) {
        topss.style.height=60+"px";
    }else{
        topss.style.height=0+"px";
    }
    if(document.documentElement.scrollTop<500){
        leftk.style.opacity=0;
        leftk.style.transform="scale(0,0)";
    }else{
        leftk.style.opacity=1;
        leftk.style.transform="scale(1,1)";
    }

    for (var i = 0; i < left.length; i++) {
        if (document.documentElement.scrollTop>=arr[i]&&document.documentElement.scrollTop<=arr[i+1]) {
            for(var j=0;j<left.length;j++){
                left[j].style.background="rgba(0,0,0,.6)";
                console.log(left[j]);
            }
            left[i].style.background=left[i].getAttribute("color");
            console.log(left[i]);
        }
    }
}

var arr= [0,1800,2500,3300,4000,4600,5341,5341,6041];
for (let i = 0; i < left.length; i++) {   
    left[i].onclick=function(){
       document.documentElement.scrollTop=arr[i]
    }
}


var imgz = document.querySelectorAll(".nte2 img");
console.log(imgz);
var imgsrc ="./img/美女.png";
for (let i = 0; i < 4; i++) {
    if (document.documentElement.scrollTop>2800) {
        imgz[i].src=imgsrc;
    }
}
for (let i = 4; i < 12; i++) {
    if (document.documentElement.scrollTop>3300) {
        imgz[i].src=imgsrc;
    }
}
for (let i = 12; i < 20; i++) {
    if (document.documentElement.scrollTop>4000) {
        imgz[i].src=imgsrc;
    }
}
for (let i = 20; i < 28; i++) {
    if (document.documentElement.scrollTop>4000) {
        imgz[i].src=imgsrc;
    }
}
for (let i = 28; i < 36; i++) {
    if (document.documentElement.scrollTop>4600) {
        imgz[i].src=imgsrc;
    }
}
for (let i = 36; i < imgz.length; i++) {
    if (document.documentElement.scrollTop>6000) {
        imgz[i].src=imgsrc;
    }
}


// 4
// 8
// 8
// 8
// 8
// 20