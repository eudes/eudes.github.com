<template>
  <div class="page-index">
    <div class="container">
      <ArticleListSection :articles="articles"/>
    </div>
  </div>
</template>

<script>
  import ArticleListSection from "~/components/Sections/ArticleListSection";

  export default {
    async asyncData({app, localeArticles}) {
      const articles = localeArticles[app.i18n.locale];

      async function asyncImport(fileName) {
        const wholeMD = await import(`~/contents/${app.i18n.locale}/article/${fileName}`);

        // remove ".md"
        const id = fileName.substring(0, fileName.length - 3);
        return {
          id: id,
          ...wholeMD.attributes
        };
      }

      return Promise.all(articles.map(asyncImport))
        .then((res) => {
          return {
            articles: res
          }
        })
    },

    components: {ArticleListSection},

    transition: {
      name: 'slide-fade'
    },

    head() {
      return {
        title: this.$t('indexPageHead.title'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        script: [{src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}],
        meta: [
          {name: "author", content: process.env.meta_author},
          {
            name: "description",
            property: "og:description",
            content: this.$t('indexPageHead.description'),
            hid: "description"
          },
          {property: "og:title", content: this.$t('indexPageHead.title')},
          {property: "og:image", content: this.ogImage},
          {name: "twitter:description", content: this.$t('indexPageHead.description')},
          {name: "twitter:image", content: this.ogImage}
        ]
      };
    },

    computed: {
      ogImage: function () {

      }
    }
  }
</script>
