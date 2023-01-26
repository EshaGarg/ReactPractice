import './App.css';
import React from 'react';

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

function Welcome(props) {
  return <h1>{props.name}</h1>
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}></UserInfo>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user}></Avatar>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

// function App() {
//   const user = {
//     firstName: "Esha",
//     lastName: "Garg"
//   };

//   function formatUser() {
//     return user.firstName + " " + user.lastName;
//   }
function App() {
  return (
    <div>
      <Welcome name='Sara'/>
      <Welcome name='Sana'/>
      <Welcome name='Sasha'/>
    </div>
  );
}


export default App;
