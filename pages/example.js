import Head from "next/head";
import { useAmp } from "next/amp";

export const config = {
  amp: "hybrid"
};

export default () => {
  const isAmp = useAmp();

  return (
    <div>
      <Head>
        <title>Demo - AMP</title>
      </Head>
      <h1>AMP (Hybrid AMP Page)</h1>
      <p>
        <a href={isAmp ? "/example" : "/example?amp=1"}>
          {isAmp ? "View Non-AMP" : "View AMP"} Version
        </a>
      </p>
    </div>
  );
};
