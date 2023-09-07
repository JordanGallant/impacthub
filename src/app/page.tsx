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
              Connect. Build. <br />
              Regenerate the Future. <br />
              <br />
            </h2>
          </div>

          <div className="right">
            <Image src="/neon_9.png" width={350} height={350} alt="Picture" />
          </div>
        </div>
            
        <div className="join">
          <h3>Join Us</h3>
          <p className="join-p">
            Partnering with universities, NGOs,and businesses <br />
            <br/>
            to tackle some of our most pressing challenges <br />
            <br/>
            and build a more sustainable future for South Africa
          </p>
          <div className="buttons-div">
            <button className="join-but">Login</button>
            <button className="join-but">Register</button>
          </div>
        </div>
        <div className="projects">
          <h3>Projects</h3>
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className=" partners">
              <h3>Partners</h3>
              <hr/>
              <div className="logos-div"> 
              
              </div>
            </div>
      </div>
    </>
  );
}
