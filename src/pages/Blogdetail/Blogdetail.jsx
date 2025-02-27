import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import axios from "axios";
import style from "./blogdetail.module.css";
import Topblogs from "../../components/Topblogs/Topblogs";
import { Helmet } from "react-helmet";

const Blogdetail = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

 
useEffect(() => {
  axios
    .get(`https://theautocops.com/admin_panel/public/api/post/slug?slug=${slug}`)
    .then((response) => {
      console.log("Full API response:", response.data); // Log the full response
      if (response.data && response.data.post) {
        setBlogData(response.data.post); // Set blog data based on correct structure
      } else {
        setError("Blog data not found.");
      }
    })
    .catch((error) => {
      setError("Failed to fetch blog details.");
      console.error("Error fetching blog details:", error);
    })
    .finally(() => {
      setLoading(false);
    });
}, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blogData) return <div>No blog data available.</div>;

  return (
    <div>
      <Helmet>
        <title>{blogData?.meta_title}</title>
        <meta name="description" content={blogData?.meta_description } />
        <meta name="keywords" content={blogData?.meta_keywords} />
        <meta property="og:title" content={blogData?.meta_title } />
        <meta property="og:description" content={blogData?.meta_description } />
        <meta property="og:url" content={`https://theautocops.com/blogs/${slug}`} />
      </Helmet>

      <div className="blog_details"
      
      >
        <div className="container">
        <ul className="list-group list-group-horizontal-sm">
                <li className="list-group-item"><Link to="/">Home</Link></li>
                <li className="list-group-item mx-0 px-0"> > </li>
                <li className="list-group-item"><Link to="/blogs">Blogs</Link></li>
                <li className="list-group-item px-0 mx-0"> > </li>
                <li className="list-group-item active">{blogData?.title}</li>
              </ul>
              <h1 className={style.mainheading}>{blogData?.title}</h1>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <div className="col-md-8 ">
           <div className="blog_container">
           <div className="d-flex align-items-center ">
              <h2 className={style.blog_heading}>Date: {new Date(blogData?.created_at).toLocaleDateString()}</h2>
              <p className="mx-3">|</p>
              <div>
                {blogData?.categories?.map((category) => (
                  <span key={category.id} className="badge bg-secondary me-2">
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
            <img src={blogData?.image} alt={blogData?.title} className="img img-fluid" />
            <div
              className={style.blog_content}
              dangerouslySetInnerHTML={{ __html: blogData?.description }}
            />
           </div>
          </div>

          <div className="col-md-4 mt-4">
            <Topblogs currentBlogId={slug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetail;
