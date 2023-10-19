<template>
  <div
    v-if="!containSubcategories"
    class="flex flex-wrap gap-5 row-gap-6 mt-6 fit-content"
  >
    <div v-for="(product, key) in item.products" :key="key">
      <Product :name="product.name" :endPoint="product.image" />
    </div>
  </div>
  <div v-else>
    <div v-for="(subCategorie, key) in item.subCategories" :key="key">
      <h3>{{ subCategorie.name }}</h3>
      <div class="flex flex-wrap gap-5 row-gap-6 fit-content">
        <div v-for="(product, key) in subCategorie.subCategories" :key="key">
          <Product
            :name="product.name"
            :endPoint="product.image"
            :products="product.products"
          />
        </div>
      </div>
      <div class="flex flex-wrap gap-5 row-gap-6 fit-content">
        <div v-for="(product, key) in subCategorie.products" :key="key">
          <Product :name="product.name" :endPoint="product.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./product.vue";
export default {
  data() {
    return {
      containSubcategories: false,
    };
  },
  props: {
    item: {
      required: true,
    },
  },
  created() {
    this.containSubcategories =
      this.item?.subCategories === undefined ? false : true;
  },
  components: {
    Product,
  },
};
</script>

<style scoped>
.fit-content {
  width: fit-content;
}
</style>
