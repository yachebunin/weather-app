<template>
  <div v-if="data" class="day">
    <div>{{ data.date }}</div>
    <div class="main-info">
      <img :src="data.day.condition.icon" alt="weather-icon" />
      <div class="degrees">+ {{ data.day.avgtemp_c }}</div>
      <div class="text">{{ data.day.condition.text }}</div>
    </div>
    <div class="humidity">Влажность: {{ data.day.avghumidity }}</div>
    <div>Дождь: {{ data.day.daily_chance_of_rain }}%</div>
    <div>Ветер: {{ Math.round(data.day.avgvis_km / 3.6) }}м/с</div>
  </div>
</template>

<script>
export default {
  name: "ListDay",
  props: {
    data: Object,
  },
};
</script>

<style scoped lang="scss">
.day {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.3%;

  > div {
    line-height: 1.5em;
  }

  .main-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    text-align: center;

    img {
      margin-bottom: 5px;
    }

    .degrees {
      font-size: 1.5em;
    }

    .text {
      font-size: 0.8em;
    }
  }

  .humidity {
    margin-top: auto;
  }
}
</style>
