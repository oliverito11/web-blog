import '../styles/TutorialsList.css'
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';

function List({list, page}) {
  const [searchStr, setSearchStr] = useState("");
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [blogs, setBlogs] = useState(list);

  useEffect(() => {
    setBlogs(list);
  }, [list]);

  
  const valueChanged = (str, d1, d2) => {
    console.log("Value changed: " + str + ", " + d1 + ", " + d2);
    setSearchStr(str);
    setDate1(d1);
    setDate2(d2);
  };

  return (
    <>
      <NavBar active={page} page={page} />
      <div className='container-fluid'>
        <div className='row row-cols-12'>
          <SearchBox valueChanged={valueChanged}/>
          <div className='col-2'></div>
          <div className='listContainer col-12 col-lg-10 p-5'>
            <BlogList blogs={blogs} searchStr={searchStr} date1={date1} date2={date2}/>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}

export default List;
