import React, { Component } from 'react';
import './App.css';
import Background from './crown.png';
import { Icon } from 'antd';

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundSize:"72% 100%",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"50% 30%",


};
class App extends Component {
  render() {
    return (
      <div className="App" style={sectionStyle}>
          <div className="header">
          <div className="icons-list" >
          <Icon type="align-left" spin="true"  twoToneColor="#ffffff"  style={{ fontSize: '32px' }} />
          </div>
      <div className="logo"> GingerNote</div>
              <div className="icons-list2" >
              <Icon type="user"  style={{ fontSize: '32px' }} />
                  <Icon type="search"  style={{ fontSize: '32px' }}/>
              </div>
          </div>


          <header className="App-header">
          <div className="prankcallersmasqu"> The complex made simple.</div>
      <div className="button"> Get Started</div>
          </header>
      </div>
    );
  }
}

export default App;
