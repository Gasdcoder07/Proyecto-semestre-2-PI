import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPostBySlug } from "../../services/postService";
import PostForm from "../PostForm/PostForm";
import PostFormSkeleton from "../PostForm/PostFormSkeleton";

const EditPostPage = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPostBySlug(slug);
                setPost(data);
            } catch (e) {
                console.error("Error al obtener Post por Id: ", e);
            }
        }

        fetchPost();
    }, [slug]);

    if (!post) return <PostFormSkeleton/>

  return <PostForm mode={"edit"} PostData={post}/>
};

export default EditPostPage;
