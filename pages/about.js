import Link from "next/link";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Demo - About</title>
      </Head>
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
      `}</style>
    </>
  );
}

About.getInitialProps = async () => {
  await new Promise(resolve => {
    console.log(
      `Hello on the ${typeof window === "undefined" ? "Server" : "Client"}.`
    );
    setTimeout(resolve, 3000);
  });
  return {};
};

export default About;
