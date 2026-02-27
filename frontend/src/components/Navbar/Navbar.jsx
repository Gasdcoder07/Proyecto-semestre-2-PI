import { NavItems } from "./NavItems";
import { Link } from "react-router";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
      <nav className="sticky top-0 font-SnPro antialiased w-full bg-white border-b border-gray-300 shadow-lg">
          <div className="container mx-auto flex justify-between items-center px-4 py-2 md:px-8 md:py-3 lg:px-12">
              <h3 className="text-xl font-bold">ManzaLife</h3>

              <ul className="hidden sm:flex gap-6">
                  {NavItems.map((item) => {
                      return (
                          <li>
                              <Link
                                  className="text-gray-800 tracking-wider px-3 py-1 rounded-lg hover:bg-gray-300/30 hover:-translate-y-1 transition-all duration-200 ease-in-out inline-block"
                                  to={item.path}
                              >
                                  {item.title}
                              </Link>
                          </li>
                      );
                  })}
              </ul>

              <IoMenu className="text-2xl sm:hidden" />
          </div>
      </nav>
  );
}

export default Navbar;