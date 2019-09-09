import React, { Component } from "react"
import "../../node_modules/@danzen/createjs/create"
import "../../node_modules/zimjs/zim"

// CreateJS (create.js) and ZIM (zim.js) should be imported in the main script... ...but how?

export default class ZIMContainer extends Component {
  componentDidMount() {
    // or set size in React and do not add dimensions here

    const frame = new Frame(this.zimRootElement.id, 1024, 768)

    frame.on("ready", () => {
      const stage = frame.stage

      const stageW = frame.width

      const stageH = frame.height

      // ZIM code here
      new Circle(60, "red").center().drag();

      stage.update()
    })
  }

  render() {
    return <div ref={element => (this.zimRootElement = element)} />
  }
}