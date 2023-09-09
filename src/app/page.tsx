import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Image
        className="logo"
        src="/impact.png"
        width={100}
        height={100}
        alt="Picture"
      ></Image>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="linkies" href="/pages/stats">
              {" "}
              Dashboard
            </Link>
          </li>
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
            <br />
            to tackle some of our most pressing challenges <br />
            <br />
            and build a more sustainable future for South Africa
          </p>
          <div className="buttons-div">
            <button className="join-but">Login</button>
            <button className="join-but">Register</button>
          </div>
        </div>
        <div className="projects">
          <h3>Projects</h3>

          <div className="projects-div">
            <div className="project">
              <h3 className="proj-head"> Replastic </h3>
              <p>STREET PLASTIC MICROECONOMY</p>
              <Image
                src="/replastic.jpeg"
                width={250}
                height={250}
                alt="Picture"
              />
              <button className="join-but-rev">
                <Link href="/project/plastic">View Project</Link>
              </button>
            </div>
          </div>
          <div className="projects-div">
            <div className="project">
              <h3 className="proj-head"> title </h3>
              <p>sponsored by</p>
              <Image
                src="/plastic-river.jpeg"
                width={250}
                height={250}
                alt="Picture"
              />
              <button className="join-but-rev">
                <Link href="/project/plastic">View Project</Link>
              </button>
            </div>
          </div>
          <div className="projects-div">
            <div className="project">
              <h3 className="proj-head"> title </h3>
              <p>sponsored by</p>
              <Image
                src="/plastic-river.jpeg"
                width={250}
                height={250}
                alt="Picture"
              />
              <button className="join-but-rev">
                <Link href="/project/plastic">View Project</Link>
              </button>
            </div>
          </div>

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
        <div className="stats">
          <h3>Stats</h3>
          <div className="stats-contain">
            <div className="stats-content">
              <div className="stat-object">
                <h4>Projects</h4>
                <h4>3</h4>
              </div>
              <div className="stat-object">
                <h4>Contributors</h4>
                <h4>133</h4>
              </div>
              <div className="stat-object">
                <h4>Funding</h4>
                <h4>R15,000</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="meet-the-team">
          <h3>Meet The Team</h3>
          <div className="images-div">
            <div className="person">
              <Image src="/diego.jpeg" width={250} height={250} alt="Picture" />
              <h4>Diego</h4>
            </div>
            <div className="person">
              <Image src="/Eneo.jpeg" width={250} height={250} alt="Picture" />
              <h4>Eneo</h4>
            </div>

            <div className="person">
              <Image src="/Jordan.jpeg" width={250} height={250} alt="Picture" />
              <h4>Jordan</h4>
              <br/>
              <p> I am an incident Response Engineer with a passion for using technology to solve issues</p>
            </div>
          </div>
        </div>
        <div className=" partners">
          <h3>Partners</h3>

          <div className="logos-div">
            <Image
              src="/UCT.png"
              className=" logo-left"
              width={150}
              height={150}
              alt="Picture"
            />
            <Image src="/SU.png" width={150} height={150} alt="Picture" />
            <Image
              src="/Launch-Labs.png"
              width={150}
              height={150}
              alt="Picture"
            />
            <Image src="/SI.jpeg" width={150} height={150} alt="Picture" />
          </div>
        </div>
      </div>
    </>
  );
}
