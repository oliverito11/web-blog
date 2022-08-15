import '../styles/Tutorial.css'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { projectList } from '../config/dataProjects.js';
import { Link } from 'react-router-dom';

import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Project() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let bl = projectList.find((b) => b.id === parseInt(id));

    if (bl) {
      setBlog(bl);
    }
  }, []);

  const renderData = () => {
    if (!blog) return null;
    let result = [];
    let cont = 0;
    blog.content.forEach(c => {
      if (c.startsWith("/")) {
        result.push(
          <img key={"img" + cont++} srcSet={c} style={{maxWidth: "50%"}}/>
        );
      }
      else {
        result.push(
          <p key={"text" + cont++} >{c}</p>
        );
      }
    });
    return result;
  };
  return !blog ? null : (
    <>
      <NavBar active="projects" page="Project" />
      <div className="container-fluid">
        <div className='row row-cols-1'>
          <div className='cont p-5'>
            <div className='headerTitle'>
              {blog.title}
            </div>
            <div className='title'>
              {blog.subtitle}
            </div>
            <div className='description'>
              {renderData()}
            </div>
            <div>
              <Link to="#">Try it!</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}

export default Project;