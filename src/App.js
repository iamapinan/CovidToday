import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor (props) {
    super()
    this.state = {
      today: {}
    }
  }
  getcovid () {
    axios.get('https://covid19.th-stat.com/api/open/today')
    .then(rs => rs.data)
    .then(covid => {
      this.setState({ today: covid })
    })
  }

  componentDidMount() {
    this.getcovid()
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Covid 19 New case today is <span className='text-danger'>{this.state.today.NewConfirmed}</span> people.
          <br/>Total case <span className='text-warning'>{this.state.today.Confirmed}</span> and recovered <span className='text-success'>{this.state.today.Recovered}</span></p>
          <br/>
          New Deaths {this.state.today.NewDeaths}
        </header>
        <p>Last updated {this.state.today.UpdateDate} <br/> Data source from&nbsp;
        <a
          className="App-link"
          href="https://covid19.th-stat.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://covid19.th-stat.com/
        </a> <br/>This project is opensource &nbsp;
        <a 
        href="https://gitlab.com/apinan/covidetoday" 
        rel="noopener noreferrer" 
        target="_blank" 
        class="App-link">https://gitlab.com/apinan/covidetoday</a></p>
      </div>
    );
  }
}
