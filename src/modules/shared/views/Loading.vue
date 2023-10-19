<template>
  <div class="container-loading">
    <div class="spinner-container">
      <ProgressSpinner
        style="width: 350px; height: 350px"
        strokeWidth="5"
        animationDuration="1.5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-loading {
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: "red";
  background-color: rgba(0, 0, 0, 0.32);
  transition-duration: 0.2s;
}
.spinner-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
}
</style>
