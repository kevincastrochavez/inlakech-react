import React from "react";
import { auth } from "../../firebase";
import Type from "./Type";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="typesContainer">
        <Type title="Planta" icon="https://via.placeholder.com/50x50" />
        <Type title="Maceta" icon="https://via.placeholder.com/50x50" />
        <Type title="Colgante" icon="https://via.placeholder.com/50x50" />
      </div>

      <div className="infoContainer">
        <input />
        <input />
        <input />
        <img src="" alt="" />
      </div>

      <button onClick={() => auth.signOut()}>Salir</button>
    </div>
  );
}

export default Dashboard;
