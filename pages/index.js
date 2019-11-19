import Link from "next/link";
import Head from "next/head";

function Home() {
  let object = { a: null, b: { foo: "bar" } };
  return (
    <>
      <Head>
        <title>Demo - Home</title>
      </Head>
      <p>Hello World {object.b?.foo || "N/A"}</p>
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
