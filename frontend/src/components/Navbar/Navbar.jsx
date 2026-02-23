import "../Navbar/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">ManzaLife</div>
            <ul className="nav-links">
                <li><a>Login</a></li>
                <li><a>Home</a></li>
                <li><a>Account</a></li>
            </ul>
        </nav>
    )
}

export default Navbar