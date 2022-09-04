const F = require('./functions');

function generate(data, permalink, title, date) {
    data = F.addPermalink(data, permalink);
    data = F.headerBody(data, title, date);
    data = F.newLine(data);

    'I spend a lot of time thinking about esports and what makes each game tick. What would happen if we changed this or that aspect of the games design? Why is one game more popular than some other game? What would it take to reverse that? Why do some games last for a long time while others fall off the radar?'
    'There are many rules and guidelines one should follow when designing a competitive game, but I believe one trumps them all.'
    'The golden rule of competitive game design:'
    'When playing a competitive game with balanced match making, you are losing 50% of the time. Therefore, the game should still be fun while losing.'
    'Let\'s explore this rule trough some comparisons.'

    data = F.endBody(data);
    data = F.newLine(data);

    return data;
}

module.exports = {
    generate
};
