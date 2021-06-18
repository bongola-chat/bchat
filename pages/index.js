import Head from "next/head";
import Preloader from "../components/Preloader";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import testimonials from "../components/Testimonials/data";
import Features from "../components/Features/Features";
import Preview from "../components/Preview";
import {
  Details1,
  Details2,
  Details1Lightbox,
  Details2Lightbox,
} from "../components/AppDetails";
import Download from "../components/Download";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bongola Chat</title>
        <link rel="icon" href="/favicon.png" />

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta
          name="description"
          content="Free mobile app HTML landing page template to help you build a great online presence for your app which will convert visitors into users"
        />
        <meta name="author" content="Inovatik" />

        <meta property="og:site_name" content="Bongola Chat" />
        <meta property="og:site" content="https://bongola.chat" />
        <meta property="og:title" content="Bongola Chat" />
        <meta
          property="og:description"
          content="Application de chat instantanée avec traduction intégrée, groupes et jeux."
        />
        <meta property="og:image" content="https://bongola.chat/bchat.jpg" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="article" />

        {/* StyleSheets */}
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i"
          rel="stylesheet"
        />
        <link href="/css/bootstrap.css" rel="stylesheet" />
        <link href="/css/fontawesome-all.css" rel="stylesheet" />
        <link href="/css/swiper.css" rel="stylesheet" />
        <link href="/css/magnific-popup.css" rel="stylesheet" />
        <link href="/css/styles.css" rel="stylesheet" />

        {/* Scripts */}
        <script src="/js/jquery.min.js" defer></script>
        <script src="/js/popper.min.js" defer></script>
        <script src="/js/bootstrap.min.js" defer></script>
        <script src="/js/jquery.easing.min.js" defer></script>
        <script src="/js/swiper.min.js" defer></script>
        <script src="/js/jquery.magnific-popup.js" defer></script>
        <script src="/js/morphext.min.js" defer></script>
        <script src="/js/validator.min.js" defer></script>
        <script src="/js/scripts.js" defer></script>
      </Head>

      <Preloader />
      <NavBar />
      <Header />

      {/* Testimonials */}
      <div className="slider-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-container">
                <div className="swiper-container card-slider">
                  <div className="swiper-wrapper">
                    {testimonials.map((testimony, index) => (
                      <div className="swiper-slide" key={index}>
                        <div className="card">
                          <img
                            className="card-image"
                            src={testimony.image}
                            alt="alternative"
                          />
                          <div className="card-body">
                            <p className="testimonial-text">{testimony.text}</p>
                            <p className="testimonial-author">
                              {testimony.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonials */}

      <Features />
      <Preview />

      <Details1 />
      <Details2 />
      <Details1Lightbox />
      <Details2Lightbox />
      {/* Screenshots */}
      <div className="slider-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-container">
                <div className="swiper-container image-slider">
                  <div className="swiper-wrapper">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                      <div className="swiper-slide" key={index}>
                        <a
                          href="images/screenshot-1.png"
                          className="popup-link"
                          data-effect="fadeIn"
                        >
                          <img
                            className="img-fluid"
                            src={"/images/screenshots/" + index + ".png"}
                            alt="alternative"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Screenshots */}
      <Download />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
}
