<template>
  <section>
    <div class="articles__top">
      <div>
        <h2>{{ $t('posts') }}</h2>
        <span class="emoji-title emoji--writing"/>
      </div>
<!--      <LangSwitcher/>-->
    </div>
    <ul class="articles">
      <article-card
        v-for="entry in contents"
        :key="entry.id"
        :article="entry" />
    </ul>
  </section>
</template>
<script>
import ArticleCard from "~/components/ArticleCard.vue";
import LangSwitcher from '~/components/LangSwitcher'

export default {
  components: { ArticleCard, LangSwitcher },
  props: {
    contents: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
.articles {
  margin: 0;

  @media (min-width: $screen-sm){
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    display: grid;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 4rem;
  }
}
</style>

