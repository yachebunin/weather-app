<template>
  <div class="body">
    <span class="main-info">
      <span class="degrees">+{{ current.temp_c }}</span>
      <img class="icon" :src="current.condition.icon" alt="weather-icon" />
    </span>
    <span class="additional-info">{{ current.condition.text }}</span>
  </div>
</template>

<script>
export default {
  name: "WeatherBody",
  props: {
    current: Object,
  },
};
</script>

<style scoped lang="scss">
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  .main-info {
    display: flex;
    align-items: center;
    .degrees {
      font-size: 3em;
      font-weight: bold;
    }
  }

  .additional-info {
    font-size: 1.5em;
  }
}
</style>
