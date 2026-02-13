import { userState } from "react"
import "./Login.css"

export default function Login() {
    return (
        <div className="login-container">
            <form>
                <h1>Esto es un login</h1>
                <input type="email" placeholder="Email"></input>
                <br></br>
                <input type="password" placeholder="Pass"></input>
                <br></br>
                <button>
                    Ingresar
                </button>
            </form>
        </div>       
    );
}
