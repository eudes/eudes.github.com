const {writeFile, mkdirsSync} = require('fs-extra');
const {resolve} = require('path');
const getContentsIndex = require('./getContentsIndex');

const outdir = resolve(__dirname, '../static/_contents');

const localeContents = getContentsIndex();
mkdirsSync(outdir);
const fileContents = `export default ${JSON.stringify(localeContents)}`;
console.log(fileContents);

writeFile(`${outdir}/contents.js`, fileContents);
