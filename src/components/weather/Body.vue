<template>
  <div class="body">
    <div class="main-info">
      <div>
        <span class="degrees">+{{ current.temp_c }}</span>
        <img class="icon" :src="current.condition.icon" alt="weather-icon" />
      </div>
      <div class="text">{{ current.condition.text }}</div>
    </div>
    <div class="additional-info">
      <div>Ощущается: +{{ current.feelslike_c }}</div>
      <div>Ветер: {{ Math.round(current.gust_kph / 3.6) }}м/с</div>
      <div>Влажность: {{current.humidity}}%</div>
      <div>Осадки: {{current.precip_mm}}мм</div>
    </div>
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
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    div:first-child {
      display: flex;
      align-items: center;
      .degrees {
        font-size: 3em;
        font-weight: bold;
      }
    }

    .text {
      font-size: 1.2em;
    }
  }

  .additional-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 300px;
    font-size: 1.2em;
    line-height: 1.5em;
  }
}
</style>
