let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");
menu.onclick=function(){
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("show");
}

let allLinks=document.querySelectorAll(".navbar a");

allLinks.forEach((e)=>{
    e.onclick=function(){
        allLinks.forEach((e)=>e.classList.remove("active"))
        e.classList.add("active");
        //Remove class Show from NavBar
        navbar.classList.remove("show");
        menu.classList.remove("fa-times");
    }
})






//Start Home Sections
let allSliderCou=document.querySelectorAll(".slider-container");
let index=0;

function next(){
    allSliderCou[index].classList.remove("visible");
    index=(index+1)%allSliderCou.length;
    allSliderCou[index].classList.add("visible");
}
function prev(){
    allSliderCou[index].classList.remove("visible");
    index=(index+1)%allSliderCou.length;
    allSliderCou[index].classList.add("visible");
}
//End Home Sections

//Start featured Sections
let imgesSmall1=document.querySelectorAll('.small-img .small-img-1');
let bigImge1=document.querySelector(".big-img .big-img-1");
imgeClick(imgesSmall1,bigImge1);

let imgesSmall2=document.querySelectorAll('.small-img .small-img-2');
let bigImge2=document.querySelector(".big-img .big-img-2");
imgeClick(imgesSmall2,bigImge2);

let imgesSmall3=document.querySelectorAll('.small-img .small-img-3');
let bigImge3=document.querySelector(".big-img .big-img-3");
imgeClick(imgesSmall3,bigImge3);



function imgeClick(imges,big){
    imges.forEach((e)=>{
        e.addEventListener("click",(ele)=>{
            big.src=ele.target.src;
        })
    })
}
//End featured Sections


let date=new Date();
let year=document.querySelector(".right .year");

year.innerHTML=date.getFullYear();