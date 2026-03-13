import BlogNavbar from "../BlogNavbar/BlogNavbar"
import PostsGrid from "../../PostsSection/PostsGrid"

const BlogHeader = () => {
  return (
    <section className="bg-zinc-950 text-white min-h-screen w-full">
        <BlogNavbar/>

        {/* <div className="container mx-auto flex flex-col px-6 md:px-20 lg:px-32 gap-4 md:gap-10 lg:gap-12">              
            <PostsGrid/>
        </div> */}
    </section>
  )
}

export default BlogHeader