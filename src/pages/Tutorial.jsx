import '../styles/Tutorial.css'
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';

function Tutorial() {
  return (
    <>
      <NavBar active="tutorials" page="Tutorial" />
      <div className="container-fluid">
        <div className='row row-cols-1'>
          <div className='cont p-5'>
            <div className='headerTitle'>
              Lorem ipsum dolor sit amet
            </div>
            <div className='title'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div className='description'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Morbi quis commodo odio aenean sed adipiscing. Integer enim neque volutpat ac tincidunt vitae. Ut consequat semper viverra nam libero justo. Tortor aliquam nulla facilisi cras. Senectus et netus et malesuada fames ac. Amet justo donec enim diam vulputate. A erat nam at lectus urna duis convallis convallis. Lacinia quis vel eros donec ac odio. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.</p>
              <p>Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Nibh tellus molestie nunc non blandit. Orci eu lobortis elementum nibh tellus. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. At tellus at urna condimentum. Non consectetur a erat nam at. Sit amet est placerat in egestas erat imperdiet sed. Ultrices sagittis orci a scelerisque purus semper eget duis at. Leo vel orci porta non. Duis ultricies lacus sed turpis tincidunt id aliquet. Egestas tellus rutrum tellus pellentesque. Ultrices neque ornare aenean euismod elementum nisi.</p>
              <p>Blandit cursus risus at ultrices. Duis convallis convallis tellus id interdum velit laoreet id. Ullamcorper malesuada proin libero nunc. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. At tellus at urna condimentum mattis pellentesque id. Vitae justo eget magna fermentum iaculis eu non. A diam maecenas sed enim ut sem viverra aliquet. Amet tellus cras adipiscing enim eu. Nisl suscipit adipiscing bibendum est. Consequat mauris nunc congue nisi vitae suscipit. Leo a diam sollicitudin tempor id eu. Nullam non nisi est sit amet facilisis.</p>
              <img src='' />
              <p>Eu augue ut lectus arcu bibendum. Sollicitudin nibh sit amet commodo nulla. Et malesuada fames ac turpis egestas. Sagittis eu volutpat odio facilisis. Urna duis convallis convallis tellus id interdum velit laoreet. Sit amet commodo nulla facilisi nullam vehicula ipsum. At augue eget arcu dictum varius duis at consectetur. Platea dictumst quisque sagittis purus sit amet volutpat. Ut enim blandit volutpat maecenas volutpat. Cursus eget nunc scelerisque viverra. Enim ut tellus elementum sagittis. Laoreet suspendisse interdum consectetur libero. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Blandit cursus risus at ultrices mi tempus imperdiet. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Quisque non tellus orci ac auctor augue mauris. Facilisis volutpat est velit egestas dui id.</p>
              <p>Amet justo donec enim diam. A arcu cursus vitae congue mauris rhoncus aenean. Iaculis nunc sed augue lacus viverra vitae congue eu. Blandit massa enim nec dui nunc mattis. Sed risus ultricies tristique nulla. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Faucibus nisl tincidunt eget nullam non. Id faucibus nisl tincidunt eget nullam non nisi est sit. Odio euismod lacinia at quis risus. Proin sed libero enim sed faucibus turpis in. Venenatis cras sed felis eget velit aliquet sagittis. Laoreet non curabitur gravida arcu ac tortor. Eget magna fermentum iaculis eu non diam phasellus. Volutpat commodo sed egestas egestas fringilla phasellus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Aliquam vestibulum morbi blandit cursus. Nullam eget felis eget nunc lobortis mattis aliquam faucibus.</p>
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

export default Tutorial;