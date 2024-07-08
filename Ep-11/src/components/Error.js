import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops..</h1>
            <h3>Something Went Wrong</h3>
            <h4>Error : {error.status} {error.statusText}</h4>
        </div>
    )
}

export default Error;