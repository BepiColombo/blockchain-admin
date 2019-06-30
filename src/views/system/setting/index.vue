<template>
  <div class="setting">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {};
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
