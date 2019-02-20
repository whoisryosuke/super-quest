# React Super Quest

Click-based RPG inspired by Super Quest for iOS. Written using React (with hooks!), Redux, and NES.css.

## How to play

You can use [the full-screen version of CodeSandbox](https://zxx7w66244.codesandbox.io/), or download it and spin it up locally (requires internet for some assets).

## Development

I've been using [CodeSandbox](https://codesandbox.io/s/zxx7w66244) to develop the app, it's a web-based IDE.

You can also clone this project locally and run `npm run start` to use `react-scripts` to build a local environment.

### How it works

The app loads from `src/index.js`, which starts up an `<App>` component, wrapped in a Redux store (to manage global state). Inside the component, the `<GameController>` and `<UserMenu>` components are loaded. The Controller is basically a hand-written router to handle the transitons between routes such as the title screen or dungeons. The user menu displays the user's health and status.

The controller component loads the title screen first, which checks an existing Redux state, and offers a "Load Game" option (and offers "New Game", which wipes the Redux state).

Clicking either takes the player to the `<Overworld>` component, which uses the configuration file `config/overworld.js` to load and display the different "levels" of the game. The overworld component places a shop and dungeon icon on each "level", which use a callback from the controller to switch to the dungeon.

The dungeon component loads whichever dungeon is provided in the props from the dungeon config `config/dungeon.js`. Three enemies are loaded randomly from the config file, and placed in each "level" or floor of the dungeon.

## Credits

- [NES.css](https://github.com/nostalgic-css/NES.css)
- [Super Quest](https://itunes.apple.com/us/app/super-quest-spare-time-rpg/id1050429304?mt=8)
