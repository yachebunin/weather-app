<template>
  <div class="list">
    <Day v-for="day in weatherData" :data="day" :key="day.date" />
  </div>
</template>

<script>
import Day from "./Day.vue";

export default {
  name: "WeatherList",
  props: {
    weatherData: Array,
  },
  components: {
    Day,
  },
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
</style>
