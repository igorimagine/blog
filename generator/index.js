const fs = require('fs');

const pageIndex = require('./page_index');
const page1 = require('./page_1');
const page10 = require('./page_10');
const page11 = require('./page_11');

console.log('<START>');

let indexPageData = '';
indexPageData = pageIndex.generate(indexPageData, null, 'A blog about Software Engineering and Esports', null);

fs.writeFileSync('generated/index.html', indexPageData);

let goldenRuleData = '';
goldenRuleData = page1.generate(goldenRuleData, 'post/2022/1', 'The golden rule of competitive game design', '2022-09-04');

fs.writeFileSync('generated/page_2022_1_golden_rule.html', goldenRuleData);

let kustomizeArgocdData = '';
kustomizeArgocdData = page10.generate(kustomizeArgocdData, 'post/2023/1', 'Kustomize + ArgoCD: A great first impression', '2023-12-18');

fs.writeFileSync('generated/page_2023_1_kustomize_argocd.html', kustomizeArgocdData);

let stormgate1Data = '';
stormgate1Data = page11.generate(stormgate1Data, 'post/2023/2', 'Stormgate will fail to capture the imagination of the youth', '2023-12-24');

fs.writeFileSync('generated/page_2023_2_stormgate_1.html', stormgate1Data);

console.log('<END>');
