const F = require('./functions');

function generate(data, permalink, title, date) {
    data = F.addPermalink(data, permalink);
    data = F.headerBody(data, title, date);
    data = F.newLine(data);

    data = F.endBody(data);
    data = F.newLine(data);

    return data;
}

module.exports = {
    generate
};
