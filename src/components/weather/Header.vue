<template>
  <div class="header">
    <div class="info">
      <span class="location">
        {{ location.country }}, {{ location.name }}
      </span>
      <span class="date">{{ location.localtime }}</span>
    </div>
    <div class="search">
      <input type="text" v-model="locationData" @keyup.enter="search" />
      <button @click="search">поиск</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherHeader",
  props: {
    location: Object,
  },
  data() {
    return {
      locationData: "",
    };
  },
  methods: {
    search() {
      this.locationData && this.$emit("search", this.locationData);

      this.locationData = "";
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  .info {
    display: flex;
    flex-direction: column;
    .location {
      margin-bottom: 5px;
      font-weight: bold;
      font-size: 1.2em;
    }

    .date {
      margin-bottom: 10px;
    }
  }

  .search {
    text-align: right;

    input {
      max-width: 50%;
      box-sizing: border-box;
      border: 0px;
      outline: 0;
      outline-offset: 0;
    }

    button {
      border: 0px;
      background: #fff;
      color: #000;
    }

    button:hover {
      background: rgb(90, 101, 251);
      color: #fff;
      cursor: pointer;
    }

    button:active {
      background: rgb(251, 171, 90);
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
