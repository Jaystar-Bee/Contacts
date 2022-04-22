<template>
  <transition name="backdrop">
    <div
      class="
        fixed
        top-0
        z-40
        h-full
        w-full
        bg-slate-500 bg-opacity-25
        backdrop-blur-lg
      "
      @click="tryClose"
    ></div>
  </transition>
  <transition name="content" mode="out-in">
    <div
      class="
        absolute
        z-50
        dark:bg-slate-800 dark:text-white
        bg-white
        py-10
        px-8
        top-1/2
        message
        min-w-44
      "
      :class="small"
    >
      <div v-if="!fixed" class="flex justify-end">
        <button @click="tryClose">
          <i class="fa fa-times text-3xl font-bold"></i>
        </button>
      </div>
      <div class="text-center font-bold text-2xl" v-if="message">
        {{ message }}
      </div>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: String,
    fixed: {
      type: Boolean,
      default: false,
    },
    small: String,
  },
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit("close");
    },
  },
};
</script>



<style scoped>
.message {
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 23rem;
  min-height: 25rem;
}

.backdrop-enter-from,
.content-enter-from,
.backdrop-leave-to,
.content-leave-to {
  opacity: 0;
  transform: translateY(-5rem);
}
.backdrop-enter-active {
  transition: all 0.4s ease-out;
}
.content-enter-active,
.content-leave-active {
  transition: all 0.5s ease-out;
}

.backdrop-enter-to,
.content-enter-to,
.backdrop-leave-from,
.content-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>