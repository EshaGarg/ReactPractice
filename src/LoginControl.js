import React from 'react';
import { Greeting } from './Greeting';

export class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    // handleClick = () => {
    //     this.setState({isLoggedIn: !this.state.isLoggedIn})
    // }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false})
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true})
    }

    // logout = () => {
    //     return <LogoutButton onClick={this.handleClick} />
    // }

    // login = () => {
    //     return <LoginButton onClick={this.handleClick} />
    // }

    render() {
        console.log("isLoggedIn: ", this.state.isLoggedIn)
        // let button;
        // if (!this.state.isLoggedIn) {
        //     button = <LoginButton onClick={this.handleLoginClick} />
        // } else {
        //     button = <LogoutButton onClick={this.handleLogoutClick} />
        // }
        // return (
        //     <div>
        //         <Greeting isLoggedIn={this.state.isLoggedIn} />
        //         {this.state.isLoggedIn ? this.logout(): this.login()}
        //     </div>
        // )
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {this.state.isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick}/> : <LoginButton onClick={this.handleLoginClick}/>}
            </div>
        )
    }
} 

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>
}