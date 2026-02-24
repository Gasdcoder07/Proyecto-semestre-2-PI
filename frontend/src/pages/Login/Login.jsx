import { useState } from "react";
import "./Login.css"
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {

    const [type, setType] = useState("password");

    const handleType = () => {
        setType(prev => prev === "password" ? "text" : "password");
    };

    return (
        <div className="flex justify-center">
            <form
                className="bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-2xl px-4 sm:px-6 pb-12 pt-6 rounded-xl border-b border-white relative"
                action="">
                    <h1 className="text-white text-center text-4xl tracking-wide">Inicia sesión</h1>

                    <div className="mt-6 flex flex-col gap-4 text-white">
                        <input
                            className="px-3 py-1.5 border border-white outline-none rounded-sm placeholder-white/80"
                            type="text"
                            placeholder="Usuario"/>

                        <div className="relative">
                            <input
                                className="pl-3 pr-10 py-1.5 border border-white outline-none rounded-sm placeholder-white/80"
                                type={type}
                                placeholder="Contraseña"/>

                            {
                                type === "password" ? (
                                    <FaEye
                                        onClick={() => handleType()}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"/>
                                ) : (
                                    <FaEyeSlash
                                        onClick={() => handleType()}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-white ease-in-out transition-colors duration-200"/>
                                )
                            }
                        </div>
                    </div>

                    <button className="text-lg absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-lg tracking-wide text-emerald-600/40 cursor-pointer">
                        Login
                    </button>
            </form>

        </div>    
    );
}
