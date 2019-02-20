import React, { useState, useEffect } from "react";
import config from "../../config/overworld";
import "./Overworld.css";

export default function Overworld({ currentLevel, toggleDungeon }) {
  const currentLevelConfig = config[currentLevel]
    ? config[currentLevel]
    : config[0];
  const clickDungeon = dungeon => toggleDungeon(true, dungeon);

  const levels = config.map(level => (
    <div
      className="Level"
      id="one"
      style={{
        backgroundImage: `url(${level.background})`
      }}
    >
      <i
        className="nes-icon coin"
        style={{
          position: "absolute",
          top: level.shop.position.y,
          left: level.shop.position.x
        }}
      />
      <img
        src="https://i.imgur.com/NUJDesD.png"
        style={{
          width: "32px",
          height: "auto",
          position: "absolute",
          top: level.dungeon.position.y,
          left: level.dungeon.position.x
        }}
        onClick={() => clickDungeon(level.dungeon.name)}
      />
    </div>
  ));

  return <div className="Overworld">{levels}</div>;
}
