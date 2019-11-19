import Link from "next/link";

export default function() {
  return (
    <>
      <main>
        <h1>About</h1>
        <p>This is a cool about page.</p>
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </main>
      <style jsx>{`
        h1 {
          color: blue;
        }

        p {
          font-size: 1.25rem;
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
