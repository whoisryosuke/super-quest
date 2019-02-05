import React, { useState } from "react";

import Damage from "../Damage/Damage";

const Enemy = ({ id, name, health, damage, sprite, onClick, onDeath }) => {
  const [currentHealth, setHealth] = useState(health);
  console.log(name, health, currentHealth);
  let damageAnimation = [];
  const displayDamageAnimation = animation => {
    // setTimeout(function() {
    //   damage = "";
    //   console.log("removing damage");
    // }, 100);
    damageAnimation.push(<Damage animation={animation} />);
    console.log("displaying damage", damageAnimation);
  };
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
    <button
      style={{
        background: "transparent",
        border: 0,
        color: "#FFF"
        // display: deadDisplay
      }}
      onClick={clickDamage}
    >
      <figure style={{ position: "relative" }}>
        <img src={sprite} alt={name} />
        {damageAnimation}
      </figure>
      {name}
    </button>
  );
};

export default Enemy;
