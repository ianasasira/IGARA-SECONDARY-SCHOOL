/*
DATA FOR NAV BAR

const navBarSlide  = ()=>{
      
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const individualNavLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=> {
            //animate links
        individualNavLinks.forEach((link,index)=>{
            if(link.style.animation){
            link.style.animation ="";
            }else{
            link.style.animation = `navLinkFade 0.3s ease forwards ${index /7 +2}s`;
            
            }
    });
//burgerr animation
burger.classList.toggle('toggle')

     navLinks.classList.toggle('nav-active');
    });


} 

navBarSlide();
*/
 /* javascript for toggle menu */
const navLinks = document.getElementById("navLinks");
function showMenu(){
navLinks.style.right ="0";
}
function hideMenu(){
navLinks.style.right = "-200px";
}


/* Javascript for top up icon*/
