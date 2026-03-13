import { useEffect, useState } from "react"
import { getPosts } from "../services/postService";

export const usePosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(setPosts).catch(console.error);
    }, []);

    return posts;
};