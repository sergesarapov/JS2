Vue.component("search-line", {
  data() {
    return {
      userSearch: "",
    };
  },
  template: `<div>
                    <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter(userSearch)">
                        <input type="text" class="search-field" v-model="userSearch">
                        <button class="btn-search" @click="$root.$refs.products.filter(userSearch)" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                </div>`,
});
