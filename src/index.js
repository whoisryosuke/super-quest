import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import { healUser } from "./redux/actions";

import Frame from "./components/Frame/Frame";
import GameController from "./components/GameController/GameController";
import Overworld from "./components/Overworld/Overworld";
import Dungeon from "./components/Dungeon/Dungeon";
import UserMenu from "./components/UserMenu/UserMenu";
import "./styles.css";

/**
 * Heal the user every 10 seconds
 */
setInterval(function() {
  store.dispatch(healUser(100));
}, 10000);

/**
 * The main application wrapper
 */
function App() {
  return (
    <Provider store={store} className="App">
      <Frame>
        <GameController />
        <UserMenu />
      </Frame>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
