import React, { useState } from "react";
import config from "../../config/overworld";
import "./Overworld.css";

export default function Overworld({ currentLevel, toggleDungeon }) {
  const level = config[currentLevel] ? config[currentLevel] : config[0];
  const clickDungeon = () => toggleDungeon(true);
  const shop = (
    <img
      src={level.shop.icon}
      style={{
        width: "32px",
        height: "auto",
        position: "absolute",
        top: level.shop.position.y,
        left: level.shop.position.x
      }}
    />
  );
  const dungeon = (
    <img
      src="https://i.imgur.com/NUJDesD.png"
      style={{
        width: "32px",
        height: "auto",
        position: "absolute",
        top: level.dungeon.position.y,
        left: level.dungeon.position.x
      }}
      onClick={clickDungeon}
    />
  );

  return (
    <div
      className="Overworld"
      style={{
        backgroundImage: `url(${level.background})`,
        position: "relative"
      }}
    >
      {shop}
      {dungeon}
    </div>
  );
}
