import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1> Oops!!!</h1>
            <h2> There seems to be some trouble!!!</h2>
        </div>
    );
}

export default Error;