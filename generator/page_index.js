const F = require('./functions');

function generate(data, permalink, title, date) {
    data = F.headerBody(data, title, null);
    data = F.newLineSpace(data);
    
    data = F.startParagraph(data);
    data = F.newLineSpace(data);
    data = F.addText(data, 'TEST LINKS:')
    data = F.newLineSpace(data);
    data = F.endParagraph(data);
    data = F.newLineSpace(data);
    
    data = F.startParagraph(data);
    data = F.newLineSpace(data);
    data = F.addLink(data, 'post/2022/1', 'The golden rule of competitive game design');
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
