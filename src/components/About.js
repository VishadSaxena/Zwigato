import React from "react";
import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

class About extends React.Component{

    constructor(props){
        super(props);
        //console.log("Parent Constructor");
    }


    componentDidMount(){
        //console.log("Parent Component did Mount");
    }

    render(){
       // console.log("Parent Render");

        return(
            <div className="m-4">
                <h1 className="text-xl">
                    This is a Food Delivery service provider company.
                </h1>
                <UserCard name={"Vishad (function)"} Location={"Lucknow(function)"}/>
                <UserCardClass />
            </div>
        );
    }
}

export default About;