<template>
  <div id="app">
    <Weather />
  </div>
</template>

<script>
import Weather from "./components/weather/Weather.vue";

export default {
  name: "App",
  components: {
    Weather,
  },
};
</script>

<style>
body {
  background: url("https://taganrogprav.ru/wp-content/uploads/2020/07/pogoda1.jpg")
    0% / cover no-repeat fixed;
}

#app {}
</style>
