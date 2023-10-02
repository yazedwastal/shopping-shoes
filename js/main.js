/*shoes when onclick */
let shoes = document.querySelector('#hero');
let btn_buy = document.querySelector('.abt-comp button');
let header2 = document.querySelector('.abt-comp h2');
let header2_2 = document.querySelector('.name-pro h2');
let paragh = document.querySelector('.abt-comp p');
let arrow_right = document.querySelector('.fa-arrow-right');
let arrow_left = document.querySelector('.fa-arrow-left');
let arrow = document.querySelector('.arrow');
let arrow2 = document.querySelector('.arrow2');
let header2_pro = document.querySelector('.name-pro h2');
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('nav ul');
let nav_btn = document.querySelector('nav .login-btn');
let nav_logo = document.querySelector('nav .logo');
let close = document.querySelector('.close');

document.querySelectorAll('.l-m-shoes1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-shoes').src =src;
        shoes.style.background= 'linear-gradient(45deg,transparent, #55832C)';
        btn_buy.style.background= '#55832C';
        arrow.style.background= '#55832C';
        arrow2.style.background= '#55832C';
        paragh.style.color= 'white';
        header2.style.color= 'white';
    });
});

document.querySelectorAll('.l-m-shoes2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-shoes').src =src;    
        shoes.style.background= 'linear-gradient(45deg,transparent, pink)';
        btn_buy.style.background= '#f7a0a0';
        arrow.style.background= '#f7a0a0';
        arrow2.style.background= '#f7a0a0';
        paragh.style.color= 'black';
        header2.style.color= 'black';
    });
});
document.querySelectorAll('.l-m-shoes3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-shoes').src =src;
        shoes.style.background= 'linear-gradient(45deg,transparent, black)';
        btn_buy.style.background= 'black';
        arrow.style.background= 'black';
        arrow2.style.background= 'black';
        paragh.style.color= 'white';
        header2.style.color= 'white';
    });
});


// cart
let cartIcon = document.querySelector('.cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
//Open Cart
cartIcon.onclick = ()=>{
    cart.classList.add('active');
}
//Close Cart
closeCart.onclick = ()=>{
    cart.classList.remove('active');
}
// Cart Working JS

// Making Function
function ready(){
    //Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(var i=0; i < removeCartButtons.length; i++){
        var button =removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(var i=0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    // Add To Cart
    var addCart = document.getElementsByClassName('add-cart');
    for(var i=0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
    // Buy Button Work
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked)
};
// Buy Button

function buyButtonClicked(){
    alert('تم وضع طلبك بنجاح ')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
Updatetotal();
}

//Remove Items From Cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    Updatetotal();
};
// Quantity Changes
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    Updatetotal();
}
// Add To Cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText ;
    var price = shopProducts.getElementsByClassName('price')[0].innerText ;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src ;

    addProductToCart(title, price, productImg);
    Updatetotal();
    
}
//
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for(var i=0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert('بالفعل أضيف هذا المنتج إلى عربة التسوق');
            return;
        }   
    }
    var cartBoxContent = `
                <img class="cart-img" src="${productImg}">
                <div class="details-box">
                    <h4 class="cart-product-title"> ${title}</h4>
                    <span class="cart-price">${price}</span>
                    <input class="cart-quantity" type="number" value="1" min="0">
                </div>
                <i class="fa-solid fa-trash cart-remove"></i>
`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}

// Update Total
function Updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = document.getElementsByClassName('cart-box');
    var total =0;
    for(var i=0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('₪',''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        //If Price Contain Some Cents Value
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName('totla-price')[0].innerText = '₪' + total;
    
}
ready();
