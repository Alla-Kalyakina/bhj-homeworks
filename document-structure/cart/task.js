const productControls = document.querySelectorAll('.product__quantity-controls');
const carts = document.querySelectorAll('.product__add');

productControls.forEach(element => {
    element.addEventListener('click', changeProductQuantity);
});
carts.forEach(element => {
    element.addEventListener('click', addCart);
});

function changeProductQuantity(e) {
    const inc = e.target.classList.contains('product__quantity-control_inc');
    const dec = e.target.classList.contains('product__quantity-control_dec');
    let a = this.querySelector('.product__quantity-value');
    let value = Number(a.textContent);

    if(inc === true) {
        value += 1;
    } 
    if (dec === true) {
        value -= 1;
    } 
    if(value < 1) {
        value = 1;
    }
    a.textContent = value;
}

function addCart() {
    const product = this.closest('.product');
    const id = product.dataset.id;
    const quantity = product.querySelector('.product__quantity-value').textContent;
    const imgSrc = product.querySelector('img').getAttribute('src');
    const cartProducts = document.querySelector('.cart__products');
    const products = [...document.querySelectorAll('.cart__product')];
    const searchElement = products.find(el => el.dataset.id === id);

    if(searchElement) {
        const cartProduct = searchElement.querySelector('.cart__product-count');
        cartProduct.innerText = Number(cartProduct.textContent) + Number(quantity);
    } else {
        cartProducts.insertAdjacentHTML(
            'beforeend',
            `<div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${imgSrc}">
            <div class="cart__product-count">${quantity}</div>
            </div>`
        )
    };
}


