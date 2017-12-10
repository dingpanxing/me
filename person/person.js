function adpic(){
    var speed=40;
    var slide=document.getElementById("vip_ad");
    var slide2=document.getElementById("slide2");
    var slide1=document.getElementById("slide1");
    slide2.innerHTML=slide1.innerHTML
    function Marquee(){
        if(slide2.offsetTop-slide.scrollTop<=0)
            slide.scrollTop-=slide1.offsetHeight
        else{
            slide.scrollTop++
        }
    }
    setInterval(Marquee,speed);
}