import React, { useState } from "react";
import Overworld from "../Overworld/Overworld";
import Dungeon from "../Dungeon/Dungeon";
import config from "../../config/overworld";

export default function GameController() {
  const [currentLevel, setLevel] = useState(0);
  const [inDungeon, toggleDungeon] = useState(false);
  const level = config[currentLevel] ? config[currentLevel] : config[0];

  if (!inDungeon) {
    return (
      <Overworld currentLevel={currentLevel} toggleDungeon={toggleDungeon} />
    );
  } else {
    return <Dungeon level={level.dungeon.name} toggleDungeon={toggleDungeon} />;
  }
}
