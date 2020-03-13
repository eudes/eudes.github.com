/**
 * Load the context index from the generated file if executing on the client. Otherwise,
 * read the contents folder directly. This allows hot-reload of contents.
 *
 * @param context
 */
export default function (context) {
  let localeContents;
  if(process.server){
    const getContentsIndex = require('../helpers/getContentsIndex');
    localeContents = getContentsIndex();
  } else {
    localeContents = require('../static/_contents/contents.js')
  }
  context.localeContents = localeContents;
}
