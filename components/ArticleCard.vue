<template>
  <li class="article">
    <nuxt-link
      :to="localePath({ name: 'article-slug', params: { slug: article.id }})"
    >
      <ImageResponsive
        :imageURL="`article/${article.id}/_thumbnail.jpg`"
        :classes="'cardThumbnail'"
        :width="'952'"
        :height="'509'"
        :alt="article.cardAlt" />
      <h3 class="article__title">
        {{ article.title }}
      </h3>
      <p class="article__description">
        {{ article.description }}
      </p>
    </nuxt-link>
  </li>
</template>

<script lang="js">
  export default {
    props: {
      article: {
        type: Object
      }
    }
  }
</script>

<style lang="scss">
.cardThumbnail {
    transition: all ease .75s;
    opacity: .7;
    &[lazy='loaded'] {
      opacity: 1;
    }
  }
  .article {

    @media (min-width: $screen-sm){
      padding-bottom: 0;

      &:last-child {
        margin-right: 0;
      }
    }

    &:hover {
      .article__title {
        color: $primary;
      }
    }

    &__title {
      font-family: 'Tiempos Headline', Arial, sans-serif;
      color: $secondary;
      padding-top: 1rem;
      font-size: 2.5rem;
      transition: color .3s;
    }

    &__description {
      margin: 0;
      color: $grey-2;
    }
  }
</style>
