import Head from "next/head";
import Preloader from "../components/Preloader";
import NavBar from "../components/NavBar";
import Header from "../components/policy/Header";
import Breadcrumbs from "../components/policy/Breadcrumbs";
import Content from "../components/policy/Content";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Policy() {
  return (
    <div>
      <Head>
        <title>Bongola Chat - Privacy Policy</title>
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
      <Header text={"Privacy Policy"} />
      <Breadcrumbs text={"Privacy Policy"} />
      <Content />
      <Breadcrumbs text={"Privacy Policy"} />
      <Footer />
      <Copyright />
    </div>
  );
}
