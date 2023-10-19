<template>
  <div
    v-if="this.products"
    class="flex flex-wrap gap-5 row-gap-6 mt-6 fit-content justify-content-center"
  >
    <div v-for="(item, key) in this.products" :key="key">
      <FinalProduct :name="item?.name" :price="item?.amount" :id="item.id" />
    </div>
  </div>
</template>

<script>
import FinalProduct from "./FinalProduct";
export default {
  data() {
    return {
      visibleModal: false,
      products: null,
    };
  },
  props: {
    items: {
      required: true,
    },
  },
  created() {
    if (this.items) {
      this.products = this.items;
    }
  },
  components: {
    FinalProduct,
  },
};
</script>

<style></style>
