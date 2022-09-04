const F = require('./functions');

function generate(data, permalink, title, date) {
    data = F.addPermalink(data, permalink);
    data = F.headerBody(data, title, date);
    data = F.newLine(data);

    'I spend a lot of time thinking about esports and what makes each game tick. What would happen if we changed this or that aspect of the games design? Why is one game more popular than some other game? What would it take to reverse that? Why do some games last for a long time while others fall off the radar?'
    'There are many rules and guidelines one should follow when designing a competitive game, but I believe one trumps them all.'
    'The golden rule of competitive game design:'
    'When playing a competitive game with balanced match making, you are losing 50% of the time. Therefore, the game should still be fun while losing.'
    'Let\'s explore this rule trough some games.'
    'Quake 3 Arena vs Counter Strike & Valorant'
    '(smartphone)'
    'League vs Dota'
    'Losing in LoL is quite a frustrating experience, but it isn\'t the end of the world. Losing a dragon or two won\'t necesserily cost you the game. Losing the baron will put your team in a defensive posture, but one you can recover from. The inhibitors respawn after some time, and the nexus is relatively easy to kill, allowing for some comebacks to happen. And if your team is in a very dire situation, you could always surrender the game. The most frustrating experience is a game that you know you will lose, but where your (annonymous) teammates are holding you hostage by not surrerdering. This is a part of the LoL experience you accept by playing the game with anonymous people. From a beginners perspective, having strong towers that protect you, with a recall mechanic you can use if things get tough is a life saver, especially when you learn about the refillable potion that doesn\'t cost a lot.'
    'Dota, in comparison, is a much more ruthless experience. Out of all the games listed here, Dota is by far the game that is farthest away from the golden rule, while still remaining popular. There are many situations where you are defending your highground in a game you just know is losing. And you feel helpless to do anything about it. Since Dota is so ruthless, I believe that Dota players enjoy the winning part, the part where they get to choke out their opponents, so much that it justifies the miserable losing side. In this strange way, Dota circumvents the golden rule: It is an experience so ruthless, that a big win justifies a big loss. The game with the highest highs and the lowest lows.'
    'Chess & Starcraft / RTS games'
    'Poker (Texas Hold\'em)'
    'Street Fighter / Traditional fighting games & MultiVersus / Platform fighting games'
    'Fortnite / Battle royale games'

    data = F.endBody(data);
    data = F.newLine(data);

    return data;
}

module.exports = {
    generate
};
