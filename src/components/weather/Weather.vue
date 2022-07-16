<template>
  <div class="weather" v-if="weatherData">
    <Header :location="weatherData.location" @search="getWeather" />
    <Body :current="weatherData.current" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Body from "./Body.vue";

export default {
  name: "WeatherMain",
  data() {
    return {
      weatherData: null,
    };
  },
  created() {
    this.getWeather();
  },
  methods: {
    async getWeather(location = "Москва") {
      let response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=62cb304421ff4c07954121946221607&q=${location}&days=7&lang=ru`
      );
      let json = await response.json();

      this.weatherData = json;
    },
  },
  components: {
    Header,
    Body
  },
};
</script>

<style scoped lang="scss">
.weather {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
}
</style>
