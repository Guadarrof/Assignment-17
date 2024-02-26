
const cart=document.getElementById("cartList");
const totalPrice=document.getElementById("totalPrice");
const cardTarget=document.getElementById("cardContainer");
const cartTarget=document.getElementById("cartList");



const ourPizzas=[
    {
        id: 1,
        flavor:"Pancetta y hongos",
        price: "6262",
        img:"./img/Pizza1.png",
        btn:"btn-1"

    },
    {
        id: 2,
        flavor:"Jamon y huevo",
        price: "4069",
        img:"./img/Pizza2.png",
        btn:"btn-2"

    },
    {
        id: 3,
        flavor:"Margarita",
        price: "2499",
        img:"./img/Pizza3.png",
        btn:"btn-3"

    },
    {
        id: 4,
        flavor:"Jamon y anana",
        price: "4299",
        img:"./img/Pizza4.png",
        btn:"btn-4"

    },
    {
        id: 5,
        flavor:"Langostinos y salsa golf",
        price: "6532",
        img:"./img/Pizza5.png",
        btn:"btn-5"

    },
    {
        id: 6,
        flavor:"Pollo y espinaca",
        price: "4395",
        img:"./img/Pizza6.png",
        btn:"btn-6"

    }
];

function createCards(){
for (const pizza of ourPizzas) {
    cardTarget.innerHTML += `<div class="card" id=card-${pizza.id}>
    <div class="img_container">
        <img src="${pizza.img}" alt="" class="card_img">
    </div>
    <div class="card_text">
        <p class="card__price pizzaPrice">$${pizza.price}</p>
        <h3 class="card__h3 product_name pizzaFlavor">${pizza.flavor}</h3>
        <button class="card__btn" id="${pizza.btn}" onclick="savePizza('${pizza.flavor}', '${pizza.price}')">Agregar</button>
    </div>
</div>`
}
}

document.addEventListener("DOMContentLoaded", createCards);


var addedPizzas;

function createCart(){
    if(localStorage.getItem('AddedPizzas')){
        cartTarget.innerHTML ="";
        addedPizzas= JSON.parse(localStorage.getItem('AddedPizzas'));
        let total=0;
        for (let i = 0; i < addedPizzas.length; i++) {
            let pizza= addedPizzas[i]  
            cartTarget.innerHTML +=`<div class= "eachPizza">
            <button class="cart_btn" onClick="deletePizza(${i})">x</button>
            <p class="cart_name cart_flavour">${pizza.flavor}</p>
            <p class="cart_price cart_price">$ ${pizza.price}</p>
            </div>`;
            total+=parseInt(pizza.price);
            totalPrice.innerText=total;
        }
    }
}

function savePizza(flavor, price){
    const pizza = {
        flavor: flavor,
        price: price,
    };
    if (localStorage.getItem('AddedPizzas')) {
        addedPizzas = JSON.parse(localStorage.getItem('AddedPizzas'));
    } else {
        addedPizzas = [];
    }
    addedPizzas.push(pizza);
    localStorage.setItem('AddedPizzas', JSON.stringify(addedPizzas));

    alert("Pizza agregada");
    createCart();
}

const cartBtn = document.getElementsByClassName("cart_btn")

function deletePizza(index){
    addedPizzas= JSON.parse(localStorage.getItem('AddedPizzas'));
    addedPizzas.splice(index, 1);
    localStorage.setItem('AddedPizzas', JSON.stringify(addedPizzas));
    if (index==0){
        totalPrice.innerText="";
    }
    createCart();
}



