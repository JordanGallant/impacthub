import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Image className= "logo" src= "/neon_9.png" width ={50} height ={50}alt="Picture" ></Image>
    <nav>
      <ul className="nav-links">
      <li><a className = "linkies" href="/project">Projects</a></li>
      <li> <a className = "linkies" href="/login">Login</a></li>
      <li> <a className = "linkies" href="/register">Register</a></li>
      </ul>
    </nav>
    <a className="cta" href="/contact"><button className="con-but">contact</button></a>
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
        </div>
      </div>
    </>
  );
}
