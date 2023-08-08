import { useState } from "react";

const UserCard = (props) => {

    const [count,setCount] = useState(0);

    const {name,Location} = props;

    return (
        <div className="user-card mb-4 pl-2 bg-orange-200 rounded-lg">

            <h1 className="font-bold text-xl">Name : {name}</h1>
            <button className="border-solid bg-orange-300 rounded-lg m-4" onClick={()=>{
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