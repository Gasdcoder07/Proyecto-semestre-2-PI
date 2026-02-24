import { FaSearch } from "react-icons/fa"

export default function Home() {
    return (
        <div className="flex flex-col gap-4 text-white">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Bienvenido a Manza<span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-800">Life</span></h1>

            <h3 className="text-xl sm:text-2xl lg:text-3xl text-center tracking-tighter">Un lugar paradisiaco en las costas de México</h3>

            <div className="flex justify-center sm:mt-5">
                <div className="relative w-full max-w-3xl text-white/80">
                    <input
                        className="bg-white/10 border-0 rounded-2xl w-full py-3 pl-5 pr-10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] outline-none placeholder-white/80"
                        type="text"
                        placeholder="Playas, plazas o restaurantes">
                    </input>

                    <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-white transition-colors ease-in-out duration-200"/>
                </div>
            </div>
        </div>
    )
}

