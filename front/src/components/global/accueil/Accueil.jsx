import React, { useState, useEffect } from "react";
import "./accueil.scss";
import { index } from "../../../api/Repertoire";

export default function Accueil() {
  const [Repertoire, setRepertoire] = useState([]);

  useEffect(() => {
    index().then((res) => {
      let data = res.data;

      // map data creete div in case
      let list = data.map(function (item, key) {
        console.log(item);
        return (
          <div className="container_item" key={key}>
            <h3>
              <a href={"repertoire/" + item._id}>{item.name}</a>
            </h3>
            <span className="numero">{item.numero}</span>
            <span className="email">{item.email}</span>
          </div>
        );
      });

      console.log(list);
      setRepertoire(list);
    });
  }, []);

  return (
    <div className="main">
      <div className="container">{Repertoire}</div>
    </div>
  );
}
