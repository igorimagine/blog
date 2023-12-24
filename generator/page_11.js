const F = require('./functions');

function generate(data, permalink, title, date) {
    data = F.addPermalink(data, permalink);
    data = F.headerBody(data, title, date);
    data = F.newLineSpace(data);

    data = F.addSentence(data, 'TODO - Formatting');
    data = F.addSentence(data, 'A week ago, Stormgate had a huge gameplay reveal in the form of a showmatch tournament [2]. First TLO played against Mana. Mana won. Then Mana played against the final boss of the internet, Moon. Mana won again. TLO and Mana are Starcraft 2 stars [1], while Moon is a Warcraft 3 legend. Mana was crowned as the first showmatch tournament champion.');
    data = F.addSentence(data, 'My feelings towards this tournament are... mixed.');
    data = F.addSentence(data, 'First, a little detour. This is how some industry legends feel about Stormgate: [3]');
    data = F.addSentence(data, '- Thorin feels that, much like Quake, serious 1vs1 games will go the way of the dodo, that is to say, be banished into obscurity, only for hardcore fans to enjoy. He didn\'t comment on the coop/team games power of RTS games.');
    data = F.addSentence(data, '- Artosis feels that the moment Stormgate gets released, it will kill Starcraft for good');
    data = F.addSentence(data, '- Day9 is much more optimistic, believing that a rising tide will lift all boats. He believes that Stormgate will also help Starcraft\'s popularity, citing that when Valorant was released, Counter-Strike became more popular as well [4]');
    data = F.addSentence(data, '- ZombieGrub feels optimistic towards Stormgate. This is expected, of course, since Stormgate will be a natural continuation of her career as an RTS expert');
    data = F.addSentence(data, '- Richard Lewis is worried about monetization options for a free RTS game, but he promised he will experiment with the game once it\'s released');
    data = F.addSentence(data, 'The first showmatch tournament makes me think that Thorin is right. Let us not forget our history. When Starcraft: Brood War was the king of esports, custom maps [5] helped casual players fit in. "Fastest map possible" maps were extremely popular, allowing players to focus on the more fun aspects of the RTS genre, attack moving with a giant army being the primary focus of most casual players. It is no secret that most casual players prefer to play RTS campaigns in exactly this way: Build up an army, then destroy a hapless opponent with it. After a hard day in school/work/whatever, you might as well.');
    data = F.addSentence(data, 'Warcraft 3 revolutionized custom maps, Dota rising up as chief among them, but various tower defense (TD) maps not falling too far behind. Variations like "Footman Frenzy" offered a simplified RTS experience. When League of Legends showed up, a new game from the unknown studio Riot Games, it simplified the Dota formula even further. For example, it completely removed the deny mechanic and added a big "Oops I fucked up" button in the form of flash, a long cooldown "summoner spell" you have from the very start of the match.');
    data = F.addSentence(data, 'Stormgate wants us to forget games like Dota and League, and come crawling back to a much more complex, dynamic experience. At least up to a point. The producers are betting on the following:');
    data = F.addSentence(data, '- Release a free game with a polished campaign that attracts eyeballs');
    data = F.addSentence(data, '- After you are satisfied with the campaign, try the hardcore 1vs1 mode');
    data = F.addSentence(data, '- If it is too much for you or you need a break, try co-op or playing a team game');
    data = F.addSentence(data, '- Try custom games that offer a plethora of varied experiences, from simplified RTS styles to tower defense games');
    data = F.addSentence(data, '- If you have a creative tooth, try the map editor that is smoothly integrated into the game itself [6]');
    data = F.addSentence(data, 'Questions we need to ask ourselves are:');
    data = F.addSentence(data, '- Just how important is the hardcore 1vs1 experience to the overall popularity of the game?');
    data = F.addSentence(data, '- How big is the hardcore population?');
    data = F.addSentence(data, '- Can the TikTok generation slowly become more and more hardcore, as it becomes exposed to more and better hardcore experiences?');
    data = F.addSentence(data, 'These are not just mere philosophical questions. Millions and millions of dollars depend on the answers to these questions.');
    data = F.addSentence(data, 'My gut feeling is that the 1vs1 mode will be less popular than expected. It will fail to capture the imagination of the youth, used to much simpler, more accessible experiences. But what will be the ramifications to the rest of the game, say, custom games? It is too difficult to predict. Frost Giant believe they have an ace in their sleeve. And who am I to say they are wrong? My job is software engineering, and their job is creating the future of RTS. Between them and me, it is more likely that they are right.');
    data = F.addSentence(data, 'I didn\'t even touch monetization, or Stormgate\'s effect on Starcraft, but I leave that for another time.');
    data = F.addSentence(data, 'Notes');
    data = F.addSentence(data, '[1] TLO was especially potent at the beginning of Starcraft 2, playing Random at a high level before feeling forced to switch to Zerg, only to fade into obscurity because the rest of the field caught up to him and surpassed him');
    data = F.addSentence(data, '[2] You can watch it on ESL\'s youtube channel: https://www.youtube.com/watch?v=334yPNYnPqc');
    data = F.addSentence(data, '[3] Opinions gathered within the last couple of months');
    data = F.addSentence(data, '[4] I have seen no evidence for this claim, but I trust Day9');
    data = F.addSentence(data, '[5] I am using the highly popular Warcraft 3 term on purpose. Technically, in the Brood War era, these were UMS maps (Use Map Settings)');
    data = F.addSentence(data, '[6] Not that having two separate launchers was ever an issue for the Starcraft and Warcraft communities, but I digress');
    
    data = F.newLine(data);
    data = F.endBody(data);
    data = F.newLine(data);

    return data;
}

module.exports = {
    generate
};
