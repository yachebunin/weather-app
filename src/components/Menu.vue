<template>
  <div class="menu">
    <router-link to="/">
      <button>главная</button>
    </router-link>
    <router-link to="/weatherForDays">
      <button>погода на 3 дня</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
};
</script>

<style scoped lang="scss">
.menu {
  margin-bottom: 20px;

  button:first-child {
    border-right: 1px solid #000;
  }
}
</style>
