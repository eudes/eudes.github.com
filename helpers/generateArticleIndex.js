const {writeFile, mkdirsSync} = require('fs-extra');
const {resolve} = require('path');
const getArticleIndex = require('./getArticleIndex');

const outdir = resolve(__dirname, '../static/_articles');

const localeContents = getArticleIndex();
mkdirsSync(outdir);
const fileContents = `export default ${JSON.stringify(localeContents)}`;
console.log(fileContents);

writeFile(`${outdir}/articleIndex.js`, fileContents);
