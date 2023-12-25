let cartSet = new Set();
const arrCat = [
    ["карта тк4100", 1.5, 1, 50],
    ["карта mifare", 1.5, 1, 50],
    ["брелок тк4100", 1.5, 1, 50],
    ["колпачёк rj-45", 0.30, 0, 30],
    ["коннектор rj-45", 0.30, 0, 30],
    ["f-разъём", 0.80, 0, 80],
    ["батарейка аа", 1.00, 1, 0], 
    ["изолента", 1.00, 1, 0]
];

const catalog = document.querySelector("#catalog");
let cart = document.querySelector("#cart");
let flexContainer = document.querySelector(".flex-container");
let buttonArray = flexContainer.querySelectorAll("button");
let cartDiv = document.querySelector(".cart-div");
let binDivAnchor = document.querySelector("a.disabled");
let binDiv = document.querySelector(".bin-div");

for (let element of buttonArray)
    element.addEventListener("click", addMe);
cartDiv.addEventListener("click", showMeTheCart);
binDiv.addEventListener("click", clearMyChoiсe);


function addMe() {
    cartSet.add(this.value);
    this.innerHTML = "ВЫБРАНО!";
    this.classList.add("selected");
    binDivAnchor.classList.remove("disabled");
    binDiv.classList.add("grey");
}

function clearMyChoiсe() {
    cartSet.clear();
    cart.innerHTML = "";
    for (let element of buttonArray) {
        element.innerHTML = "В корзину";
        element.classList.remove("selected");
    };
    binDivAnchor.classList.add("disabled");
    binDiv.classList.remove("grey"); 
}

function showMeTheCart() {
    binDivAnchor.classList.remove("disabled");
    let text = "";
    let rubli = 0;
    let kopeyki = 0;


    for (let value of cartSet) {
        text+=`<div class="order pad">
                  <div class="order">
                  <img class="order__img" src="img/${value}.jpg" alt="">
    
        <h4 class="order__name">${arrCat[value][0]}</h4>
    
    </div>
    <p class="order__price">${arrCat[value][1]} BYN</p>
        </div>`;

        rubli+=arrCat[value][2];
        kopeyki+=arrCat[value][3];
    }
    text+=`<h2 class="total">итого ${getTotal(rubli, kopeyki)} byn</h2>`;

    cart.innerHTML = `<h1 class="title">ваш заказ</h1><div class="holder holder_home"><a href="#catalog"><div class="home-div dark"><img src="img/home.png" alt=""></div></a></div>${text}`;

    let homeDiv = cart.querySelector(".home-div");
    
    homeDiv.addEventListener("click",goHome);
}
function goHome() {cart.innerHTML = "";}
function getTotal(r, k) {
    return (r + k / 100);
}