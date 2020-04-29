"use strict";
//Класс для корзины товаров

class Cart {
  constructor() {
    this.container = ".cart";
    this.cartItems = [];
    this.cartTotalPrice = 0;
  }

  checkIfAdded(cartItem) {
    for (let i = 0; i <= this.cartItems.length; i++) {
      if (this.cartItems[i] == undefined) {
        return false;
      }
      if (this.cartItems[i].id === cartItem.id_product) {
        this.cartItems[i].increaseAmount();
        this.render();
        return true;
      }
    }
  }

  addCartItem(cartItem) {
    return fetch(`${API}/addToBasket.json`)
      .then((response) => response.json())
      .then((response) => {
        if (response.result == 1) {
          if (!this.checkIfAdded(cartItem)) {
            this.cartItems.push(new CartItem(cartItem));
            this.render();
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeCartItem(cartId) {
    return fetch(`${API}/deleteFromBasket.json`)
      .then((response) => response.json())
      .then((response) => {
        if (response.result == 1) {
          this.cartItems.forEach((item, index) => {
            if (item.id === cartId) {
              this.cartItems.splice(index, 1);
              this.render();
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  countCartTotalPrice() {
    let totalPrice = 0;
    this.cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    this.cartTotalPrice = totalPrice;
  }

  render() {
    const block = document.querySelector(this.container);
    let productObject = "";
    let cartContainer = "";
    for (let product of this.cartItems) {
      productObject = product;
      cartContainer += productObject.render();
    }
    block.innerHTML = cartContainer;
    this.initDeleteButtons();
    // Рендер кнопки "Корзина"
    let i = 0;
    newCart.cartItems.forEach((item) => {
      i += item.quantity;
    });
    cartButton.innerHTML = `Корзина x${i}`;
    if (newCart.cartItems.length == 0) {
      cartButton.innerHTML = `Корзина`;
    }
    // Рендер общей стоимости
    this.countCartTotalPrice();
    let totalContainer = document.querySelector(".total-price");
    totalContainer.innerHTML = `Общая стоимость: ${this.cartTotalPrice} руб.`;
  }
  // Метод инициализации кнопок удаления товара в корзине
  initDeleteButtons() {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        let currentItem = +event.target.parentElement.parentElement.dataset.id;
        this.removeCartItem(currentItem);
        this.render();
      });
    });
  }
}

// Класс для элемента корзины
class CartItem extends ProductItem {
  constructor(product, img = "https://placehold.it/200x150") {
    super(product, img);
    this.id = product.id_product;
    this.quantity = 1;
  }
  increaseAmount() {
    this.quantity++;
  }

  reduceAmount() {
    this.quantity--;
  }

  render() {
    return `<div class="product-item cart-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <p>${this.quantity} шт.</p>
                    <button class="delete-btn">Убрать</button>
                </div>
            </div>`;
  }
}

let newCart = new Cart();
