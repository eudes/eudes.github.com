/**
 * Load the context index from the generated file if executing on the client. Otherwise,
 * read the contents folder directly. This allows hot-reload of contents.
 *
 * @param context
 */
export default function (context) {
  let localeArticles;
  if (process.server) {
    console.log('server');
    const getArticleIndex = require('../helpers/getArticleIndex');
    localeArticles = getArticleIndex();
  } else {
    console.log('client');
    localeArticles = require('../static/_articles/articleIndex.js');
    if(localeArticles.default){
      localeArticles = localeArticles.default;
    }
  }
  context.localeArticles = localeArticles;
}
