<template>
  <div class="weather">
    <List :weatherData="weatherData.forecast.forecastday" />
  </div>
</template>

<script>
import List from "../../components/weatherForDays/List.vue";

export default {
  name: "WeatherForDays",
  props: {
    weatherData: Object,
  },
  components: {
    List,
  },
};
</script>

<style scoped lang="scss">
.weather {
  width: 40vw;
  min-height: 50vh;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
}
</style>
