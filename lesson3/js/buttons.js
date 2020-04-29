"use strict";
const cartContainer = document.querySelector(".cart-container");
const cartButton = document.querySelector(".btn-cart");

cartButton.addEventListener("click", (event) => {
  cartContainer.classList.toggle("hidden");
});
// Инициализация кнопок "Купить" - вызывается в рендере каталога
// Не смог реализовать это внутри класса,
// поэтому захардкодил в переменные
// каталог товаров (catalog) и корзину(newCart)
function initButtons() {
  const buttons = document.querySelectorAll(".buy-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let currentItem = +event.target.parentElement.parentElement.dataset.id;

      for (const good of catalog.goods) {
        if (good.id_product == currentItem) {
          newCart.addCartItem(good);
        }
      }
    });
  });
}
