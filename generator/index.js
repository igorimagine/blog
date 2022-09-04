const fs = require('fs');

const pageIndex = require('./page_index');
const page1 = require('./page_1');

console.log('<START>');

let indexPageData = '';
indexPageData = pageIndex.generate(indexPageData, null, 'Hello, World! (3)', null);

fs.writeFileSync('generated/index.html', indexPageData);

let helloData = '';
helloData = page1.generate(helloData, 'page/2022/1', 'First post!', '2022-09-04');

fs.writeFileSync('generated/page_2022_1_first_post.html', helloData);

console.log('<END>');
