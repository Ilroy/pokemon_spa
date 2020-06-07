import React from "react";
import "./BackCard.css";
import Pie from "../Pie/Pie";


const BackCard = ({abilities, stats, types }) => {
  return (
    <div className="back-card">
      <span style={{alignSelf: "center", paddingTop: "5px", fontWeight: "bolder"}}>Base Stats</span>
      <Pie
      stats={stats}
      />
      <span>
        {`Types: ${(types.map((type) => type.name)).join(", ")}`}
      </span>
      <span> Evolution: WIP </span>
      <span>
        {`Abilities: ${(abilities.map((ability) => ability.name)).join(", ")}`}
      </span>
    </div>
  );
};


export default BackCard;
