const F = require('./functions');

function generate(data, permalink, title, date) {
    data = F.addPermalink(data, permalink);
    data = F.headerBody(data, title, date);
    data = F.newLineSpace(data);

    data = F.addSentence(data, '');
    
    'Dota / League and Capitalist Dynamics'
    'Capitalism is an inherently unfair system. If my neighbour has more money than me, I don\'t know if he is somehow better than me, he'
    ' inherited the money,'
    'he won the lottery, or he sells drugs as a side hustle. And this notion greatly reduces the psychological burden of comparing my success to my'
    'neighbours.'
    'In a fair system, if I was worse off than my neighbour, and I knew he was somehow better than me, the comparison'
    'would be unbearable.'
    'Dota and League of Legends have similar sociological dynamics.'
    'If I win, it is because I am great. If I lose, the circumstances were not in my favour. God was not on my side.'
    'These are, of course, euphemisms for blaming your team mates, but the psychological effect is still similar to blaming'
    'misfortune in capitalism.'
    'And if I could wave a magic wand and reduce peoples ability to blame team mates, I honestly believe that'
    'both Dota and League would lose 50% of its player base over night'
    'Thorin was recently asked about Stormgate, and he said that 1vs1 fps and rts games are probably a thing of the past'
    'I\'m not sure about that, but I do know one thing. In 1vs1 games, there are no team mates to blame'

    data = F.newLine(data);
    data = F.endBody(data);
    data = F.newLine(data);

    return data;
}

module.exports = {
    generate
};
