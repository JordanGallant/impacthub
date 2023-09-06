import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="left">
            <h1>Impact hub</h1>
            <h2>
              Connect. Build <br />
              Regenerate the Future. <br />
              <br />
            </h2>
          </div>

          <div className="right">

          <Image
            src="/neon_9.png"
            width={350}
            height={350}
            alt="Picture of the author"
          />
          </div>
        </div>
      </div>
    </>
  );
}
