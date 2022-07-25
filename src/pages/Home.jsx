import '../styles/Home.css';
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar active="home" />

      {/* Introducción */}
      <div className="presentation container-fluid">
        <div className='row row-cols-1 row-cols-md-2'>
          <div className='d-flex justify-content-center align-items-center p-5'>
            <div className='name d-grid gap-2'>
              <div className='fs-1 fw-bold d-flex justify-content-center align-items-center'>
                Oliver Linares Colinas
              </div>
              <div className='fs-6 d-flex justify-content-center align-items-center'>
                Game Developer 🎮
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Presentación */}
      <div className='webPresentation container-fluid d-flex justify-content-center align-items-center p-5'>
        <div className='p-1 p-md-5'>
          <div className='fs-5 fw-bold d-flex justify-content-center align-items-center'>
            Welcome to my page. What it is all about? 🤔
          </div>
          <div className='fs-6 d-flex justify-content-center align-items-center'>
            Here you will see my progress throught all this years I've been developing games:
          </div>
          <ul className='styledList'>
            <li><Link to=''>About me</Link></li>
            <li><Link to=''>Projects I've made</Link></li>
            <li><Link to=''>Mechanics I like to recreate and tutorials</Link></li>
          </ul>
        </div>
      </div>

      {/* ABOUT ME */}
      <Section></Section>
      {/* PROJECTS */}
      {/* TUTORIALS */}
    </>
  );
}

export default Home;
