<template>
  <li class="hover:shadow-sm duration-700 transition-all">
    <router-link :to="'/friends/' + friend.id">
      <div
        class="
          flex
          py-4
          shrink-0
          px-8
          bg-white
          dark:bg-slate-800 dark:shadow-lg
          rounded-lg
          mb-10
          sm:mb-6
          items-center
          gap-8
          md:gap-4
        "
      >
        <div class="w-20 h-20 md:w-12 md:h-12 rounded-full overflow-hidden">
          <img
            :src="friend.gender === 'Male' ? maleProfilePic : femaleProfilePic"
            alt=""
            class="h-full"
          />
        </div>
        <div class="font-semibold text-xl md:text-lg sm:text-md">
          {{ fullName }}
        </div>
        <div class="font-semibold md:text-lg text-xl xs:hidden">
          {{ friend.phone }}
        </div>
        <div class="font-semibold md:text-lg text-xl sm:hidden">
          {{ friend.gender }}
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["friend"],
  computed: {
    fullName() {
      return this.friend.lastName + " " + this.friend.firstName;
    },
    femaleProfilePic() {
      return "./assets/femaileProfile.webp";
    },
    maleProfilePic() {
      return "./assets/maleProfile.webp";
    },
  },
};
</script>