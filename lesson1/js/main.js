const products = [
  { id: 1, title: "Notebook", price: 20000 },
  { id: 2, title: "Mouse", price: 1500 },
  { id: 3, title: "Keyboard", price: 5000 },
  { id: 4, title: "Gamepad", price: 4500 },
  { id: 5 }, //Товар для проверки значений по умолчанию
];

const renderProduct = (title = "NO NAME", price = 0) => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <a href="#"><img src='https://via.placeholder.com/150x150.png?text=${title}'></a>
            <p>Цена: ${price} руб.</p>
            <button class="by-btn">Удалить из корзины</button>
          </div>`;
};

const renderProducts = (list) => {
  const productList = list.map((good) => {
    return renderProduct(good.title, good.price);
  });
  // Чтобы в html не отрисовывалась запятая,
  // можно отрисовывать не весь массив productList
  // (в который входят и запятые, разделяющие элементы),
  // а можно рендерить каждый эл-т по отдельности,
  // подсовывая каждый следующий продукт из массива в конец списка.
  productList.forEach((product) => {
    document
      .querySelector(".products")
      .insertAdjacentHTML("beforeend", product);
  });
  // document.querySelector(".products").innerHTML = productList;
};

// Кнопка по клику показывает и скрывает товары в корзине
document.querySelector(".btn-cart").addEventListener("click", function () {
  if (document.querySelector(".products").innerHTML == "") {
    renderProducts(products);
  } else {
    document.querySelector(".products").innerHTML = "";
  }
});

//Как можно упросить и сократить запись функции,
// сразу проходясь по массиву продуктов:

// const renderProducts = (productList) => {
//   productList.forEach((product) => {
//     document
//       .querySelector(".products")
//       .insertAdjacentHTML(
//         "beforeend",
//         renderProduct(product.title, product.price)
//       );
//   });
// };
