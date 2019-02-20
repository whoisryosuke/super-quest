import React, { useState, useEffect } from "react";
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
    <div className="Overworld">
      <div
        className="Level"
        id="one"
        style={{
          backgroundImage: `url(${level.background})`
        }}
      >
        {shop}
        {dungeon}
      </div>
      <div
        className="Level"
        id="two"
        style={{
          backgroundImage: `url(${level.background})`
        }}
      >
        {shop}
        {dungeon}
      </div>
    </div>
  );
}
