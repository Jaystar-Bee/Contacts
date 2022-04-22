<template>
  <div class="cover">
    <teleport to="body">
      <base-dialog
        @close="closeDialog"
        v-if="showEditDialog"
        small="lg:top-3/4"
      >
        <edit-contact :friend="friend"></edit-contact
      ></base-dialog>

      <base-dialog v-if="isLoading" fixed message="Deleting...">
        <base-loader></base-loader>
      </base-dialog>
      <base-dialog v-if="!isLoading && success" fixed message="User Deleted">
        <base-success></base-success>
      </base-dialog>
      <base-dialog v-if="error" :message="error" @close="closeDialog">
        <base-error></base-error>
      </base-dialog>
    </teleport>
    <!---Arrow Back---->
    <div class="ml-20 absolute top-20 left-4 lg:left-0 sm:-left-16">
      <router-link to="/friends">
        <div
          class="
            bg-white
            dark:bg-slate-900 dark:text-white
            text-black
            font-bold
            text-lg
            w-16
            h-16
            sm:w-10 sm:h-10
            shadow-lg
            hover:shadow-sm
            duration-500
            rounded-full
            flex
            items-center
            justify-center
          "
        >
          <i class="fa fa-arrow-left text-xl font-extrabold"></i>
        </div>
      </router-link>
    </div>
    <!---:oading Animations--->
    <div v-if="listLoading" class="w-60 mx-auto">
      <list-loader></list-loader>
    </div>
    <div
      v-if="listError"
      class="
        text-center
        mx-auto
        flex flex-col
        items-center
        gap-20
        mb-16
        sm:gap-10
      "
    >
      <h2 class="text-3xl font-bold">{{ listError }}</h2>
      <img src="/assets/server down.svg" alt="" class="h-92 sm:h-60" />
    </div>

    <!----Top Details---->
    <div
      class="
        flex flex-col
        items-center
        gap-10
        max-w-6xl
        lg:max-w-2xl
        md:max-w-lg
        sm:max-w-md
        xs:max-w-xs
        px-6
        z-10
        relative
        bg-white
        dark:bg-slate-800 dark:shadow-lg
        shadow
        rounded-2xl
        mx-auto
      "
      v-if="!listLoading && !listError"
    >
      <img
        :src="friend.gender === 'Female' ? femaleProfilePic : maleProfilePic"
        alt="Profile Image"
        class="
          rounded-full
          h-80
          w-80
          lg:h-60 lg:w-60
          sm:h-32 sm:w-32 sm:-mt-16
          -mt-32
        "
      />
      <div class="text-center">
        <h2 class="text-4xl sm:text-3xl xs:text-2xl font-semibold">
          {{ fullName }}
        </h2>
        <p
          class="text-slate-400 text-lg sm:text-sm tracking-widest mt-2"
          v-if="friend.email"
        >
          {{ friend.email }}
        </p>
      </div>
      <div class="flex gap-10 mb-10">
        <a
          :href="'tel:' + friend.phone"
          class="
            bg-green-600
            h-10
            w-10
            xs:h-8 xs:w-8
            rounded-full
            flex
            items-center
            justify-center
          "
          target="_blank"
        >
          <i class="fa fa-phone text-white"></i>
        </a>
        <a
          :href="'mailto:' + friend.email"
          class="
            bg-purple-500
            h-10
            w-10
            xs:h-8 xs:w-8
            rounded-full
            flex
            items-center
            justify-center
          "
          target="_blank"
          v-if="friend.email"
        >
          <i class="fa fa-envelope text-white"></i>
        </a>
        <a
          :href="'https://wa.me/' + friend.phone"
          class="
            bg-yellow-800
            h-10
            w-10
            xs:h-8 xs:w-8
            rounded-full
            flex
            items-center
            justify-center
          "
          target="_blank"
        >
          <i class="fa fa-commenting text-white"></i>
        </a>
      </div>
    </div>

    <!---Bottom Details---->
    <div class="" v-if="!listLoading && !listError">
      <div
        class="
          flex
          justify-evenly
          lg:justify-between
          bg-white
          dark:bg-slate-800 dark:text-white
          -mt-16
          py-28
          relative
          px-44
          lg:px-36
          md:px-20
          sm:px-10
          xs:px-4
        "
      >
        <div>
          <div class="mb-10 sm:mb-6">
            <h4 class="text-slate-500 text-lg font-semibold sm:text-sm">
              Phone
            </h4>
            <p class="text-2xl sm:text-lg xs:text-sm font-semibold">
              {{ friend.phone }}
            </p>
          </div>
          <div class="mb-10 sm:mb-6">
            <h4 class="text-slate-500 text-lg sm:text-sm font-semibold">
              Address
            </h4>
            <p class="text-2xl sm:text-lg font-semibold xs:text-sm">
              {{ friend.address }}
            </p>
          </div>
          <div class="mb-10 sm:mb-6" v-if="friend.city">
            <h4 class="text-slate-500 text-lg font-semibold sm:text-sm">
              City
            </h4>
            <p class="text-2xl sm:text-lg font-semibold xs:text-sm">
              {{ friend.city }}
            </p>
          </div>
        </div>
        <div>
          <div class="mb-10 sm:mb-6" v-if="friend.email">
            <h4 class="text-slate-500 text-lg font-semibold sm:text-sm">
              Email
            </h4>
            <p class="text-2xl sm:text-lg font-semibold xs:text-sm">
              {{ friend.email }}
            </p>
          </div>

          <div class="mb-10 sm:mb-6">
            <h4 class="text-slate-500 text-lg font-semibold sm:text-sm">
              Gender
            </h4>
            <p class="text-2xl sm:text-lg font-semibold xs:text-sm">
              {{ friend.gender }}
            </p>
          </div>
          <div class="mb-10 sm:mb-2" v-if="friend.country">
            <h4 class="text-slate-500 text-lg font-semibold sm:text-sm">
              Country
            </h4>
            <p class="text-2xl sm:text-lg font-semibold xs:text-sm">
              {{ friend.country }}
            </p>
          </div>
        </div>
      </div>

      <!--Actions-->
      <div
        class="
          flex
          justify-center
          gap-10
          pt-16
          sm:pt-2
          bg-white
          dark:bg-slate-800
          pb-32
        "
      >
        <button
          class="
            px-8
            py-4
            sm:py-2 sm:px-6
            rounded-md
            text-white text-lg
            font-semibold
            bg-contact-blue
            outline-none
          "
          @click="editContact"
        >
          Edit
        </button>
        <button
          class="
            px-8
            py-4
            sm:py-2 sm:px-6
            rounded-md
            text-white text-lg
            font-semibold
            bg-red-600
            outline-none
          "
          @click="deleteContact"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import EditContact from "./EditContact.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    EditContact,
  },
  data() {
    return {
      friend: [],
      showEditDialog: false,
      isLoading: false,
      error: null,
      success: false,
      listLoading: false,
      listError: null,
    };
  },
  computed: {
    femaleProfilePic() {
      return "./../../assets/femaileProfile.webp";
    },
    maleProfilePic() {
      return "./../../assets/maleProfile.webp";
    },
    fullName() {
      return this.friend.lastName + " " + this.friend.firstName;
    },
    ...mapGetters("data", ["activeContact"]),
  },
  methods: {
    async loadFriend() {
      try {
        this.listLoading = true;
        await this.$store.dispatch("data/setActiveContact", {
          id: this.$route.params.id,
        });
        this.listLoading = false;
        this.friend = this.activeContact;
      } catch (error) {
        this.listLoading = false;
        this.listError = error.message;
        console.log(this.listError);
      }
      this.listLoading = false;
    },
    async deleteContact() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("data/deleteContact", {
          id: this.$route.params.id,
        });
        // setTimeout(this.isLoading,500)
        setTimeout(() => {
          this.isLoading = false;
          this.success = true;
        }, 900);
        setTimeout(() => {
          this.success = false;
          this.$router.replace("/friends");
        }, 1600);
      } catch (error) {
        this.isLoading = false;
        this.error = error.message;
      }
      this.isLoading = false;
    },

    closeDialog() {
      this.showEditDialog = false;
      this.error = null;
    },
    editContact() {
      this.showEditDialog = true;
    },
  },
  created() {
    this.loadFriend();
  },
};
</script>

<style scoped>
</style>