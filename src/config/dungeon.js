const dungeons = {
  cave: {
    name: "Cave",
    background: "https://i.imgur.com/9yweikg.gif",
    enemies: [
      {
        name: "Bomb",
        health: 250,
        damage: 25,
        sprite: "https://i.imgur.com/HTKOfZW.gif"
      },
      {
        name: "Red Eye",
        health: 275,
        damage: 25,
        sprite: "https://i.imgur.com/B6GsZeL.gif"
      },
      {
        name: "Goblin",
        health: 300,
        damage: 35,
        sprite: "https://i.imgur.com/gasUwD2.gif"
      }
    ]
  },
  ice_cavern: {
    name: "Ice Cavern",
    background: "http://illiaworld.files.wordpress.com/2012/01/icecave.png",
    enemies: [
      {
        name: "Ice Lizard",
        health: 500,
        damage: 50,
        sprite:
          "http://www.videogamesprites.net/FinalFantasy4/Enemies/IceLizard.gif"
      },
      {
        name: "Crawler",
        health: 600,
        damage: 60,
        sprite:
          "http://www.videogamesprites.net/FinalFantasy4/Enemies/Crawler.gif"
      },
      {
        name: "Mithril Ogre",
        health: 600,
        damage: 70,
        sprite:
          "http://www.videogamesprites.net/FinalFantasy4/Enemies/MythrilGolem.gif"
      }
    ]
  }
};

export default dungeons;
