<template>
  <div class="weather" v-if="weatherData">
    <Header :location="weatherData.location" @search="getWeather" />
    <Loader v-if="isLoading" />
    <Body v-else :current="weatherData.current" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Body from "./Body.vue";
import Loader from "../Loader.vue";

export default {
  name: "WeatherMain",
  data() {
    return {
      weatherData: null,
      isLoading: false,
    };
  },
  created() {
    this.getWeather();
  },
  methods: {
    async getWeather(location = "Москва") {
      this.isLoading = true;

      let response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=62cb304421ff4c07954121946221607&q=${location}&days=7&lang=ru`
      );
      let json = await response.json();

      this.weatherData = json;
      this.isLoading = false;
    },
  },
  components: {
    Header,
    Body,
    Loader,
  },
};
</script>

<style scoped lang="scss">
.weather {
  min-width: 30vw;
  min-height: 40vh;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
}
</style>
