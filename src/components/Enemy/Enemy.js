import React, { useState, useEffect } from "react";
import "./Enemy.css";

import Damage from "../Damage/Damage";

const Enemy = ({ id, name, health, damage, sprite, onClick, onDeath }) => {
  const [currentHealth, setHealth] = useState(health);
  const [currentAnimations, setAnimation] = useState([]);
  console.log(name, health, currentHealth);
  const displayDamageAnimation = animation => {
    const animations = <img src={animation} />;
    setAnimation([...currentAnimations, animations]);
    console.log("displaying damage", animation);
    console.log("displaying damage", currentAnimations);
  };
  useEffect(
    () => {
      setTimeout(function() {
        setAnimation([]);
        console.log("removing damage");
      }, 200);
    },
    [currentHealth]
  );
  const clickDamage = () => {
    const damageAnimationURL = "https://i.imgur.com/N52VYWr.gif";
    displayDamageAnimation(damageAnimationURL);

    const damageTaken = currentHealth - damage;
    console.log("damage taken", damageTaken, id);
    if (damageTaken < 0 || damageTaken === 0) {
      setHealth(0);
      return onDeath(id);
    }
    setHealth(damageTaken);

    onClick();
  };
  // const deadDisplay = currentHealth <= 0 ? "none" : "inline-block";
  console.log(name, health, currentHealth);
  return (
    <button className="Enemy" onClick={clickDamage}>
      <figure style={{ position: "relative" }}>
        <img src={sprite} alt={name} />
        <div
          className="animation"
          style={{ position: "absolute", top: 0, bottom: 0 }}
        >
          {currentAnimations}
        </div>
      </figure>
      {name}
    </button>
  );
};

export default Enemy;
