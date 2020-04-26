class ProductList {
  constructor(container = ".products") {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._render();
    this._countPriceTotal();
  }

  _fetchProducts() {
    this.goods = [
      { id: 1, title: "Notebook", price: 20000 },
      { id: 2, title: "Mouse", price: 1500 },
      { id: 3, title: "Keyboard", price: 5000 },
      { id: 4, title: "Gamepad", price: 4500 },
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML("beforeend", productObject.render());
    }
  }
  // Метод подсчета общей стоимости товаров
  _countPriceTotal() {
    let priceTotal = 0;
    this.goods.forEach((good) => {
      priceTotal += good.price;
    });
    console.log(`Общая стоимость товаров в каталоге: ${priceTotal} \u20bd`);
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
