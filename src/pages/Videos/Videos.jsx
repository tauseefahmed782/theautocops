import React from 'react'
import { Helmet } from 'react-helmet'
import './video.css'
import OurVideo from '../../components/Videos/OurVideo'
const Videos = () => {
  return (
    <div>
         {/* <Helmet>
        <title> Best Pre Owned Luxury Cars Dealers in Pune - The Autocops	</title>
        <meta name="description" content="Find the best pre-owned luxury cars in Pune! Our premium used car dealers offer unbeatable deals on second-hand luxury cars. Explore your dream ride today! " />
        <meta property="og:title" content=" Best Pre Owned Luxury Cars Dealers in Pune - The Autocops" />
        <meta property="og:description" content="Find the best pre-owned luxury cars in Pune! Our premium used car dealers offer unbeatable deals on second-hand luxury cars. Explore your dream ride today! " />
        <link rel="canonical" href="https://theautocops.com/"/>
        </Helmet> */}
 {/* <!--Start Top Banner--> */}
    <div className="video-page-top-banner">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="mb-3">Buy Pre-Owned Luxury Cars</h1>
                    <p>Discover an exclusive collection of pre-owned luxury cars that blend elegance, performance, and
                        affordability.</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!--End Top Banner--> */}

    <section className="sec-pd">
        <div className="container">
        <OurVideo/>
          
        </div>
    </section>
    </div>
  )
}

export default Videos