var slide = document.getElementsByClassName("swiper-slide");
var lbd = document.querySelectorAll(".lbd div");
var z = document.querySelector(".swiper-container")
console.log(z);
var num = 0 ;

function move () {
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
        lbd[i].onmouseover=function (){
            setTimeout(function () {
                for (let j = 0; j < lbd.length; j++) {
                    lbd[j].style.background="#000"
                    slide[j].style.opacity=0;
                }
                lbd[i].style.background="white";
                slide[i].style.opacity=1;
            },800)

        }
    }   
}
var t = setInterval(move,1000)

z.onmouseout=function () {
    t = setInterval(move,1000);
}
z.onmouseover=function(){
    clearInterval(t)
}




var topss = document.getElementById("topss");
var leftk = document.querySelector("#leftk")
var left = document.querySelectorAll("#leftk li");

// for (let i = 0; i < left.length; i++) {
//     console.log(left[i]);
// }
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
                // console.log(left[j]);
            }
            left[i].style.background=left[i].getAttribute("color");
            // console.log(left[i]);
        }
    }
//1192  1892 2592 3392 4092   4792 5392
    for (let i = 0; i < 4; i++) {
        if (!imgz[i].flag) {
        if (document.documentElement.scrollTop>1192) {
            imgz[i].src=imgsrc;
            imgz[i].flag=true;
        }
    }
    }
    for (let i = 4; i < 12; i++) {
        if (!imgz[i].flag) {
        if (document.documentElement.scrollTop>1892) {
            imgz[i].src=imgsrc;
        }
    }
    }
    for (let i = 12; i < 20; i++) {
        if (!imgz[i].flag) {
        if (document.documentElement.scrollTop>2592) {
            imgz[i].src=imgsrc;
        }
    }
    }
    for (let i = 20; i < 28; i++) {
        if (!imgz[i].flag) {
        if (document.documentElement.scrollTop>3392) {
            imgz[i].src=imgsrc;
        }
    }
    }
    for (let i = 28; i < 36; i++) {
        if (!imgz[i].flag) {
        if (document.documentElement.scrollTop>4792) {
            imgz[i].src=imgsrc;
        }
    }
    }
    for (let i = 36; i < imgz.length; i++) {
        if (!imgz[i].flag) {
        if (document.documentElement.scrollTop>5392) {
            imgz[i].src=imgsrc;
        }
    }
    }
      

}

var arr= [0,1800,2500,3300,4000,4600,5341,5341,6041];
for (let i = 0; i < left.length; i++) {   
    left[i].onclick=function(){
    //    document.documentElement.scrollTop=arr[i];
    if (animate) {
        animate(document.documentElement,{scrollTop:arr[i]},1000,Tween.Linear);
    }else{
        return
    }
    }
}


var imgz = document.querySelectorAll(".nte2 img");
// console.log(imgz);
var imgsrc ="./img/包包.jpg";



var bigtop = document.querySelectorAll(".bigtop .tab-title")
var bigtopzi2 = document.querySelector(".positi2")
var bigtopzi = document.querySelector(".positi")
var c= [bigtopzi,bigtopzi2]
var n= 0;
console.log(bigtop[1]);


var ss= setInterval(function () {
    n++
    if (n>bigtop.length-1) {
        n=0
    }
    for (let i = 0; i < bigtop.length; i++) {
        bigtop[i].style.background="#fff";   
        c[i].style.display="none"
    }
    bigtop[n].style.background="#00B262";
    c[n].style.display="block"
} ,1000)

for (let i = 0; i < bigtop.length; i++) {
    bigtop[i].onmouseover=function(){
        clearInterval(ss);
        for (let i = 0; i < bigtop.length; i++) {
            bigtop[i].style.background="#fff";   
            c[i].style.display="none"
        }
        c[i].style.display="block"
        bigtop[i].style.background="#00B262";
    }

    bigtop[i].onmouseout=function(){
        ss=setInterval(function () {
            n++
            if (n>bigtop.length-1) {
                n=0
            }
            for (let i = 0; i < bigtop.length; i++) {
                bigtop[i].style.background="#fff";   
                c[i].style.display="none"
            }
            bigtop[n].style.background="#00B262";
            c[n].style.display="block"
        } ,1000)
    }
       
    
}
