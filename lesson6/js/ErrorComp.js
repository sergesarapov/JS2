Vue.component("error", {
  data() {
    return {
      error: "",
    };
  },
  methods: {
    showError(error) {
      this.error = error;
    },
  },
  template: `<div>{{ error }}</div>`,
});
