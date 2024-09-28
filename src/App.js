import React from "react";
import "./style.css"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date().toLocaleTimeString(),
    };

    // Setting up the interval
    this.intervalID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <>
        <div id="md">

          <div className="text" id="by"><img src="Assets/images/newborn.jpg"></img> <h3>Birth</h3> </div>
          <div className="text" id="m"><img src="Assets/images/landscape.jpg"></img><h3>Grown</h3></div>
          <div className="text" id="ma"><img src="Assets/images/wedding.webp"></img><h3>Main Part</h3></div>
          <div className="text" id="fa"><img src="Assets/images/family1.jpg"></img><h3>New Way</h3></div>
          <div className="text" id="ce"><img src="Assets/images/cemetery.jpg"></img><h3>Tension Free  </h3></div>
          
          <div id="mi">
          <h1>{this.state.time}</h1>
          </div>
        </div>
      </>
    );
  }
}

export default App;
