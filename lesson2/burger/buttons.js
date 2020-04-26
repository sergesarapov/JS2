"use strict";

let burger;
// Здесь добавляются параметры для меню
const renderBurger = (size) => {
  const currentBurger = document.querySelector(`.burger-${size.size}`);
  currentBurger
    .querySelector(`.${size.size}-burger-price`)
    .insertAdjacentHTML("beforeend", ` ${size.price} руб.`);
  currentBurger
    .querySelector(`.${size.size}-burger-cal`)
    .insertAdjacentHTML("beforeend", ` ${size.cal}`);
};

renderBurger(sizes[0]);
renderBurger(sizes[1]);

function fetchStuffing(event) {
  switch (event.toElement.classList[0]) {
    case "cheese":
      return stuffings[0];
      break;

    case "salad":
      return stuffings[1];
      break;

    case "potato":
      return stuffings[2];
      break;
  }
}

function fetchSize(event) {
  switch (event.toElement.classList[1]) {
    case "sm":
      return sizes[0];
      break;

    case "big":
      return sizes[1];
      break;
  }
}

const buyButtons = document.querySelectorAll(".buy-btn");
buyButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const newBurger = new Hamburger(fetchSize(event), fetchStuffing(event));
    burger = newBurger;
    document.querySelector(".order").innerHTML = newBurger.render();
  });
});

const toppingButtons = document.querySelectorAll(".topping-btn");
toppingButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let currentTopping = event.toElement.classList[0];
    toppings.forEach((topping, index) => {
      if (topping.topping == currentTopping && burger !== undefined) {
        burger.addTopping(toppings[index]);
        document.querySelector(".order").innerHTML = burger.render();
      } else if (burger == undefined) {
        document.querySelector(".order").innerHTML = "Сначала выберите бургер!";
      }
    });
  });
});
