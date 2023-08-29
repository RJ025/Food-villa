// this gives us error without giving error on console
import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const {status , data} = useRouteError();

    return (
        <h2>{status +":" + data}</h2>
    )
}

export default Error;