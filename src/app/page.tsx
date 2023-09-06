import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500&display=swap" rel="stylesheet"/>
    </Head>
      <div className="container">
        <h1>Impact hub</h1>

        <Image
          src="/neon_9.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <h2>
          Connect. Build <br />
          Regenerate the Future. <br />
          <br />
        </h2>
      </div>
    </>
  );
}
