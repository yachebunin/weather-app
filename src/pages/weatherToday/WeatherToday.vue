<template>
  <div class="weather">
    <Header :location="weatherData.location" @search="search" />
    <Body :current="weatherData.current" />
  </div>
</template>

<script>
import Header from "../../components/weatherToday/Header.vue";
import Body from "../../components/weatherToday/Body.vue";

export default {
  name: "WeatherToday",
  props: {
    weatherData: Object,
  },
  components: {
    Header,
    Body,
  },
   methods: {
    search(locationData) {
      this.$emit("search", locationData);
    },
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
