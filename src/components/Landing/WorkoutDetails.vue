<template>
  <li
    class="
      rounded-md
      p-10
      sm:px-4
      shadow-md
      hover:shadow-lg
      text-center
      flex flex-col
      items-center
      max-w-sm
      ease-in
      duration-300
      hover:bg-gray-100
      dark:hover:bg-slate-700 dark:shadow-2xl
    "
  >
    <div class="-mt-20">
      <img :src="todo.image" alt="Image" class="h-20" />
    </div>
    <h3 class="text-xl font-semibold my-6 text-contact-blue">
      {{ todo.title }}
    </h3>
    <p>{{ todo.body }}</p>
  </li>
</template>


<script>
export default {
  props: ["todo"],
};
</script>

style