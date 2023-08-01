import React from "react";

class UserCardClass extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            count:0,
        };
        console.log(props);
    }
    render(){

        const {name,location} = this.props
        return(
            <div className="user-card">

                <h1>Name : {name}</h1>
                <button onClick={ () => {
                    this.setState({
                        count : this.state.count + 1,
                    });
                }}> Count</button>
                <h2>Count : {this.state.count}</h2>
                <h2>Location : {location}</h2>
                <h3>
                    Email: vishad1710@gmail.com
                </h3>

        </div>
        );
    }
}

export default UserCardClass;