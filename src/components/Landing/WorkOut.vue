<template>
  <section class="bg-white dark:bg-slate-800 py-40 sm:py-24" id="about">
    <div class="flex items-center">
      <h2
        class="
          text-4xl
          sm:text-2xl
          mb-32
          font-semibold
          text-contact-blue
          mx-auto
        "
      >
        How it Work
      </h2>
    </div>
    <ul class="flex mx-auto items-start justify-center gap-20 flex-wrap px-10">
      <workout-details
        v-for="todo in todos"
        :key="todo.title"
        :todo="todo"
      ></workout-details>
    </ul>
  </section>
</template>

<script>
import WorkoutDetails from "./WorkoutDetails.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    WorkoutDetails,
  },
  computed: {
    ...mapGetters("data", ["todos"]),
  },
};
</script>