import React from "react"
import Splash from "../components/Splash"
import "../styles/index.css"

export default () => (
  <div className="gridContainer">
    <Splash />

    <div style={{ gridArea: "bio", backgroundColor: "blue" }}>Bio</div>
    <div
      style={{ gridArea: "projects", backgroundColor: "teal", height: "100%" }}
    />
  </div>
)
