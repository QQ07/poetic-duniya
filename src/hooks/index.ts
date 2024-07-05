/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { BlogType } from "../components/BlogCard";
import { useNavigate } from "react-router-dom";

export const useBlog = ({ id }: { id: string }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<{
        title: string;
        content: string;
        author: { name: string; tagline: string };
    }>({
        content: "",
        title: "",
        author: {
            name: "",
            tagline: "",
        },
    });
    const token = localStorage.getItem("token");
    const fetchBlog = async (id: string) => {
        try {
            const res = await axios.get(BACKEND_URL + "/blog/" + id, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setLoading(false);
            console.log(res.status);
            if (res.data.error) {
                navigate("/signup");
            }

            console.log("here");
            console.log(res.data);
            setBlog(res.data.blog);
        } catch (error) {
            console.log(error);
            navigate("/signin");
        }
    };

    useEffect(() => {
        fetchBlog(id);
    }, [id])

    return {
        loading, blog
    }
}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogType[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/bulk`)
            .then(res => {
                setBlogs(res.data.blogs);
                setLoading(false)
            })
    }, [])

    return {
        loading, blogs
    }
}