const F = require('./functions');

function generate(data, permalink, title, date) {
    data = F.addPermalink(data, permalink);
    data = F.headerBody(data, title, date);
    data = F.newLineSpace(data);

    data = F.addSentence(data, 'My team recently switched from using Harness to using Kustomize + ArgoCD due to better pricing, based on our size and needs.');
    data = F.addSentence(data, 'Kustomize offers a way to customize application configuration, via yaml files, including, for example, feature flags per environment. ArgoCD adds a great visualized GitOps layer over Kustomize.');
    data = F.addSentence(data, 'While a more thorough write-up will have to wait, I have to admit this combination left a strong first impression, and I feel proud to have a chance to use it professionally.');
    
    data = F.newLine(data);
    data = F.endBody(data);
    data = F.newLine(data);

    return data;
}

module.exports = {
    generate
};
