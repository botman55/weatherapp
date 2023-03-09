const sideMenu=document.querySelector("aside");
const menuBtn=document.querySelector("#menu-btn");
const closeBtn=document.querySelector("#close-btn");
const themeToggle=document.querySelector(".theme-toggle");
let status=1;
menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block';
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
})
themeToggle.addEventListener('click',()=>
{
    console.log(`status now ${status}`);
    if(status==1){
        console.log("convertung dark mode");
        document.body.classList.toggle('dark-theme-variables');
        document.getElementById('wind').style.filter="invert(1)";
        document.getElementById('humid').style.filter="invert(1)";
        document.getElementById('uv').style.filter="invert(1)";
        document.getElementById('press').style.filter="invert(1)";
        document.getElementById('visi').style.filter="invert(1)";
        document.querySelector('.limode').classList.remove('active');
        document.querySelector('.drmode').classList.add('active');
        status=0;
    }
    else{
        console.log("back to light hss");
        document.body.classList.toggle('light-theme-variables');
        document.getElementById('wind').style.filter="invert(0)";
        document.getElementById('humid').style.filter="invert(0)";
        document.getElementById('uv').style.filter="invert(0)";
        document.getElementById('press').style.filter="invert(0)";
        document.getElementById('visi').style.filter="invert(0)";
        document.querySelector('.drmode').classList.remove('active');
        document.querySelector('.limode').classList.add('active');
        status=1;
    }
})