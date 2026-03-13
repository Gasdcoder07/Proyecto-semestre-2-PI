import logo from "../../../../imgs/logomaxxing.svg";
import { FaSearch } from "react-icons/fa";

const BlogNavbar = () => {
    return (
        <nav className="w-full border-b border-white flex justify-center items-center">
            <div className="container mx-auto flex justify-between items-center px-4 py-2 gap-6 md:px-8 lg:px-12 bg-transparent">
                <img
                    src={logo}
                    alt="ManzaLife"
                    className="hidden sm:flex h-10 object-cover select-none"
                />

                <div className="relative w-full max-w-2xl text-white mx-auto flex justify-center items-center">
                    <input
                        className="bg-neutral-900 border border-white rounded-xl w-full py-3 pl-5 pr-10 outline-none placeholder-white/50"
                        type="text"
                        placeholder="Playas, plazas o restaurantes"
                    ></input>
                    <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-orange-500 hover:rotate-45 transition-all ease-in-out duration-200" />
                </div>

                <div className="flex justify-center items-center gap-4 shrink-0">
                    <a href="#"
                        className="hover:text-orange-600 transition-colors duration-200 ease-in-out">Crear Post</a>
                    <div className="size-10 rounded-full bg-amber-200" />
                </div>
            </div>
        </nav>
    );
};

export default BlogNavbar;
