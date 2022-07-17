<template>
  <div id="app">
    <Menu />

    <router-view
      v-if="weatherData"
      :weatherData="weatherData"
      @search="getWeather"
    ></router-view>

    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  data() {
    return {
      weatherData: null,
      isLoading: false,
    };
  },
  components: {
    Menu,
    Loader,
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

      if (response.ok) {
        let json = await response.json();
        this.weatherData = json;
      } else {
        this.getWeather();
      }

      this.isLoading = false;
    },
  },
};
</script>

<style>
body {
  margin: 0px;
  background: url("https://taganrogprav.ru/wp-content/uploads/2020/07/pogoda1.jpg")
    0% / cover no-repeat fixed;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

button {
  border: 0px;
  background: #fff;
  color: #000;
  cursor: pointer;
}

button:hover {
  background: rgb(90, 101, 251);
  color: #fff;
}

button:active {
  background: rgb(251, 171, 90);
  color: #fff;
}
</style>
