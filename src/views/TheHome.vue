<template>
  <div class="font-Poppins">
    <section class="pb-32 sm:pb-16">
      <the-jumbotron></the-jumbotron>
    </section>
    <section class="py-20 landing bg-contact-blue">
      <free-landing></free-landing>
    </section>
    <section>
      <work-out></work-out>
    </section>
  </div>
</template>

<script>
import TheJumbotron from "./../components/Landing/TheJumbotron.vue";
import WorkOut from "./../components/Landing/WorkOut.vue";
import FreeLanding from "./../components/Landing/FreeLanding.vue";
export default {
  components: {
    TheJumbotron,
    WorkOut,
    FreeLanding,
  },
};
</script>

<style scoped>
.landing {
  clip-path: polygon(0% 0%, 100% 10%, 100% 100%, 0% 100%);
}

@media only screen and (max-width: 500px) {
  .landing {
    clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 100%);
  }
}
</style>