<template>
  <nav
    class="
      container
      flex flex-1
      px-10
      py-4
      md:px-2
      bg-white
      dark:bg-slate-800
      items-center
      justify-between
      dark:text-slate-200
    "
  >
    <div>
      <router-link class="text-2xl xs:text-xl" to="/">
        <i class="fa fa-user"></i> Contact</router-link
      >
    </div>
    <ul class="flex items-center gap-20 lg:gap-12 md:gap-6 sm:hidden">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="!isLogged">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="isLogged">
        <router-link to="/friends">Profile</router-link>
      </li>
      <li v-if="isLogged">
        <router-link to="/add-friend">Add Friends</router-link>
      </li>
      <base-button mode="blue" v-if="isLogged" @click="logout"
        >Logout</base-button
      >
    </ul>
    <div class="hidden sm:block mr-4">
      <div
        class="
          bg-slate-300
          px-2
          bg-opacity-20
          backdrop-blur-xl
          flex
          items-center
          justify-center
          rounded-md
          shadow-lg
          duration-1000
        "
        @click="changeToggle"
      >
        <i
          class="fa fa-chevron-down text-black text-2xl font-bold duration-1000"
          v-if="!dropdown"
        ></i>
        <i
          class="fa fa-chevron-up text-black text-2xl font-bold duration-1000"
          v-else
        ></i>
      </div>
    </div>

    <div v-if="dropdown" class="absolute z-20 top-16 right-6">
      <ul
        class="
          bg-white
          px-8
          py-4
          bg-opacity-50
          backdrop-blur-lg
          rounded-md
          shadow-md
          flex flex-col
          gap-6
          z-20
        "
      >
        <li>
          <router-link to="/" @click="changeToggle">Home</router-link>
        </li>
        <li v-if="!isLogged">
          <router-link to="/login" @click="changeToggle">Login</router-link>
        </li>
        <li v-if="isLogged">
          <router-link to="/friends" @click="changeToggle">Profile</router-link>
        </li>
        <li v-if="isLogged">
          <router-link to="/add-friend" @click="changeToggle"
            >Add Friends</router-link
          >
        </li>
        <base-button mode="blue" v-if="isLogged" @click="logout"
          >Logout</base-button
        >
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dropdown: false,
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    changeToggle() {
      this.dropdown = !this.dropdown;
    },
    async logout() {
      await this.$store.dispatch("logoutUser");
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped>
.router-link-active {
  font-weight: 600;
  color: var(--contact-blue);
}
</style>