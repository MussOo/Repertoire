import React, { useState, useEffect } from "react";
import "./accueil.scss";
import { index, deleta } from "../../../api/Repertoire";

export default function Accueil() {
  const [Repertoire, setRepertoire] = useState([]);
  const [load, setload] = useState(false);

  useEffect(() => {
    console.log("Accueil");
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
            <span className="email">
              <a href={"mailto:" + item.email}>Contacter</a>
            </span>
            <div className="action_item">
              <a
                className="delete"
                onClick={() => {
                  deleta(item._id);
                  setload(!load);
                }}
              >
                Delete
              </a>
            </div>
          </div>
        );
      });
      setRepertoire(list);
    });
  }, [load]);

  return (
    <div className="main">
      <div className="container_reportoire">
        {Repertoire}
        <div className="container_item">
          <a className="oneMore" href="repertoire/new">
            +
          </a>
        </div>
      </div>
    </div>
  );
}
