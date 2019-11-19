import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", url => {
  console.log(`Start: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", url => {
  console.log(`Complete: ${url}`);
  NProgress.done();
});
Router.events.on("routeChangeError", (err, url) => {
  console.log(`Error: ${url} | Cancelled: ${err.cancelled}`);
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Demo</title>
        <link rel="stylesheet" href="/nprogress.css" type="text/css"></link>
      </Head>

      <Component {...pageProps} />

      <style global jsx>{`
        body {
          font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
            "Helvetica", "Arial", sans-serif;
          padding: 20px 20px 60px;
          max-width: 680px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 1.65;
          word-break: break-word;
          font-kerning: auto;
          font-variant: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          hyphens: auto;
        }

        a {
          cursor: pointer;
          color: #0076ff;
          text-decoration: none;
          transition: all 0.2s ease;
          border-bottom: 1px solid white;
        }

        a:hover {
          border-bottom: 1px solid #0076ff;
        }
      `}</style>
    </>
  );
}

export default MyApp;
