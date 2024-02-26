const cart=document.getElementById("cartList");
const totalPrice=document.getElementById("total");
const prodName=document.getElementsByClassName("product_name");
const prodPrice=document.getElementsByClassName("card__price");
const addBtn=document.getElementsByClassName("card__btn");

class productInfo{
    constructor(name, price, img, id){
     this.name=name;
     this.price=price;
     this.img=img;
     this.id=id;
    } 
}

const product1= new productInfo(
    "Pancetta y hongos",
    "6262",
    "./img/Pizza1.png",
    "btn-1"
)

const product2= new productInfo(
    "Jamon y huevo",
    "4069",
    "./img/Pizza2.png",
    "btn-2"
)

const product3= new productInfo(
    "Margarita",
    "2499",
    "./img/Pizza3.png",
    "btn-3"
)

const product4= new productInfo(
    "Jamon y anana",
    "4299",
    "./img/Pizza4.png",
    "btn-4"
)

const product5= new productInfo(
    "Langostinos y salsa golf",
    "6079",
    "./img/Pizza5.png",
    "btn-5"
)

const product6= new productInfo(
    "Pollo y espinaca",
    "4395",
    "./img/Pizza6.png",
    "btn-6"
)

function createCards(){
    return `<div class="card">
    <div class="img_container">
        <img src="${this.img}" alt="" class="card_img">
    </div>
    <div class="card_text">
        <p class="card__price">$${this.price}</p>
        <h3 class="card__h3 product_name">${this.name}</h3>
        <button class="card__btn" id="${this.id}">Agregar</button>
    </div>
</div>`
}

function createCart(){
    return `
    <p class="cart_name">${this.name}</p>
    <p class="cart_price" id="cartPrice">${this.price}</p>
    `
}






const totalPriceDiv=document.getElementById("totalPrice");
function totalPrice(){

}