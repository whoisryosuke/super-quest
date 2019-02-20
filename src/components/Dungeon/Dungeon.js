import React, { useState } from "react";
// import { connect } from "react-redux";
import store from "../../redux/store";
import "./Dungeon.css";

import { damageUser } from "../../redux/actions";

import dungeons from "../../config/dungeon";
import Enemy from "../Enemy/Enemy";

const handleClickDamage = damage => {
  store.dispatch(damageUser(damage));
};

// Defaults to 3 enemies per level,
// and create an array of random values to pick enemies
const defaultEnemyCount = () => [
  Math.floor(Math.random() * 3),
  Math.floor(Math.random() * 3),
  Math.floor(Math.random() * 3)
];

function Dungeon({ level, damageUser, toggleDungeon }) {
  // 🎣 React hooks for state
  const [currentEnemies, setEnemyCount] = useState(defaultEnemyCount());
  const [currentLevel, setLevel] = useState(1);

  // Callback for sending user back to overworld
  const clickOverworld = () => toggleDungeon(false);

  // Generates next level when user decides
  const nextLevel = () => {
    setLevel(currentLevel + 1);
    setEnemyCount(defaultEnemyCount());
  };

  // Callback when enemy dies to change state
  const enemyDeath = id => {
    const remainingEnemies = currentEnemies.filter((_, i) => i != id);
    console.log("remaining enemies", remainingEnemies);
    setEnemyCount(remainingEnemies);
  };

  // Set the current dungeon
  const theDungeon = dungeons[level];

  // Generate random enemies for each new level
  const enemies = currentEnemies.map((enemyId, index) => {
    const enemy = theDungeon.enemies[enemyId];
    return (
      <Enemy
        {...enemy}
        id={index}
        key={`${enemy.name}-${index}`}
        onClick={() => handleClickDamage(enemy.damage)}
        onDeath={enemyDeath}
      />
    );
  });
  console.log("dungeon re-rendering", currentEnemies);
  return (
    <div
      className="Dungeon"
      style={{
        backgroundImage: `url(${theDungeon.background})`
      }}
    >
      <span style={{ color: "white" }}>Level {currentLevel}</span>
      {currentEnemies.length > 0 ? (
        <div style={{ width: "100%", padding: "3em 0" }}>{enemies}</div>
      ) : (
        <div>
          <div className="nes-container is-rounded">
            <p>You win!</p>
          </div>
          <button className="nes-btn is-success" onClick={nextLevel}>
            Next Level
          </button>
        </div>
      )}
      <div className="Dungeon__BackBtn">
        <button className=" nes-btn is-warning" onClick={clickOverworld}>
          Back to overworld
        </button>
      </div>
    </div>
  );
}

// export default connect(null, { damageUser })(Dungeon);
export default Dungeon;
