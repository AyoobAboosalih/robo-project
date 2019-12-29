import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import BigCard from './BigCard';
import 'tachyons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourname: '',
      mode: 'light-mode'
    }
    console.log(this.props)
  }

  setMode = () => {
    this.state.mode === 'light-mode' ?
      this.setState({
        mode: 'dark-mode'
      }) :
      this.setState({
        mode: 'light-mode'
      })


  }


  onSearchChange = (event) => {

    this.setState({ yourname: event.target.value });
  }

  render() {
    return (
      <div className={this.state.mode}>
        <nav>
          <div className="toggle-container">
            <span style={{
              color: this.state.mode === 'dark-mode' ? "grey" :
                "yellow"
            }}>&#x2600;</span>
            <span className="toggle">
              <input
                onChange={this.setMode}
                type="checkbox"
                id="checkbox"
                className="checkbox"
              />
              <label htmlFor="checkbox" />
            </span>
            <span style={{
              color: this.state.mode === 'dark-mode' ? "yellow" :
                "grey"
            }}>&#x263E;</span>
          </div>
        </nav>
        <h1> Find My Robo Image </h1>
        <SearchBox  SearchBoxMode={this.state.mode} searchChange={this.onSearchChange} />

        <BigCard BigCardMode={this.state.mode} yourname={this.state.yourname} />


      </div>
    );
  }
}

export default App;
