import Link from "next/link";

export default function() {
  return (
    <>
      <p>Hello World</p>
      <Link href="/about">
        <a>About</a>
      </Link>
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
      `}</style>
      <style jsx>{`
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
