const F = require('./functions');

function generate(data, permalink, title, date) {
    data = F.addPermalink(data, permalink);
    data = F.headerBody(data, title, date);
    data = F.newLineSpace(data);

    data = F.addSentence(data, '');
    
    'Flutter: The Time is Now'
    'Flutter is a framework for building cross-platform applications, made by Google as a layer atop of Skia, which also underpins Chrome.'
    'It uses the devices graphics card to render the gui, similarly to the way it is done in video games.'
    'This technique is called "immediate mode GUI", and it is wildly different than traditional GUI\'s'
    'Traditial GUI\'s '

    'The most popular immediate mode GUI library is "Dear ImGui", sitting at 44.6k stars at the time of writing, quite an impressive number.'
    'At the time of writing, Flutter has x github stars. Google made a big bet, and it seems to be paying off.'
    'Javascript: Designed in 10 days, destined to ruin your life / destined to haunt you'
    'The future is cross-platform'
    'hot reloading'
    'The beast within graphics cards: How we got here'

    'Limited number of platforms in todays world'

    data = F.newLine(data);
    data = F.endBody(data);
    data = F.newLine(data);

    return data;
}

module.exports = {
    generate
};
