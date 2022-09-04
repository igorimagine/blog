const os = require("os");

function startHead(data) {
    return data + '<head>';
}

function newLine(data) {
    return data + os.EOL;
}

function addSpace(data) {
    return data + '    ';
}

function newLineSpace(data) {
    data = newLine(data);
    data = addSpace(data);
    return data;
}

function addCss(data) {
    return data + '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">';
}

function endHead(data) {
    return data + '</head>';
}

function addHeader(data) {
    data = startHead(data);
    data = newLineSpace(data);
    data = addCss(data);
    data = newLine(data);
    data = endHead(data);
    data = newLine(data);
    return data;
}

function startBody(data) {
    return data + "<body>";
}

function endBody(data) {
    return data + "</body>";
}

function startTitle(data) {
    return data + "<h2>";
}

function endTitle(data) {
    return data + "</h2>";
}

function addText(data, text) {
    return data + text;
}

function startParagraph(data) {
    return data + "<p>";
}

function endParagraph(data) {
    return data + "</p>";
}

function addLink(data, permalink, text) {
    return data + "<a href=\"/" + permalink + "\">" + text + "</a>";
}

function breakLine(data) {
    return data + "<br />"
}

function headerBody(data, title, date) {
    data = addHeader(data);
    data = newLine(data);
    data = startBody(data);
    data = newLineSpace(data);
    data = startParagraph(data);
    data = newLineSpace(data);
    data = startTitle(data);
    data = newLineSpace(data);
    data = addText(data, title);
    data = newLineSpace(data);
    data = endTitle(data);
    data = newLineSpace(data);
    if (date != null) {
        data = breakLine(data)
        data = newLineSpace(data);
        data = startTitle(data);
        data = newLineSpace(data);
        data = addText(data, date);
        data = newLineSpace(data);
        data = endTitle(data);
        data = newLineSpace(data);
    }
    data = endParagraph(data);
    return data;
}

function addPermalink(data, permalink) {
    data = data + "---";
    data = newLine(data);
    data = data + "permalink: /" + permalink;
    data = newLine(data);
    data = data + "---";
    data = newLine(data);
    return data;
}

module.exports = {
    startHead, newLine, addSpace, newLineSpace, addCss, endHead, addHeader, startBody, endBody, startTitle, endTitle, addText, startParagraph, endParagraph, addLink, breakLine, headerBody, addPermalink
};