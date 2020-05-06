const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: "#app",
  data: {
    isGoods: false,
    catalogUrl: "/catalogData.json",
    products: [],
    imgCatalog: "https://placehold.it/200x150",
    searchLine: "",
    isInvisible: false,
    isVisibleCart: true,
    cartItems: [],
    amount: 0,
    countGoods: 0,
    cartImg: "https://placehold.it/50x100",
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    addProduct(product) {
      console.log(product.id_product);
    },

    filterGoods(value) {
      const renderedProducts = document.querySelectorAll(".product-item");
      const regexp = new RegExp(value, "i");

      if (this.searchLine === "") {
        this.isInvisible = false;
      }

      renderedProducts.forEach((product) => {
        const name = product.querySelector("h3").innerHTML;
        if (regexp.test(name)) {
          product.classList.remove("invisible");
        } else if (this.searchLine !== "") {
          product.classList.add("invisible");
        }
      });
    },
  },

  mounted() {
    this.getJson(`${API + this.catalogUrl}`)
      .then((data) => {
        for (let el of data) {
          this.products.push(el);
          //   проверяю, если с сервера прилетел пустой массив,
          // то показываю заглушку
          if (this.products.length === 0) {
            this.isGoods = true;
          }
        }
      })
      // ловлю, если файл не прилетел вовсе - тоже даю заглушку
      .catch(() => (this.isGoods = true));
    this.getJson(`${API}/getBasket.json`).then((data) => {
      this.amount = data.amount;
      this.countGoods = data.countGoods;
      data.contents.forEach((el) => this.cartItems.push(el));
    });
  },
});
