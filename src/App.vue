<template>
  <div class="bg-blue-100 bg-opacity-30">
    <the-header></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from "./components/Layout/TheFooter.vue";
import TheHeader from "./components/Layout/TheHeader.vue";
export default {
  components: {
    TheFooter,
    TheHeader,
  },
  created() {
    this.$store.dispatch("tryLogin");
    this.$store.dispatch("autoLogin");
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --contact-blue: #2274a5;
  --light-blue: rgb(49, 104, 213);
}
input,
button {
  outline: none;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
#black {
  color: black;
}
.cover {
  min-height: 70vh;
}

.route-enter-from {
  transform: translateX(-40rem);
  opacity: 0;
}
.route-enter-active {
  transition: all 0.4s ease-in;
}

.route-leave-active {
  transition: all 0.2s ease-out;
}

.route-enter-to,
.route-leave-from {
  transform: translateX(0rem);
  opacity: 1;
}
.route-leave-to {
  transform: translateX(40rem);
  opacity: 0;
}
</style>
