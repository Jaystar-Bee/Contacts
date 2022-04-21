<template>
  <footer>
    <div
      class="
        bg-contact-blue bg-opacity-5
        py-20
        px-36
        flex flex-wrap
        md:flex-col
        justify-evenly
        gap-10
        md:px-10
        lg:px-16
        flex-1
      "
    >
      <div>
        <div class="mb-4">
          <h2 class="text-3xl font-bold">Contact</h2>
          <h4 class="text-xl">Save your contact list for emergency</h4>
        </div>
        <h2 class="text-xl font-semibold">
          Don't want to loose your Contacts?
        </h2>
        <p class="text-blue-600">
          <router-link to="/login">
            Sign up now to save your friends Contact to regain any lost issues.
          </router-link>
        </p>
      </div>
      <div class="text-center md:text-left">
        <h2 class="text-3xl font-bold mb-6">Options</h2>
        <ul class="gap-4 miv-w-10/12">
          <li class=""><router-link to="/">Home</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/friends">Profile</router-link></li>
          <li><router-link to="/add-friend">Add friends</router-link></li>
          <li><a href="mailto:amjaystar@gmail.com">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
li a,
li a:link,
li a:active {
  border-bottom: 3px dotted #fff;
  padding-bottom: 1px;
  width: 100%;
}
li {
  margin-bottom: 5px;
}
</style>