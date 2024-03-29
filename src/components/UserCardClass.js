import React from "react";

class UserCardClass extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            userInfo : {
                name : "dummy",
                location : "default",
            }, 
        };
       // console.log(this.props.name + " Child Constructor");
    }

    async componentDidMount(){

        const data = await fetch(" https://api.github.com/users/VishadSaxena");
        const json = await data.json();

        this.setState({
            userInfo : json,
        })
        //console.log(this.props.name + " Child Component did Mount");
        console.log(json);
    }

    render(){

        //console.log(this.props.name + " Child Render");

        const {name,location,avatar_url } = this.state.userInfo;
        
        return(
            <div className="user-card mb-4 pl-2 bg-orange-200 rounded-lg">
                <img className="logo w-10" src={avatar_url}/>
                <h1 className="font-bold text-xl">Name : {name}</h1> 
                <h2>Location : {location}</h2>
                <h3>
                    Email: vishad1710@gmail.com
                </h3>

        </div>
        );
    }
}

export default UserCardClass;