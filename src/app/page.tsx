import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Image
        className="logo"
        src="/neon_9.png"
        width={50}
        height={50}
        alt="Picture"
      ></Image>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="linkies" href="/pages/login">
              {" "}
              Login
            </Link>
          </li>
          <li>
            <Link className="linkies" href="/pages/register">
              {" "}
              Register
            </Link>
          </li>
          <li>
            <Link className="linkies" href="/project/plastic">
              {" "}
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <a className="cta" href="/contact">
        <button className="con-but">
          <Link href="/pages/contact"> Contact</Link>
        </button>
      </a>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
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
            <Image src="/neon_9.png" width={350} height={350} alt="Picture" />
          </div>
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="projects">
          <h2>Projects</h2>
        </div>
      </div>
    </>
  );
}
