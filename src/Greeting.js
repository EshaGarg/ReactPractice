import React from 'react';

export class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isLoggedIn) {
            return(
                <UserGreeting />
            )
        }
        return <GuestGreeting />
    }

    

}
function UserGreeting(props) {
    return <h1>User logged In</h1>
}

function GuestGreeting(props) {
    return <h1>Guest Logged In</h1>
}
