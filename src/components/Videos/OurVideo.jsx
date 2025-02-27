import React, { useEffect, useState } from 'react';
import video_icon from '../../Images/videos/youtube-icon.png';

const OurVideo = () => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [trendingVideos, setTrendingVideos] = useState([]);

  // Fetch videos from the API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://theautocops.com/admin_panel/public/api/all-videos');
        const data = await response.json();
        console.log('API Response:', data);
        if (data.videos) {
          setVideos(data.videos);

          // Extract unique categories (brands)
          const uniqueCategories = Array.from(
            new Map(data.videos.map(video => [video.brand.id, video.brand])).values()
          );
          setCategories(uniqueCategories);

          // Select random videos for trending section
          const randomVideos = data.videos
            .sort(() => 0.5 - Math.random())
            .slice(0, 2); // Select 2 random videos
          setTrendingVideos(randomVideos);
        } else {
          console.error('No videos found in API response.');
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Filter videos by selected category
  const filteredVideos = selectedCategory
    ? videos.filter(video => video.brand.id === selectedCategory.id)
    : videos;

  return (
    <div>
      <div className="row">
       

        {/* Right Column: Videos */}
        <div className="col-md-9">
          <div className="pe-md-4">
            <h6 className="sec-sub-heading">
              {selectedCategory ? `Videos for ${selectedCategory.name}` : 'Explore Our Top Videos'}
            </h6>
            <div className="row gy-3 mt-4">
              {filteredVideos.length > 0 ? (
                filteredVideos.map(video => (
                  <div className="col-md-4" key={video.id}>
                    <div className="vidoe-box overflow-hidden rounded-2">
                      <div className="video-thumbnail position-relative">
                        <img
                          src={video.video_thumbnail}
                          className="img-fluid"
                          alt={video.title || 'Video thumbnail'}
                        />
                        <a
                          href={video.video_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn vidoe-btn position-absolute"
                        >
                          <img src={video_icon} width="54" height="54" alt="Play icon" />
                        </a>
                        <div className="thumbnail-overlay"></div>
                      </div>
                      <div className="video-content">
                        <h3>{video.title}</h3>
                        <p className="mb-0 mt-2">{video.brand.name}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No videos available for this category. Please check back later.</p>
              )}
            </div>
          </div>
        </div>
         {/* Left Column: Categories */}
         <div className="col-md-3">
          <div className="category-main rounded border">
            <h6 className="sec-sub-heading">Category</h6>
            <div className="row gy-3 mt-2">
              {categories.map(category => (
                <div className="col-md-6" key={category.id}>
                  <a
                    className="video-category-box border rounded"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCategory(category);
                    }}
                  >
                    <div>
                      <img
                        src={category.logo}
                        className="img-fluid"
                        width=""
                        height="60"
                        alt={category.name}
                      />
                    </div>
                    <p>{category.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Most Trending Section */}
          <div className="category-main rounded border mt-4">
            <h6 className="sec-sub-heading">Most Trending</h6>
            <div className="row gy-3 mt-2">
              {trendingVideos.map(video => (
                <div className="col-md-12" key={video.id}>
                  <div className="vidoe-box video-box-flex overflow-hidden rounded-2 d-flex">
                    <div className="video-thumbnail position-relative">
                      <img
                        src={video.video_thumbnail}
                        width=""
                        height=""
                        className="img-fluid"
                        alt="video"
                      />
                      <a
                        href={video.video_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn vidoe-btn position-absolute"
                      >
                        <img src={video_icon} width="34" height="34" alt="Play icon" />
                      </a>
                      <div className="thumbnail-overlay"></div>
                    </div>
                    <div className="video-content">
                      <h3>{video.title}</h3>
                      <p className="mb-0 mt-2">{video.brand.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVideo;
