import "./errorElement.css"
import { useRouteError } from "react-router-dom"

const ErrorMess = () =>{
    const errMess = useRouteError()
    return(<>
        <div className="error-box">
            <h1>OOps !!</h1>
            <h2>Some thing went wrong ....</h2>
            <h2>{errMess.status} : {errMess.statusText}</h2>
        </div>
    </>)
}

export default ErrorMess