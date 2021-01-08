


///render the houses in the browser

const renderitems=(item,type)=>{
    const card=document.querySelector('.cards__container')
    const markup=`  <div class="cards__card">
    <img src="${item.img}" alt="house" class="cards__img">
    <div class="cards__textHolder">
    <div class="cards__about">
        <span class="cards__about--text">${item.rooms} غرف</span>
        <img src="../img/lamp.svg" alt="comado" class="cards__about--icon">
        <img src="../img/comado.svg" alt="comado" class="cards__about--icon">
    </div>
    <div class="cards__about">
        <span class="cards__about--text">${item.showers} حمام</span>
        <img src="../img/shower.svg" alt="comado" class="cards__about--icon">
        
    </div>
    <div class="cards__about">
        <span class="cards__about--text">${item.livingroom} صالة</span>
        <img src="../img/chair.svg" alt="comado" class="cards__about--icon">
        <img src="../img/table.svg" alt="comado" class="cards__about--icon">
    </div>
</div>
<div class="cards__price">
    <h3 class="cards__price--header"> السعر :<span class="cards__green"> ${item.price}$ </span>${type}</h3>
    <a href="#" class="button-primary cards__button"> للتفاصيل انقر هنا</a>
</div>
</div> `
card.insertAdjacentHTML('beforeend',markup)

}

//////////house bying
class Home{
    constructor(){
        ///an array to safe each home to loop over it
       this.item=[]
    }

    ///creating new items
    additem(id,rooms,img,showers,livingroom,price){

        const items={
        id,
       rooms,
        img,
       showers,
        livingroom,
        price
       
        }
        this.item.push(items)
        return items
    }
}



 const houseBying= new Home()

const housebuy1=houseBying.additem(1,4,'../img/house7.jpg',2,1,70000);
const housebuy2= houseBying.additem(2,3,'../img/house8.jpg',4,2,100000);
const housebuy3= houseBying.additem(3,4,'../img/house9.jpg',5,3,140000);
const housebyu4= houseBying.additem(4,4,'../img/house10.jpg',5,3,140000);
const housebuy5= houseBying.additem(5,5,'../img/house11.jpg',3,3,140000);
const housebuy6= houseBying.additem(5,5,'../img/house12.jpg',3,3,140000);

//create a new classs for renteing a house
 const houseRent=new Home()


const house1=houseRent.additem(1,4,'../img/house1.jpg',2,1,700);
const house2= houseRent.additem(2,3,'../img/house 2.jpg',4,2,1000);
const house3= houseRent.additem(3,4,'../img/house3.jpg',5,3,1400);
const house4= houseRent.additem(4,4,'../img/house4.jpg',5,3,1400);
const house5= houseRent.additem(5,5,'../img/house 5.jpg',3,3,1400);
const house6= houseRent.additem(5,5,'../img/house 6.jpg',3,3,1400);


////a new class for buying aprtmant
 const apartmentBuying=new Home()
const apartmentBuy1=apartmentBuying.additem(1,3,'../img/apartmant1.jpg',1,1,100000)
const apartmentBuy2=apartmentBuying.additem(1,3,'../img/apartmant2.jpg',1,1,100000)
const apartmentBuy3=apartmentBuying.additem(1,3,'../img/apartmant3.jpg',1,1,100000)
const apartmentBuy4=apartmentBuying.additem(1,3,'../img/apartmant4.jpg',1,1,100000)
const apartmentBuy5=apartmentBuying.additem(1,3,'../img/apartmant5.jpg',1,1,100000)
const apartmentBuy6=apartmentBuying.additem(1,3,'../img/apartmant6.jpg',1,1,100000)


const apartmentrenting=new Home()
const apartmentrenting1=apartmentrenting.additem(1,3,'../img/apartmant7.jpg',1,1,300)
const apartmentrenting2=apartmentrenting.additem(1,3,'../img/apartmant8.jpg',1,1,400)
const apartmentrenting3=apartmentrenting.additem(1,3,'../img/apartmant9.jpg',1,1,500)
const apartmentrenting4=apartmentrenting.additem(1,3,'../img/apartmant10.jpg',1,1,200)
const apartmentrenting5=apartmentrenting.additem(1,3,'../img/apartmant11.jpg',1,1,400)
const apartmentrenting6=apartmentrenting.additem(1,3,'../img/apartmant12.jpg',1,1,300)


///get the query name to detarmine the reults for the user
const query=new URLSearchParams(window.location.search)

const result=()=>{
    let addItems;
if(query.get('name')==='sellHouse'){
    document.querySelector('.cards__header').innerHTML='مباني للبيع'
    addItems=houseBying.item.forEach(el=>{
        return renderitems(el,"دولار")
    })

}
else if(query.get('name')==='rentHouse'){
    document.querySelector('.cards__header').innerHTML='مباني للأيجار'
    addItems=houseRent.item.forEach(el => {

        return renderitems(el,'في الشهر');
    });
}
else if(query.get('name')==null){
    window.location.replace('../index.html')

}
else if(query.get('name')==='buyAprtment'){
    document.querySelector('.cards__header').innerHTML='شقق للبيع'
    addItems=apartmentBuying.item.forEach(el=>{
        return renderitems(el,"دولار")
    })

}
else if(query.get('name')==='rentAprtment'){
    document.querySelector('.cards__header').innerHTML='شقق للأيجار'

    addItems=apartmentrenting.item.forEach(el=>{
        return renderitems(el,'في الشهر')
    })
}
else{
    window.location.replace('../index.html')
}
}
result()