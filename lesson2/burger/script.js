"use strict";

const sizes = [
  {
    size: "small",
    price: 50,
    cal: 20,
    name: "Маленький",
  },
  {
    size: "big",
    price: 100,
    cal: 40,
    name: "Большой",
  },
];

const stuffings = [
  {
    stuffing: "cheese",
    price: 10,
    cal: 20,
    name: "Сыр",
  },
  {
    stuffing: "salad",
    price: 20,
    cal: 5,
    name: "Салат",
  },
  {
    stuffing: "potato",
    price: 15,
    cal: 10,
    name: "Картофель",
  },
];

const toppings = [
  {
    topping: "spice",
    price: 15,
    cal: 0,
    name: "Специи",
  },
  {
    topping: "mayo",
    price: 20,
    cal: 5,
    name: "Майонез",
  },
];

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
    this.totalPrice = 0;
    this.totalCal = 0;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  } // Добавить добавку

  removeTopping(topping) {
    this.toppings.forEach((top, index) => {
      if (top.topping == topping.topping) {
        this.toppings.splice(index, 1);
      }
    });
  } // Убрать добавку

  getToppings() {
    console.log(this.toppings);
  } // Получить список добавок

  getSize() {} // Узнать размер гамбургера

  getStuffing() {} // Узнать начинку гамбургера

  calculatePrice() {
    let toppingPrice = 0;
    this.toppings.forEach((topping) => {
      toppingPrice += topping.price;
    });
    this.totalPrice = this.size.price + this.stuffing.price + toppingPrice;
  } // Узнать цену

  calculateCalories() {
    let toppingCal = 0;
    this.toppings.forEach((topping) => {
      toppingCal += topping.cal;
    });
    this.totalCal = this.size.cal + this.stuffing.cal + toppingCal;
  } // Узнать калорийность

  render() {
    this.calculatePrice();
    this.calculateCalories();
    let allToppings = "";
    this.toppings.forEach((topping) => {
      allToppings += `<div>${topping.name}</div>`;
    });

    return `<div>Ваш бургер:</div>
                <div> Размер: ${this.size.name}</div>
                <div>Начинка: ${this.stuffing.name}</div>
                <div>Топпинги: ${allToppings}</div>
                <div>Цена: ${this.totalPrice} руб.</div>
                <div>Калории: ${this.totalCal} Ккал.</div>`;
  }
}
