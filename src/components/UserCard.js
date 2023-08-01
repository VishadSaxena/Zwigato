import { useState } from "react";

const UserCard = (props) => {

    const [count,setCount] = useState(0);

    const {name,Location} = props;

    return (
        <div className="user-card">

            <h1>Name : {name}</h1>
            <button className="btn-modify" onClick={()=>{
                setCount(count+1);
            }}> Count </button>
            <h2> Count : {count}</h2>
            <h2>Location : {Location}</h2>
            <h3>
                Email: vishad1710@gmail.com
            </h3>

        </div>
    );
}

export default UserCard;