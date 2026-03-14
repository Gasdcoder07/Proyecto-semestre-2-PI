import { Outlet } from "react-router-dom";
import { BlogNavbar, BlogSidebar } from "../components/Blog/index"

const BlogLayout = () => {
  return (
    <div className="relative bg-zinc-950 text-white h-screen w-full flex flex-col">
        <BlogNavbar/>

        <section className="flex-1 flex w-full overflow-hidden">
            <BlogSidebar/>

            <div className="flex-1 container mx-auto w-full px-6 md:px-12 lg:px-24 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent scroll-smooth">

                {/* --> Componentes Hijos aca  */}
                <Outlet/>

            </div>
        </section>
    </div>
  );
};

export default BlogLayout;