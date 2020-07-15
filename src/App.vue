<template>
  <div id="app">
    <CkNav />
    <CkHome />
    <CkBottomNav />
    <CkFooter />
  </div>
</template>

<script>
import CkHome from "./components/CkHome.vue";
import CkNav from "./components/CkNav.vue";
import CkBottomNav from "./components/CkBottomNav.vue";
import CkFooter from "./components/CkFooter.vue";
// import { SfButton } from "@storefront-ui/vue";

export default {
  name: "App",
  components: {
    CkHome,
    CkNav,
    CkBottomNav,
    CkFooter,
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
  font-family: var(--font-family-primary);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
