import api from "../api/axios";

export const getPosts = async () => {
    const res = await api.get("posts/");
    return res.data;
};