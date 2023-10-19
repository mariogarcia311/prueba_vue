<template>
  <div
    class="flex flex-column justify-content-center text-center max-w-container-card"
  >
    <div class="w-100 flex align-items-center justify-content-center">
      <div
        class="card flex align-items-center justify-content-center"
        @click="openChilds()"
      >
        <div class="flex align-items-center">
          <img
            :src="
              endPoint
                ? 'https://assets.refacil.co/providers/' + endPoint
                : 'https://liftlearning.com/wp-content/uploads/2020/09/default-image.png'
            "
            onerror='this.onerror = null; this.src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"'
            :alt="name"
          />
        </div>
      </div>
    </div>
    <p>{{ name }}</p>
  </div>
  <Dialog
    :header="name"
    v-model:visible="displayModal"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
  >
    <ProductsModal :items="this.products" />
  </Dialog>
</template>

<script>
import ProductsModal from "./ProductsModal";
export default {
  data() {
    return {
      displayModal: false,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    endPoint: {
      type: String,
    },
    products: {},
  },
  methods: {
    openChilds() {
      this.products && (this.displayModal = true);
      this.products && console.log(this.products, "ghh");
    },
  },
  created() {},
  components: {
    ProductsModal,
  },
};
</script>

<style scoped>
.max-w-container-card {
  width: 190px;
}
.card {
  height: 90px;
  width: 150px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 0 20px;
  box-sizing: content-box;
}
img {
  width: auto;
  max-height: 50px;
  max-width: 150px;
}
img.cover {
  object-fit: cover;
}
p {
  overflow-wrap: break-word;
}
.w-100 {
  width: 100%;
}
</style>
