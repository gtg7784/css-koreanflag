import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        태극기
        <div className="flag">
          <div className="bars">
            <div className="geon">
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
            
            <div className="gam">
              <div className="bar">
                <div className="separate" />
              </div>
              <div className="bar" />
              <div className="bar">
                <div className="separate" />
              </div>
            </div>
          </div>

          <div className="middle">
            <div className="ovalwrap">
              <div className="oval" />
              <div className="oval" />
            </div>
          </div>

          <div className="bars">
            <div className="gon">
              <div className="bar" />
              <div className="bar">
                <div className="separate" />
              </div>
              <div className="bar" />
            </div>
            <div className="ri">
              <div className="bar">
                <div className="separate" />
              </div>
              <div className="bar">
                <div className="separate" />
              </div>
              <div className="bar">
                <div className="separate" />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
