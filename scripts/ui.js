const sideMenu=document.querySelector("aside");
const menuBtn=document.querySelector("#menu-btn");
const closeBtn=document.querySelector("#close-btn");
const themeToggle=document.querySelector(".theme-toggle");
const images=document.querySelectorAll('#wIcon');
let status=1;
menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block';
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
})


themeToggle.addEventListener('click',()=>
{
    document.body.classList.toggle('dark-theme-variables');
    images.forEach((image)=>{
        image.classList.toggle('inverted');
    })
    console.log(`status now ${status}`);
    if(status==1){
        document.querySelector('.limode').classList.remove('active');
        document.querySelector('.drmode').classList.add('active');
        status=0;
    }
    else{
        console.log("back to light hss");
        document.querySelector('.drmode').classList.remove('active');
        document.querySelector('.limode').classList.add('active');
        status=1;
    }
})