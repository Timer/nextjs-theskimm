import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { useAmp } from "next/amp";

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
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>Demo</title>
        {!isAmp && (
          <link rel="stylesheet" href="/nprogress.css" type="text/css"></link>
        )}
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

        h2,
        h3,
        h4 {
          margin-top: 1.5em;
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

        ul,
        ol {
          padding: 0;
          margin-left: 1.5em;
        }

        ul {
          list-style-type: none;
        }

        li {
          margin-bottom: 10px;
        }

        ul li:before {
          content: "–";
        }

        li:before {
          display: inline-block;
          color: #999;
          position: absolute;
          margin-left: -18px;
          transition: color 0.2s ease;
        }

        code,
        pre {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
          font-size: 0.92em;
          color: #d400ff;
        }

        code:before,
        code:after {
          content: "\`";
        }

        blockquote {
          margin: 1.6em 0;
          padding: 5px 24px;
          background: #efefef;
        }

        input,
        button,
        textarea {
          margin: 0;
          border: 1px solid #d1d1d1;
          border-radius: 5px;
          padding: 0.5em;
          vertical-align: middle;
          white-space: normal;
          background: none;
          line-height: 1;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.2s ease;
        }

        button {
          padding: 0.65em 1em;
          background: #0076ff;
          color: #fff;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }
        input:focus,
        textarea:focus,
        button:focus {
          outline: 0;
          border-color: #0076ff;
        }
        button:hover {
          background: rgba(0, 118, 255, 0.8);
        }
        button:focus {
          box-shadow: 0 0 0 2px rgba(0, 118, 255, 0.5);
        }
        button:disabled {
          pointer-events: none;
          background: #999;
        }

        img {
          max-width: 100%;
        }

        textarea {
          min-height: 300px;
          width: 100%;
          resize: none;
          margin: 1.4em 0;
          box-sizing: border-box;
        }

        hr {
          border: none;
          border-bottom: 1px solid #efefef;
          margin: 6em auto;
        }

        .hljs {
          display: block;
          overflow-x: auto;
          padding: 0.5em;
          color: #383a42;
          background: #fafafa;
        }
        .hljs-comment,
        .hljs-quote {
          color: #a0a1a7;
          font-style: italic;
        }
        .hljs-doctag,
        .hljs-keyword,
        .hljs-formula {
          color: #a626a4;
        }
        .hljs-section,
        .hljs-name,
        .hljs-selector-tag,
        .hljs-deletion,
        .hljs-subst {
          color: #e45649;
        }
        .hljs-literal {
          color: #0184bb;
        }
        .hljs-string,
        .hljs-regexp,
        .hljs-addition,
        .hljs-attribute,
        .hljs-meta-string {
          color: #50a14f;
        }
        .hljs-built_in,
        .hljs-class .hljs-title {
          color: #c18401;
        }
        .hljs-attr,
        .hljs-variable,
        .hljs-template-variable,
        .hljs-type,
        .hljs-selector-class,
        .hljs-selector-attr,
        .hljs-selector-pseudo,
        .hljs-number {
          color: #986801;
        }
        .hljs-symbol,
        .hljs-bullet,
        .hljs-link,
        .hljs-meta,
        .hljs-selector-id,
        .hljs-title {
          color: #4078f2;
        }
        .hljs-emphasis {
          font-style: italic;
        }
        .hljs-strong {
          font-weight: bold;
        }
        .hljs-link {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default MyApp;
