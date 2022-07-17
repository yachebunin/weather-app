<template>
  <div class="loader">Загрузка...</div>
</template>

<script>
export default {
  name: "LoaderPage",
};
</script>

<style scoped lang="scss">
.loader {
  position: absolute;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  color: #fff;
}
</style>
