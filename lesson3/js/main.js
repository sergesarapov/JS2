const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

// Переделать в ДЗ
let getRequest = (url, cb) => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        console.log("Error");
      } else {
        cb(xhr.responseText);
      }
    }
  };
  xhr.send();
};

class ProductList {
  constructor(container = ".products") {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    // this._fetchProducts();
    this._getProducts().then((data) => {
      this.goods = [...data];
      this._render();
    });
  }

  // _fetchProducts() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     this.goods = JSON.parse(data);
  //     this._render();
  //   });
  // }

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  }

  calcSum() {
    return this.goods.reduce((sum, good) => sum + good.price, 0);
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML("beforeend", productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img = "https://placehold.it/200x150") {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}
new ProductList();
//
//
//
//Класс для корзины товаров
class Cart {
  constructor(cartItem) {
    this.container = document.querySelector(".cart");
    this.cartItems = [];
    this.cartTotalPrice = 0;
  }

  checkIfAdded() {
    // здесь можно сравнивать id объектов из cartItems
    // и id нового объекта (cartItem)
  }

  addCartItem() {
    if (this.checkIfAdded()) {
      increaseAmount(); //тут нужно найти объект в массиве с тем же id
    } else {
      this.cartItems.push(cartItem);
    }
  }

  removeCartItem() {
    // здесь происходит удаление
    // нужного объекта из массива this.cartItems
  }

  countCartTotalPrice() {
    this.cartItems.forEach((item) => {
      this.cartTotalPrice += item.price;
    });
  }

  render() {
    // здесь можно рендерить объекты из массива cartItems
    // внутрь this.container
  }
}
// Класс для элемента корзины,
// аргументы для которого мы можем получить
// с кнопки "Купить"
class CartItem {
  constructor(title, price, id, img, amount = 1) {
    this.title = title;
    this.price = price;
    this.id = id;
    this.img = img;
    this.amount = amount;
  }

  increaseAmount() {
    this.amount++;
  }

  reduceAmount() {
    this.amount--;
  }
}
