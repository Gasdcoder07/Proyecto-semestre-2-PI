import { NavItems } from "./NavItems";

function Navbar() {
  return (
    <nav className="w-full bg-white text-black px-10 py-4 flex justify-between items-center shadow-md">
      
      <div className="text-2xl font-bold">
        ManzaLife
      </div>

      <ul className="flex gap-8">
        {NavItems.map((item) => (
          <li key={item.id}>
            <a 
              href={item.path}
              className="hover:text-gray-500 transition duration-300"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
}

export default Navbar;