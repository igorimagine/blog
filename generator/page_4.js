const F = require('./functions');

function generate(data, permalink, title, date) {
    data = F.addPermalink(data, permalink);
    data = F.headerBody(data, title, date);
    data = F.newLineSpace(data);

    data = F.addSentence(data, '');
    
    'The late stage of RTS balance, feat. Artosis'

    'When responding to the question "Does StarCraft 2 need patches", Artosis said many great things,'
    ' but the statement that piqued my interest the most is the idea of balance that'
    ' would occur if SC2 stopped receiving patches.'
    ' Artosis proposes that we would probably get very long games with one race being favored, and 50:50 early all ins by the other race. [1]'

    'I wonder if we can use this line of thinking as a model, especially to differentiate 1vs1 games from team games'
    'In Dota / League, we don\'t only have multiple heroes on the map, we have a pick and ban phase'
    ' that adds an additional layer of balance and intrigue'

    '[1] Does that mean that SC2 should constantly receive balance patches, so the game never becomes too stale and figured out?'

    data = F.newLine(data);
    data = F.endBody(data);
    data = F.newLine(data);

    return data;
}

module.exports = {
    generate
};
