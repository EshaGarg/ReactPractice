import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Toggle } from './Toggle';
import { Greeting } from './Greeting';
import { LoginControl } from './LoginControl';
import { NumbersList } from './NumbersList';

const root = ReactDOM.createRoot(document.getElementById('root'));


// function Welcome(props) {
//   return <h1>{props.name}</h1>
// }

// function tick() {
//   const element = (
//     <div>
//       <h1>Welcome</h1>
//       <div>{new Date().toLocaleTimeString()}</div>
//     </div>
//   );
//   root.render(element);
// }

// function Clock(props) {
//   return (
//     <div>
//       <h1>Welcome</h1>
//       <div>{props.state.date.toLocaleTimeString()}</div>
//     </div>
//   )
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    )
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
}

const numbers = [1,2,3,4,5];
root.render(
  <React.StrictMode>
    <div>
    {/* <Clock />
    <App />
    <Toggle />
    <Greeting isLoggedIn={true} /> */}
    <LoginControl />
    <NumbersList numbers={numbers} />
    </div>
  </React.StrictMode>
);


// setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
