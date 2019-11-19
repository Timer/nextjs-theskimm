import Link from "next/link";
import Head from "next/head";

export default function() {
  return (
    <>
      <Head>
        <title>Demo - Home</title>
      </Head>
      <p>Hello World</p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </>
  );
}
