<template>
  <button class="px-6 py-3" :class="mode">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  color: #fff;
  border-radius: 5px;
}
.white {
  background: #fff;
  box-shadow: 0 0 20px rgba(90, 149, 244, 0.259);
}
.blue {
  background: var(--light-blue);
}
.blue,
.white {
  transition: all 0.3s ease-in;
}
.flat {
  background: transparent;
  transition: all 0.3s ease in;
}
.flat:hover {
  color: var(--contact-blue);
}
.white:hover {
  background-color: rgba(171, 214, 243, 0.163);
}
.blue:hover {
  background-color: rgb(22, 76, 112);
}
</style>