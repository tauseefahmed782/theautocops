import React, { useEffect, useState } from "react";
import style from "./Blog.module.css";
import { useNavigate } from 'react-router-dom';
import Topblogs from "../../components/Topblogs/Topblogs";
import axios from "axios";
import DOMPurify from 'dompurify';
import { Helmet } from "react-helmet"; // Import React Helmet

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]); // State to hold the list of blogs
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://theautocops.com/admin_panel/public/api/all-posts");
        setBlogs(response.data.posts); // Assuming the API returns an object with a posts array
      } catch (error) {
        setError("Failed to fetch blogs.");
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You could replace this with a spinner or more elegant loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message if fetching fails
  }

// Function to truncate description to the first 80 words
const truncateDescription = (description) => {
  // Remove HTML tags
  const plainText = DOMPurify.sanitize(description.replace(/<[^>]*>/g, ''));
  const words = plainText.split(/\s+/); // Split by whitespace

  if (words.length > 20) {
    return words.slice(0, 20).join(' ') + '...'; // Add ellipsis if truncated
  }
  return plainText; // Return full description if it's less than or equal to 80 words
};
  return (
    <div>
      <Helmet>
        <title>Our Blogs - The Auto Cops</title>
        <meta name="description" content="Read the latest blogs on automotive trends, tips, and insights." />
        <meta name="keywords" content="automotive, blogs, car tips, vehicle maintenance" />
        <link rel="canonical" href="https://theautocops.com/blogs/" /> {/* Replace with your blog URL */}
      </Helmet>
      
      <div
        style={{
          background: '#152C56',
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container text-center py-5">
        <h1 className={style.mainheading}>Our Blogs</h1>

        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            {blogs.map(blog => (
              <div key={blog.id} className="row mb-4">
                <div className="col-md-4">
                  <img 
                    src={blog.image || "fallback_image_url.jpg"} // Provide a fallback image URL here
                    alt={blog.title} 
                    className={`img img-fluid ${style.blogoneimage} `}
                  />
                </div>
                <div className="col-md-8 mt-3">
                  <div style={{ marginLeft: '20px' }}>
                    <h3 className={style.blogheading}>{blog.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(truncateDescription(blog.description)), // Truncate description
                      }}
                    />
                    <button
                      className={style.blog_btn}
                      onClick={() => navigate(`/blogs/${blog.slug}`)} // Pass the blog ID to the detail page
                    >
                      Continue reading
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 mt-4">
            <Topblogs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
