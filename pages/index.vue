<template>
  <div class="page-index">
    <div class="container">
      <BlogSection :contents="contents"/>
    </div>
  </div>
</template>

<script>
  import BlogSection from "~/components/Sections/BlogSection";

  export default {
    async asyncData({app, localeContents}) {
      console.log('context');
      const contents = localeContents[app.i18n.locale];
      console.log('localecontents', localeContents);

      async function asyncImport(fileName) {
        const wholeMD = await import(`~/contents/${app.i18n.locale}/blog/${fileName}`);
        // remove .md
        const id = fileName.substring(0, fileName.length - 3);
        const entry = {
          id: id,
        ...wholeMD.attributes
        };
        console.log(entry);
        return entry;
      }

      return Promise.all(contents.map(blog => asyncImport(blog)))
        .then((res) => {
          return {
            contents: res
          }
        })
    },

    components: {BlogSection},

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
          {name: "author", content: "Marina Aisa"},
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
