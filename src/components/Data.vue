<template>
  <div class="layout">
    <Broken></Broken>
  </div>
</template>

<script>
import Broken from "../assets/echarts/Broken.vue";
export default {
  components: {
    Broken
  }
};
</script>

<style lang="scss" scoped>
.layout {
  margin-top: 10px;
  padding: 10px 10px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
}
</style>
