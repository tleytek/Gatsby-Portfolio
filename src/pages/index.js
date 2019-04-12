import React from "react"
import Splash from "../components/Splash"
import Bio from "../components/Bio"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import "../styles/index.css"
import "../styles/reset.css"

export default () => (
  <div>
    <Navbar />
    <div className="gridContainer">
      <Splash />
      <Bio />
      <Projects />
    </div>
  </div>
)
