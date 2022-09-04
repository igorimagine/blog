const fs = require('fs');

const pageIndex = require('./page_index');
const page1 = require('./page_1');

console.log('<START>');

let indexPageData = '';
indexPageData = pageIndex.generate(indexPageData, null, 'A blog about Software Engineering and Esports', null);

fs.writeFileSync('generated/index.html', indexPageData);

let goldenRuleData = '';
goldenRuleData = page1.generate(goldenRuleData, 'post/2022/1', 'The golden rule of competitive game design', '2022-09-04');

fs.writeFileSync('generated/page_2022_1_golden_rule.html', goldenRuleData);

console.log('<END>');
