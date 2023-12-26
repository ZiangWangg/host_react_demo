import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import logo from "../src/image/logo512.png"

ReactDOM.render(
    <>
    <nav className="header">
        <img src={logo}></img>
       <div> 
        <a>First</a>
        <a>Second</a>
        </div>
    </nav>
    <h3>Having fun</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
    </>
    ,
    document.getElementById("root")
)