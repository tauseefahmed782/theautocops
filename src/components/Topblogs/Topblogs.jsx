// Topblogs.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Topblogs.module.css";
import { Link, Navigate } from "react-router-dom";
import { color } from "chart.js/helpers";
const Topblogs = ({ currentBlogId }) => {
    const [recentBlogs, setRecentBlogs] = useState([]); // State to hold recent blogs
    const [error, setError] = useState(null); // State to handle errors
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        const fetchRecentBlogs = async () => {
            try {
                const response = await axios.get("https://theautocops.com/admin_panel/public/api/all-posts"); // Replace with your API endpoint for recent blogs
                // Filter out the current blog
                const filteredBlogs = response.data.posts.filter(blog => blog.id !== currentBlogId);
                setRecentBlogs(filteredBlogs); // Set the fetched data
            } catch (error) {
                setError("Failed to fetch recent blogs.");
                console.error("Error fetching recent blogs:", error);
            } finally {
                setLoading(false); // Stop loading regardless of success or failure
            }
        };

        fetchRecentBlogs();
    }, [currentBlogId]);

    if (loading) {
        return <div>Loading...</div>; // Show loading state while fetching data
    }

    if (error) {
        return <div>{error}</div>; // Show error message if fetching fails
    }

    return (
        <div>
            <h2 className={style.recent_heading}>Recent Blogs</h2>
            {recentBlogs.map((blog) => (
            
                <div key={blog.id} className={style.card}>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={blog.image} alt={blog.title} className={style.topblogimg} />
                        </div>
                        <div className="col-md-8">
                            <h5 className={style.heading}>{blog.title}</h5>
                            <p className={style.blogdate}>
                                Date: {new Date(blog.created_at).toLocaleDateString()}
                            </p>
                            <Link className={style.see_deatils}   to= {`/blogs/${blog.slug}`}>
                            Read More
                            </Link>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>
    );
};

export default Topblogs;
