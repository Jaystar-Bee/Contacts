<template>
  <ul class="flex flex-col text-right">
    <li class="pr-4 pl-8">
      <base-button
        id="black"
        class="text-xl font-semibold"
        @click="emit(gender('male'))"
        >Male</base-button
      >
    </li>
    <hr />
  </ul>
  <ul class="flex flex-col text-right">
    <li class="pr-4 pl-8">
      <base-button
        id="black"
        class="text-xl font-semibold"
        @click="emit(gender('female'))"
        >Female</base-button
      >
    </li>
    <hr />
  </ul>
</template>

<script>
export default {
  emits: ["gender"],
};
</script>