<template>
  <div class="page-index">
    <div class="container">
      <div class="elevate-cover">
        <div class="elevate-cover__textOffset">
          <div class="elevate-cover__left">
            <h1 class="elevate-cover__title">{{error.statusCode}}</h1>
            <h2 v-if="error.statusCode === 404" class="elevate-cover__description">
              page not found
            </h2>
            <p class="elevate-cover__description">nothing to see here</p>
            <nuxt-link to="/">go home</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default'
  }
</script>
<style lang="scss">
  .elevate-cover {
    display: flex;
    flex-direction: column;
    min-height: 459px;

    @media (min-width: $screen-md) {
      flex-direction: row;
    }

    &__img, &__textOffset {
      width: 100%;
    }

    &__left {
      max-width: 500px;
      width: 100%;
      padding: 2.4rem;
      margin-bottom: auto;

      @media (min-width: $screen-md) {
        /*margin-left: auto;*/
        padding: 2.4rem 4rem 2.4rem 2.4rem;
      }
    }

    &__textOffset {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__title {
      font-size: 3rem;
      font-family: 'Tiempos Headline', Arial, sans-serif;
      color: $secondary;

      @media (min-width: $screen-sm) {
        font-size: 4rem;
      }
    }

    &__description {
      margin: 0;
      opacity: 0;
      animation: fadeinmove .5s ease;
      animation-delay: .5s;
      animation-fill-mode: forwards;
    }
  }
</style>
