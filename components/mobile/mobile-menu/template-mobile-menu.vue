<template>
  <div class="c-mobile-menu bg-white">
    <div class="btn-group w-100">
      <nuxt-link
        to="/"
        exact
        class="btn"
      >
        <span class="material-icons">
          home
        </span>

        <div class="title">
          Home
        </div>
      </nuxt-link>

      <nuxt-link
        to="/low-effort"
        exact
        class="btn"
      >
        <span class="material-icons">
          shopping_cart
        </span>

        <div class="title">
          Low effort
        </div>
      </nuxt-link>

      <nuxt-link
        to="/high-effort"
        exact
        class="btn"
      >
        <span class="material-icons">
          work
        </span>

        <div class="title">
          High effort
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script src="./mobile-menu.js"></script>
