import { userState } from "react"

export default function Login() {
    return (
        <div className="login-container">
            <h1>Esto es un login</h1>
            <input type="email" placeholder="Email"></input>
            <br></br>
            <input type="password" placeholder="Pass"></input>
        </div>       
    );
}
