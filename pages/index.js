import Link from "next/link";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Demo - Home</title>
      </Head>
      <p>Hello World</p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/search">
        <a>Search</a>
      </Link>
    </>
  );
}

export default Home;
