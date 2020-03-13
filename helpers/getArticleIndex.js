const {readdirSync} = require('fs-extra');
const {resolve, extname} = require('path');

const indir = resolve('./contents/');

module.exports = function getArticleIndex() {
  const localeContents = {};
  const dir = readdirSync(indir);
  for (let locale of dir) {
    localeContents[locale] = readdirSync(`${indir}/${locale}/article`)
      .filter(filename => extname(filename) === '.md');
  }

  return localeContents;
};
