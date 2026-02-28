import { NavItems } from "./NavItems";
import { Link } from "react-router";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
      <nav className="absolute top-0 left-0 z-10 w-full border-b border-white">
          <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent">
              <h3 className="text-xl font-bold text-white">ManzaLife</h3>

              <ul className="hidden md:flex gap-2 lg:gap-6">
                  {NavItems.map((item) => {
                      return (
                          <li>
                              <Link
                                  className="text-white tracking-wider px-3 py-1 hover:text-orange-500 hover:scale-105 transition-all duration-200 ease-in-out inline-block"
                                  to={item.path}
                              >
                                  {item.title}
                              </Link>
                          </li>
                      );
                  })}
              </ul>

              <IoMenu className="text-white text-2xl md:hidden" />
          </div>
      </nav>
  );
}

export default Navbar;