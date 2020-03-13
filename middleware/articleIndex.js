/**
 * Load the context index from the generated file if executing on the client. Otherwise,
 * read the contents folder directly. This allows hot-reload of contents.
 *
 * @param context
 */
export default function (context) {
  let localeArticles;
  if (process.server) {
    const getArticleIndex = require('../helpers/getArticleIndex');
    localeArticles = getArticleIndex();
  } else {
    localeArticles = require('../static/_articles/articleIndex.js')
  }
  context.localeArticles = localeArticles;
}
