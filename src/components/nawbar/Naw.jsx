
import "./Naw.css";
import { Link } from "react-router-dom";


import React, { useState } from 'react'


function Naw() {
   const [active, setActive] = useState(false);

  const text = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="fix ">
        <div className="pas">
          <div className="container mat">
            <div className="naw">
              <div className="left">
                <h1>
                  gym<span>.</span>
                </h1>
              </div>
              <div className="right">
                <button onClick={text}>=</button>
              </div>
            </div>
            <ul className={`center ${active ? "navAc" : null}`}>
              <li>
                <Link to="#">headar</Link>
              </li>
              <li>
                <Link to="#">features</Link>
              </li>
              <li>
                <Link to="#">offer</Link>
              </li>
              <li>
                <Link to="#">about</Link>
              </li>
              <li>
                <Link to="#">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Naw

