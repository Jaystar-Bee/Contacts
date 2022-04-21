<template>
  <div
    class="
      mx-auto
      flex flex-1
      w-8/12
      xl:w-10/12
      xs:w-11/12
      shadow-lg
      bg-white
      my-32
      rounded-lg
      overflow-hidden
    "
  >
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "./../components/Login/LoginForm.vue";
export default {
  components: {
    LoginForm,
  },
};
</script>