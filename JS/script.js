let returnPlate = false;
let returnDrink = false;
let returnDessert = false;
let plateName = "";
let drinkName = "";
let dessertName = "";
let platePrice;
let drinkPrice;
let dessertPrice;
let plateFinalPrice;
let drinkFinalPrice;
let dessertFinalPrice;
let total;
const hidden = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const plateP = document.querySelector("platePrice")

function selectPlate(plate) {
    const select = document.querySelector(".border");
    if (select !== null) {
        select.classList.remove("border");
    }
    plate.classList.add("border");
    returnPlate = true;
    changeButton();
    plateName = plate.lastElementChild.previousElementSibling.previousElementSibling;
    platePrice = plate.lastElementChild;
    plateFinalPrice = (plate.lastElementChild.textContent.slice(3).replace(",", ""));    
}

function selectDrink(drink) {
    const select = document.querySelector(".border-drink");
    if (select !== null) {
        select.classList.remove("border-drink");
    }
    drink.classList.add("border-drink");
    returnDrink = true;
    changeButton();
    drinkName = drink.lastElementChild.previousElementSibling.previousElementSibling;
    drinkPrice = drink.lastElementChild;
    drinkFinalPrice = (drink.lastElementChild.textContent.slice(3).replace(",", ""));
}

function selectDessert(dessert) {
    const select = document.querySelector(".border-dessert");
    if (select !== null) {
        select.classList.remove("border-dessert");
    }
    dessert.classList.add("border-dessert");
    returnDessert = true;
    changeButton();
    dessertName = dessert.lastElementChild.previousElementSibling.previousElementSibling;
    dessertPrice = dessert.lastElementChild;
    dessertFinalPrice = (dessert.lastElementChild.textContent.slice(3).replace(",", ""));
}

function changeButton() {
    if (returnPlate === true && returnDrink === true && returnDessert === true) {
        const button = document.querySelector(".confirm");
        button.classList.remove("hidden");        
    }
}

function nameAndPrice() {
    const plateN = document.querySelector(".plate-order").firstElementChild.innerHTML = plateName.textContent;
    const plateP = document.querySelector(".plate-order").lastElementChild.innerHTML = platePrice.textContent;
    const drinkN = document.querySelector(".drink-order").firstElementChild.innerHTML = drinkName.textContent;
    const drinkP = document.querySelector(".drink-order").lastElementChild.innerHTML = drinkPrice.textContent;
    const dessertN = document.querySelector(".dessert-order").firstElementChild.innerHTML = dessertName.textContent;
    const dessertP = document.querySelector(".dessert-order").lastElementChild.innerHTML = dessertPrice.textContent;
}

function totalPrice() {
    total = ((parseInt(plateFinalPrice) + parseInt(drinkFinalPrice) + parseInt(dessertFinalPrice))/100).toFixed(2);
    total.toString();   
    document.querySelector(".total-price").lastElementChild.innerHTML = `R$ ${total.replace(".", ",")}`
}

function showOverlay() {
    overlay.classList.remove("hidden");
    nameAndPrice();
    totalPrice(); 
}
function cancel() {
    overlay.classList.add("hidden");
}

function finalOrder(){    
    const name = prompt("Digite seu nome: ");
    const address = prompt("Digite seu endereço: ");
    
    const message = ` Olá, gostaria de fazer o pedido:
                        - Prato: ${plateName.textContent}
                        - Bebida: ${drinkName.textContent}
                        - Sobremesa: ${dessertName.textContent}
                        Total: R$ ${total.replace(".", ",")}
                        Nome: ${name}
                        Endereço: ${address}`;      
    window.open(`https://wa.me/5531123456789?text=${encodeURIComponent(message)}`);
    document.location.reload(true);     
}