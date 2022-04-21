<template>
  <div
    class="
      mx-auto
      rounded-lg
      shadow-2xl
      lg:shadow-lg
      sm:shadow-md
      bg-white
      my-20
      max-w-4xl
      md:max-w-lg
      sm:max-w-sm
      xs:max-w-xs
      px-10
      xs:px-4
      py-20
    "
  >
    <div class="mx-auto max-w-2xl">
      <h2 class="text-center text-contact-blue text-2xl font-bold mb-10">
        Add More Friends
      </h2>
    </div>
    <!---FORM--->
    <contact-form></contact-form>
  </div>
</template>

<script>
import ContactForm from "./../components/Profile/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>