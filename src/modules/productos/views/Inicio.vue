<template>
  <!-- <h2>inicio</h2> -->
  <TabView
    :scrollable="true"
    v-model:activeIndex="active"
    v-if="module?.categories"
  >
    <TabPanel
      v-for="(item, key) in module?.categories"
      :key="key"
      :header="item.name"
    >
      <ProductList :item="item" />
    </TabPanel>
  </TabView>
</template>

<script>
import { mapState } from "vuex";
import ProductList from "./../components/ProductList.vue";
export default {
  data() {
    return {
      id: null,
      module: null,
      active: 0,
    };
  },
  computed: {
    ...mapState(["modules"]),
  },
  methods: {
    handleItem() {
      this.id = this.$router.currentRoute.value.params.id;
      this.module = this.modules.find((_item) => {
        return this.id === _item.name;
      });
    },
  },
  created() {
    this.handleItem();
  },
  updated() {
    this.handleItem();
  },
  watch: {
    id() {
      this.active = 0;
    },
  },
  components: {
    ProductList,
  },
};
</script>

<style></style>
