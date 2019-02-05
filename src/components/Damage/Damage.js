import React from "react";

export default class Damage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      damage: ""
    };
  }
  removeDamage() {
    this.setState({ damage: "" });
  }
  handleDamage() {
    const { animation } = this.props;
    const damageAnimation = <img src={animation} />;
    this.setState({ damage: damageAnimation }, () => {
      this.removeDamage();
    });
  }
  render() {
    const { damage } = this.state;
    return (
      <figure style={{ position: "absolute", top: "0", left: "0" }}>
        {damage}
      </figure>
    );
  }
}
