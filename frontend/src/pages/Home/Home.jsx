import { FaSearch } from "react-icons/fa"
import { useState, useEffect } from "react"
import Image from "../../../imgs/LoginResources/Login_bg.png"

export default function Home() {

    const [publicacion, setPub] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="container mx-auto flex flex-col items-center gap-4 text-slate-950">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Bienvenido a Manza
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-800">
                    Life
                </span>
            </h1>

            <h3 className="text-xl sm:text-2xl lg:text-3xl text-center tracking-tighter">
                Un lugar paradisiaco en las costas de México
            </h3>

            <div className="max-w-5xl w-full sm:mt-6 flex flex-col gap-8 justify-center items-center border border-gray-300 rounded-xl p-4 sm:p-8 bg-white/10 shadow-[0_2px_24px_rgba(0,0,0,0.37)]">
                <div className="relative w-full max-w-4xl text-slate-950">
                    <input
                        className="bg-white/10 border border-gray-300 rounded-xl w-full py-3 pl-5 pr-10 outline-none placeholder-slate-500"
                        type="text"
                        placeholder="Playas, plazas o restaurantes"
                    ></input>

                    <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-orange-500 hover:rotate-45 transition-all ease-in-out duration-200" />
                </div>

                <button className="bg-orange-500 text-white font-semibold px-4 py-1.5 rounded-md cursor-pointer hover:bg-orange-600 hover:-translate-y-1 transition-all duration-200 ease-in-out">
                    Buscar
                </button>
            </div>

            <div className="sm:mt-6 bg-orange-500 w-full rounded-xl flex flex-col px-6 py-8 gap-2">
                <h3 className="font-bold text-2xl text-white tracking-widest">
                    Playas más visitadas
                </h3>

                <p className="text-white tracking-wider">
                    Encuentra las mejoras playas de Manzanillo.
                </p>

                {/* Card Container */}
                <div className="flex mt-4">
                    {/* Card */}
                    <div className="rounded-xl overflow-hidden max-w-xs w-full bg-white">
                        <div className="h-48">
                            <img src={Image} alt="Imagen" className="h-full w-full object-cover"/>
                        </div>
                        <div className="flex flex-col">
                            <h3>Title playa</h3>
                            <p>Description playa</p>
                            <a href="">Link Playa</a>
                        </div>
                    </div>
                    {
                        publicacion.map(post => (
                            <div key={post.title} className="bg-white/10 p-4 rounded-xl">
                                <h2 className="text-2xl font-bold">{post.title}</h2>
                                <p>{post.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

