<template>
  <section
    class="
      flex
      mt-32
      sm:mt-10
      container
      flex-1
      px-52
      2xl:px-20
      xl:px-10
      items-center
      justify-between
      md:flex-col-reverse
      sm:text-center
      gap-4
      md:gap-10
    "
  >
    <div class="mt-4 flex-1">
      <header
        class="
          text-4xl
          md:text-3xl
          text-contact-blue
          dark:text-cyan-400
          mb-6
          font-bold
        "
      >
        <h2>Ensure Your Contact Safety</h2>
      </header>
      <div class="mb-6 text-lg">
        <p>Reduce using of paper with by using our service.</p>
        <p>Store your contacts in a swift way. It's all safe.</p>
      </div>
      <div class="flex gap-10 sm:flex-col md:justify-evenly">
        <base-button mode="blue"
          ><router-link to="/login">Login to Save</router-link>
        </base-button>
        <base-button mode="white" id="black">
          <a href="#about"> About Us</a></base-button
        >
      </div>
    </div>
    <div class="relative justify-end flex-1">
      <div
        class="
          absolute
          h-96
          right-36
          lg:right-24
          w-96
          rounded-full
          bg-red-300
          blur-3xl
          opacity-20
          z-10
          sm:hidden
        "
      ></div>
      <img
        src="./../../assets/undraw_profile_data_re_v81r.svg"
        alt="Page Image"
        class="w-10/12 relative z-10 lg:w-full mx-auto"
      />
    </div>
  </section>
</template>

<style scoped>
</style>