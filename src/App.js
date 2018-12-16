import React, { Component } from 'react';
import './App.css';
import Background from './background.png';
var sectionStyle = {
    width: "100%",
    height: "100%",
// makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background})`,
    paddingTop:"40px",
    paddingRight:"150px",
    paddingLeft:"100px",
    backgroundSize:"100% 100%",
    backgroundRepeat:"no-repeat",
};
class App extends Component {
  render() {
    return (
      <div className="App" style={sectionStyle}>
        <header className="App-header">
<div >
          <p>
           The complex made simple.We help you take a note efficiently.
          </p>
    <p> Gingerbread Man</p>
</div>
        </header>
      </div>
    );
  }
}

export default App;
