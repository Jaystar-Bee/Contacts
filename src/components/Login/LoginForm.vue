<template>
  <teleport to="body">
    <base-dialog fixed v-if="isLoading" message="Login in...">
      <base-loader> </base-loader>
    </base-dialog>
    <base-dialog v-if="!isLoading && success" fixed message="Message sent"
      ><base-success></base-success
    ></base-dialog>
    <base-dialog v-if="error" @close="closeDialog" :message="error"
      ><base-error></base-error
    ></base-dialog>
  </teleport>
  <div class="bg-light-grey py-20 px-10 xs:px-4 md:hidden w-1/2">
    <img src="./../../assets/undraw_my_password_re_ydq7.svg" alt="" />
  </div>
  <div class="py-20 lg:py-12 px-8 xs:px-4 w-1/2 md:w-full">
    <form action="" @submit.prevent="submitForm">
      <h2 class="text-2xl mb-14 font-semibold">Login</h2>
      <div class="flex flex-col text-xl my-6 w-full">
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Email..."
          class="
            border-2
            w-full
            border-dark-grey
            mt-4
            rounded-md
            focus:border-contact-blue
            py-2
            px-4
            duration-500
          "
          v-model.trim="email"
        />
      </div>

      <div class="flex gap-4 xs:gap-1 mt-12">
        <base-button mode="blue">Send Magic Link</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "signup",
      email: "",
      isLoading: false,
      success: false,
      error: null,
    };
  },
  methods: {
    validateEmail() {},
    closeDialog() {
      this.error = null;
    },
    async submitForm() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("sendMagicLogin", { email: this.email });
        setTimeout(() => {
          this.isLoading = false;
          this.success = true;
        }, 900);
        setTimeout(() => {
          this.success = false;
          this.isLoading = false;
        }, 1600);
      } catch (error) {
        this.isLoading = false;
        let err;
        if (error.code == "auth/network-request-failed") {
          err = "Check Your Internet Connection";
        }
        this.error =
          err || "Unable to send Email, Please check your Internet Connection";
      }
      this.isLoading = false;
    },
  },
};
</script>