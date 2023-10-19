<template>
  <div class="flex flex-column card">
    <div class="flex">
      <p class="title">{{ name }}</p>
    </div>
    <div class="div">
      <p class="price">{{ priceReset }}</p>
      <p class="id">ID:{{ id }}</p>
    </div>
  </div>
</template>

<script>
import numberWithDot from "@/helpers/numberWithDot";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      required: true,
    },
    id: {
      required: true,
    },
  },
  computed: {
    priceReset() {
      return numberWithDot(this.price);
    },
  },
};
</script>

<style scoped>
.card {
  background: rgba(0, 0, 0, 0.247);
  border-radius: 12px;
  width: 140px;
  height: 200px;
  padding: 10px;
  justify-content: space-between;
  color: white;
  cursor: pointer;
}
.card:hover {
  background: rgba(192, 7, 7, 0.863);
}
.title {
  font-weight: 800;
  font-size: 19px;
  margin: 0;
}
.price {
  margin: 0;
  font-weight: 600;
}
.id {
  margin: 0;
  font-size: 11px;
}
</style>
