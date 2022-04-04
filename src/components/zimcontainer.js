import React, { Component } from "react"
import { useRef, useState, useEffect } from "react"

import makeCreateJS from "createjs/builds/1.0.0/createjs.js";
window.createjs = makeCreateJS();
const makeZIM = require('zimjs');
const zim = makeZIM(true);

export default class ZIMContainer extends Component {
  componentDidMount() {
    // or set size in React and do not add dimensions here

    const frame = new zim.Frame(this.zimRootElement.id, 1024, 768)

    frame.on("ready", () => {
      const stage = frame.stage

      const stageW = frame.width

      const stageH = frame.height

      // ZIM code here
      new zim.Circle(60, "red").center().drag();

      stage.update()
    })
  }

  render() {
    return <div ref={element => (this.zimRootElement = element)} />
  }
}
