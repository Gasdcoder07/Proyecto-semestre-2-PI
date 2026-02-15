import { userState } from "react"
import "./Login.css"

export default function Login() {
    return (
        <div className="login-container">
            <form>
                <h1>Esto es un login</h1>
                <h4>Email</h4>
                <input type="email"></input>
                <br></br>
                <h4>Password</h4>
                <input type="password"></input>
                <br></br>
                <button>
                    Ingresar
                </button>
            </form>
        </div>       
    );
}
