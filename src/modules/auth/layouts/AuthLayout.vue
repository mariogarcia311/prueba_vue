<template>
  <router-view />
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isLoading", "errorMessage"]),
  },

  watch: {
    errorMessage() {},
  },
};
</script>

<style></style>
