import "./Login.css"

export default function Login() {
    return (
        <div className="login-container">
            <form className="form-login">
                <h1>Ingresa sesión con tu correo</h1>
                <h4>Email</h4>
                <input type="email"></input>
                <br></br>
                <h4>Password</h4>
                <input type="password"></input>
                <br></br>
                <button onClick={() => {
                    
                }}>
                    Ingresar
                </button>
            </form>
        </div>       
    );
}
