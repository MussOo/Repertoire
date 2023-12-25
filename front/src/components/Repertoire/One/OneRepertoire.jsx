import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./onerepertoire.scss";
import { getOne } from "../../../api/Repertoire";
import { Blocks } from "react-loader-spinner";

export default function Repertoire() {
  let { id } = useParams();
  const [Repertoire, setRepertoire] = useState([]);

  useEffect(() => {
    getOne(id).then((res) => {
      if (res.status === 401) return (window.location.href = "/login");

      if (res.status === 200) {
        let data = res.data.data[0];

        let repertoire = (
          <>
            {" "}
            <h3>{data.name}</h3>
            <span className="numero">{data.numero}</span>
            <span className="email">
              <a href={"mailto:" + data.email}>Contacter</a>
            </span>
          </>
        );
        setRepertoire(repertoire);
      }
    });
  }, []);

  return (
    <div className="main">
      <div className="container_one">
        {Repertoire ? (
          Repertoire
        ) : (
          <Blocks
            height="50"
            width="50"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        )}
      </div>
    </div>
  );
}
