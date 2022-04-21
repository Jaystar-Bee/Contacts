<template>
  <div>
    <teleport to="body">
      <base-dialog v-if="isLoading" fixed message="Loading...">
        <base-loader></base-loader
      ></base-dialog>
      <base-dialog v-if="success" fixed message="Friend Added"
        ><base-success></base-success
      ></base-dialog>
      <base-dialog v-if="error" @close="closeDialog" :message="errorMessage"
        ><base-error></base-error
      ></base-dialog>
    </teleport>
    <keep-alive>
      <form action="" @submit.prevent="submitForm">
        <div class="flex flex-col gap-2 mb-6">
          <label for="firstname" class="text-xl sm:text-lg font-semibold"
            >First Name</label
          >
          <input
            type="text"
            id="firstname"
            class="
              border-2
              px-6
              py-2
              ring-dark-grey
              focus:border-contact-blue
              duration-500
              rounded-xl
              text-lg
            "
            placeholder="John"
            v-model.trim="firstName.val"
            @blur="clearValidity('firstName')"
          />
          <p v-if="!firstName.isValid" class="text-red-500">
            Please fill out this field and character must be greater than 2
          </p>
        </div>
        <div class="flex flex-col gap-2 mb-6">
          <label for="lastName" class="text-xl font-semibold sm:text-lg"
            >Last Name</label
          >
          <input
            type="text"
            id="lastName"
            class="
              border-2
              px-6
              py-2
              ring-dark-grey
              focus:border-contact-blue
              duration-500
              rounded-xl
              text-lg
            "
            placeholder="Bolarinwa"
            v-model.trim="lastName.val"
            @blur="clearValidity('lastName')"
          />
          <p v-if="!lastName.isValid" class="text-red-500">
            Please fill out this field and character must be greater than 2
          </p>
        </div>
        <div class="flex flex-col gap-2 mb-6">
          <label for="email" class="text-xl font-semibold sm:text-lg"
            >Email</label
          >
          <input
            type="email"
            id="email"
            class="
              border-2
              px-6
              py-2
              ring-dark-grey
              focus:border-contact-blue
              duration-500
              rounded-xl
              text-lg
            "
            placeholder="john@mail.com"
            v-model.trim="email.val"
            @blur="clearValidity('email')"
          />
          <p v-if="!email.isValid" class="text-red-500">
            Please fill out the email field appropriately.
          </p>
        </div>
        <div class="flex flex-col gap-2 mb-6">
          <label for="phone" class="text-xl font-semibold sm:text-lg"
            >Phone Number</label
          >
          <input
            type="tel"
            id="phone"
            class="
              border-2
              px-6
              py-2
              ring-dark-grey
              focus:border-contact-blue
              duration-500
              rounded-xl
              text-lg
            "
            placeholder="+234 90 000 0000"
            v-model.trim="phone.val"
            @blur="clearValidity('phone')"
          />
          <p v-if="!phone.isValid" class="text-red-500">
            Please fill out this field
          </p>
        </div>
        <div class="flex my-4 gap-8">
          <div class="flex gap-4 items-center">
            <label for="male" class="text-xl font-semibold sm:text-lg"
              >Male</label
            >
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              class="w-4 h-4"
              v-model.trim="gender.val"
              @blur="clearValidity('gender')"
            />
          </div>
          <div class="flex gap-4 items-center">
            <label for="female" class="text-xl font-semibold sm:text-lg"
              >Female</label
            >
            <input
              type="radio"
              id="female"
              class="w-4 h-4"
              name="gender"
              value="Female"
              v-model.trim="gender.val"
              @blur="clearValidity('gender')"
            />
          </div>
        </div>
        <p v-if="!gender.isValid" class="text-red-500 block">
          Please fill out this field
        </p>
        <div class="flex flex-col gap-2 my-6">
          <label for="address" class="text-xl font-semibold sm:text-lg"
            >Address</label
          >
          <input
            type="text"
            id="address"
            class="
              border-2
              px-6
              py-2
              ring-dark-grey
              focus:border-contact-blue
              duration-500
              rounded-xl
              text-lg
            "
            placeholder="No-24 Slot street"
            v-model.trim="address.val"
            @blur="clearValidity('address')"
          />
          <p v-if="!address.isValid" class="text-red-500">
            Please fill out this field and character must be greater than 2
          </p>
        </div>
        <div class="flex flex-col gap-2 mb-6">
          <label for="city" class="text-xl font-semibold sm:text-lg"
            >City</label
          >
          <input
            type="text"
            id="city"
            class="
              border-2
              px-6
              py-2
              ring-dark-grey
              focus:border-contact-blue
              duration-500
              rounded-xl
              text-lg
            "
            placeholder="Ibadan"
            v-model.trim="city.val"
            @blur="clearValidity('city')"
          />
          <p v-if="!city.isValid" class="text-red-500">
            Please fill out this field
          </p>
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <label for="country" class="text-xl font-semibold sm:text-lg"
            >Country</label
          >
          <input
            type="text"
            id="country"
            class="
              border-2
              px-6
              py-2
              ring-dark-grey
              focus:border-contact-blue
              duration-500
              rounded-xl
              text-lg
            "
            placeholder="Nigeria"
            v-model.trim="country.val"
            @blur="clearValidity('country')"
          />
          <p v-if="!country.isValid" class="text-red-500">
            Please fill out this field
          </p>
        </div>
        <div class="md:text-center mt-10">
          <base-button mode="blue">Add Friend</base-button>
        </div>
      </form>
    </keep-alive>
  </div>
</template>


<script>
export default {
  data() {
    return {
      lastName: { val: "", isValid: true },
      firstName: { val: "", isValid: true },
      email: { val: "", isValid: true },
      phone: { val: "", isValid: true },
      gender: { val: "", isValid: true },
      address: { val: "", isValid: true },
      city: { val: "", isValid: true },
      country: { val: "", isValid: true },
      formValid: true,
      isLoading: false,
      success: false,
      error: false,
      errorMessage: null,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateEach() {
      if (this.lastName.val === "" && this.lastName.val.length <= 2) {
        this.lastName.isValid = false;
        this.formValid = false;
      }
      if (this.firstName.val === "" && this.lastName.val.length <= 2) {
        this.firstName.isValid = false;
        this.formValid = false;
      }
      if (this.email.val === "" && !this.email.val.includes("@")) {
        this.email.isValid = false;
        this.formValid = false;
      }
      if (this.phone.val === "") {
        this.phone.isValid = false;
        this.formValid = false;
      }
      if (this.gender.val === "") {
        this.gender.isValid = false;
        this.formValid = false;
      }
      if (this.city.val === "") {
        this.city.isValid = false;
        this.formValid = false;
      }
      if (this.country.val === "") {
        this.country.isValid = false;
        this.formValid = false;
      }
    },
    closeDialog() {
      this.error = false;
      this.errorMessage = null;
    },
    async submitForm() {
      this.validateEach();
      if (!this.formValid) {
        this.formValid = true;
        return;
      }
      try {
        this.isLoading = true;
        await this.$store.dispatch("data/addContact", {
          lastName: this.lastName.val,
          firstName: this.firstName.val,
          email: this.email.val,
          phone: this.phone.val,
          gender: this.gender.val,
          address: this.address.val,
          city: this.city.val,
          country: this.country.val,
        });
        setTimeout(() => {
          this.isLoading = false;
          this.success = true;
        }, 1000);
        setTimeout(() => {
          this.success = false;
        }, 2000);
      } catch (error) {
        setTimeout(() => {
          this.isLoading = false;
          this.error = true;
          this.errorMessage = error.message;
        }, 1000);
      }

      this.lastName.val = "";
      this.firstName.val = "";
      this.email.val = "";
      this.phone.val = "";
      this.gender.val = "";
      this.address.val = "";
      this.city.val = "";
      this.country.val = "";
    },
  },
  created() {
    // setTimeout(() => {
    //   this.isLoading = true;
    // }, 500);
    // setTimeout(() => {
    //   this.success = true;
    // }, 2000);
    // setTimeout(() => {
    //   this.isLoading = false;
    //   this.success = false;
    // }, 3000);
  },
};
</script>