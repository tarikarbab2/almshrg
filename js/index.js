const nav=document.querySelector('.nav__icon')
const items=document.querySelector('.nav__items')

nav.addEventListener('click',function(e){
    
    items.style.display=items.style.display===''?'flex':"";

})