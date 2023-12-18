const F = require('./functions');

function generate(data, permalink, title, date) {
    data = F.headerBody(data, title, null);
    
    data = F.newLineSpace(data);
    data = F.startParagraph(data);
    data = F.newLineSpace(data);
    data = F.addLink(data, 'post/2023/1', 'Kustomize + ArgoCD: A great first impression');
    data = F.addText(data, ' (2023-12-18)');
    data = F.newLineSpace(data);
    data = F.endParagraph(data);

    data = F.newLineSpace(data);
    data = F.startParagraph(data);
    data = F.newLineSpace(data);
    data = F.addLink(data, 'post/2022/1', 'The golden rule of competitive game design');
    data = F.addText(data, ' (2022-09-04)');
    data = F.newLineSpace(data);
    data = F.endParagraph(data);
    
    data = F.newLine(data);
    data = F.endBody(data);
    data = F.newLine(data);

    return data;
}

module.exports = {
    generate
};
