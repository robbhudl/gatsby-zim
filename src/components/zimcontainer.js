import React, { Component } from "react"
import "../../node_modules/@danzen/createjs/create"
import "../../node_modules/zimjs/zim"

// ZIM and CreateJS are imported in the main script...

export default class ZIMContainer extends Component {
  componentDidMount() {
    // or set size in React and do not add dimensions here

    const frame = new Frame(this.zimRootElement.id, 1024, 768)

    frame.on("ready", () => {
      const stage = frame.stage

      const stageW = frame.width

      const stageH = frame.height

      // code here
      new Circle(60, "red").center();

      stage.update()
    })
  }

  render() {
    return <div ref={element => (this.zimRootElement = element)} />
  }
}