<template>
  <div class="cover">
    <div class="mb-12">
      <!---Sorting--->
      <div class="flex gap-20 xs:gap-10 justify-center mb-20 sm:mb-12 xs:mb-8">
        <base-button
          mode="white"
          id="black"
          class="font-semibold"
          @click="genderFilter('Male')"
          >Male
        </base-button>
        <base-button
          mode="white"
          id="black"
          class="font-semibold"
          @click="genderFilter('Female')"
          >Female
        </base-button>
      </div>
    </div>
    <div v-if="isLoading" class="w-60 mx-auto">
      <list-loader></list-loader>
    </div>
    <transition
      name="contacts"
      mode="out-in"
      v-if="!isLoading && friends && hasFriend"
    >
      <ul class="min-w-full overflow-auto sm:min-w-36">
        <h2 class="text-2xl font-bold sm:ml-4 mb-16 sm:mb-10">
          Your Friend List
        </h2>
        <contact-user
          v-for="friend in friends"
          :key="friend.id"
          :friend="friend"
        ></contact-user>
      </ul>
    </transition>
    <div v-if="!isLoading && !hasFriend && !error" class="text-center">
      <h2 class="text-3xl font-bold mb-4">
        You have no friend in our record yet!
      </h2>
      <p class="text-xl">
        Please start adding your friend for safety
        <router-link to="/add-friend" class="text-contact-blue"
          >Click here...</router-link
        >
      </p>
    </div>
    <div
      v-if="error"
      class="text-center mx-auto flex flex-col items-center gap-20 sm:gap-10"
    >
      <h2 class="text-3xl font-bold">{{ error }}</h2>
      <img src="/assets/server down.svg" alt="" class="h-92 sm:h-60" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContactUser from "./ContactUser.vue";
export default {
  components: {
    ContactUser,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    ...mapGetters("data", ["friendList", "filterFriends", "hasFriend"]),
    friends() {
      if (this.filterFriends.length <= 0) {
        return this.friendList;
      } else {
        return this.filterFriends;
      }
    },
  },
  methods: {
    genderFilter(gender) {
      this.$store.dispatch("data/genderFilter", { gender: gender });
    },
    async loadFriends() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("data/setContacts");
        this.isLoading = false;
      } catch (err) {
        this.error = err.message;
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadFriends();
  },
};
</script>

<style scoped>
.contacts-enter-from,
.contacts-leave-to {
  opacity: 0;
  transform: translateY(-10rem);
}
.contacts-enter-to,
.contacts-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.contacts-enter-active {
  transition: all 0.5s ease-in;
}
.contacts-leave-active {
  transition: all 0.5s ease-out;
}
</style>