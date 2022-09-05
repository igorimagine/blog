const F = require('./functions');

function generate(data, permalink, title, date) {
    data = F.addPermalink(data, permalink);
    data = F.headerBody(data, title, date);
    data = F.newLineSpace(data);

    data = F.addSentence(data, 'I spend a lot of time thinking about esports and what makes each game tick. What would happen if we changed this or that aspect of the games design? Why is one game more popular than some other game? What would it take to reverse that? Why do some games last for a long time while others fall off the radar?');
    data = F.addSentence(data, 'There are many rules and guidelines one should follow when designing a competitive game, but I believe one trumps them all.');
    data = F.startBoldUnderline(data);
    data = F.addSentence(data, 'The golden rule of competitive game design:');
    data = F.addSentence(data, 'When playing a competitive game with balanced match making, you are losing 50% of the time. Therefore, the game should still be fun while losing.');
    data = F.endBoldUnderline(data);
    data = F.addSentence(data, 'Let\'s explore this rule trough some games.');
    data = F.startBoldItalic(data);
    data = F.addSentence(data, 'Quake 3 Arena vs Counter-Strike & Valorant');
    data = F.endBoldItalic(data);
    data = F.addSentence(data, 'In Quake you play continously, fighting for resources on the map. The game can be frustrating to play against a stronger oponent, but you can still enjoy the mechanical aspects, such as bunny hopping and aiming.');
    data = F.addSentence(data, 'Counter-Strike is played in rounds, and the time to kill (ttk) is low, so you can always get lucky and kill someone in unorganised play. Even when you are losing, if you get some good shots off, especially if you pull off a clutch against stronger players, you will have fun. Over all, I would say that Counter-Strike is more fun to play when losing than Quake is.')
    data = F.addSentence(data, 'Valorant follows the Counter-Strike formula.')
    data = F.addSentence(data, 'League vs Dota');
    data = F.addSentence(data, 'Losing in LoL is quite a frustrating experience, but it isn\'t the end of the world. Losing a dragon or two won\'t necesserily cost you the game. Losing the baron will put your team in a defensive posture, but one you can recover from. The inhibitors respawn after some time, and the nexus is relatively easy to kill, allowing for some comebacks to happen. And if your team is in a very dire situation, you could always surrender the game. The most frustrating experience is a game that you know you will lose, but where your (annonymous) teammates are holding you hostage by not surrerdering. This is a part of the LoL experience you accept by playing the game with anonymous people. From a beginners perspective, having strong towers that protect you, with a recall mechanic you can use if things get tough is a life saver, especially when you learn about the refillable potion that doesn\'t cost a lot.');
    data = F.addSentence(data, 'Dota, in comparison, is a much more ruthless experience. Out of all the games listed here, Dota is by far the game that is farthest away from the golden rule, while still remaining popular. There are many situations where you are defending your highground in a game you just know is losing. And you feel helpless to do anything about it. Since Dota is so ruthless, I believe that Dota players enjoy the winning part, the part where they get to choke out their opponents, so much that it justifies the miserable losing side. In this strange way, Dota circumvents the golden rule: It is an experience so ruthless, that a big win justifies a big loss. The game with the highest highs and the lowest lows.');
    data = F.addSentence(data, 'Chess & Starcraft / RTS games');
    data = F.addSentence(data, 'Chess is a game full of imbalances, say, one player having a knight and a slight lead in development versus another player having a bishop. The intricacy of the game comes from understanding these imbalances to come up with a game plan and executing it to win the game. Having a lost position puts you in a defensive posture, but there are often opportunities to pounce back with sharp play. When the situation gets dire, you can always resign. Chess is fun when losing, and this is precisely what we expect from a game with such tremendous longevity and legacy.');
    data = F.addSentence(data, 'Starcraft is similar to chess, but in real time. Losing isn\'t pleasant, but the opportunity to come back is usually just around the corner. One should also note that one player often has the build order advantage over the other one, but that usually isn\'t enough to outright win the game. You can always resign from a lost game. These Starcraft observations pretty much generalise to other RTS games.');
    data = F.addSentence(data, 'Poker');
    data = F.addSentence(data, 'Tournament poker is about taking your opportunities before the clock runs out and the blinds become too big. A loss of chips, even half of your stack, doesn\'t guarantee that you are out of the tournament. You can always claw yourself back. Losing is mostly frustrating when it\'s on the bubble, but poker is such a long term game that grinders are used to it.');
    data = F.addSentence(data, 'Cash games should never be played for an amount you can\'t financially handle, and they are much much grindier than tournaments. Winning or losing is somewhat opaque, as cash games are very long term affairs.');
    data = F.addSentence(data, 'It is difficult to assess the golden rule when it comes to gambling, at least the poker grinding side of gambling');
    data = F.addSentence(data, 'Magic the Gathering / Legends of Runeterra');
    data = F.addSentence(data, 'Constructed Magic usually has a triangle model, that is, aggro < mid range < control < aggro. Sometimes this can be frustrating if you feel a matchup is unplayable, especially if you are on the draw. But the game is dynamic enough to be fun, the deck building element requires strong analytical skills, and you can always scoop in a dead lost position. Coming back from a lost position can be especially satisfying, much like it is in chess or RTS games. Magic follows the golden rule, as we expect from a game with such legacy.');
    data = F.addSentence(data, 'LoR, instead of having a triangle model, has matchup tables, where some matchups are 55:45 favorites compared to others. Other than that, it is similar to Magic when it comes to the golden rule. It\'s fun even when losing.');
    data = F.addSentence(data, 'Street Fighter / Traditional fighting games & MultiVersus / Platform fighting games');
    data = F.addSentence(data, 'Fighting games (say, Street Fighter) use a round system where, if you lose a round, you can always win the next one. And, when losing within a round, you can always try to string together a couple of combos to come back and steal it. Games like these definitely follow the golden rule.');
    data = F.addSentence(data, 'Platform fighting games like MultiVersus are so fast and hectic that you don\'t even care if you are winning or losing.');
    data = F.addSentence(data, 'Fortnite / Battle royale games');
    data = F.addSentence(data, 'Battle royale games are strange from the perspective of the golden rule. Losing means that you died, and that you are in a massive field of players that also died. When this happens, you just try again. Whether losing is fun or not is an extension of the question if playing in the first place is fun or not. In every battle royale game that is popular, answer to both questions will surely be yes, the game is fun. So, in a sense, battle royale games circumvent the golden rule.');

    data = F.newLine(data);
    data = F.endBody(data);
    data = F.newLine(data);

    return data;
}

module.exports = {
    generate
};
