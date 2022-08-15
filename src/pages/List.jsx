import '../styles/TutorialsList.css'
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';

function List({list, page}) {
  const [blogs, setBlogs] = useState(list);
  useEffect(() => {
    setBlogs(list);
  }, [list])
  
  //TODO: Sacar el JSON desde una web externa
  return (
    <>
      <NavBar active={page} page={page} />
      <div className='container-fluid'>
        <div className='row row-cols-12'>
          <SearchBox />
          <div className='col-2'></div>
          <div className='listContainer col-12 col-lg-10 p-5'>
            <BlogList blogs={blogs} />
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}

export default List;
