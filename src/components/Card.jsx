import { Link } from 'react-router-dom';
import '../styles/Card.css'

function Card({ header, description, image, id }) {
    return (
        <div className='cardContainer container mt-4'>
            <div className='container-fluid'>
                <div className="d-inline-flex fs-3 fw-bold"><Link className='header' to={'./' + id}>{header}</Link></div>
                <div className='row row-cols-1 row-cols-lg-2'>
                    <div className='col-12 col-lg-3 d-flex align-items-center justify-content-center'><img src={image} /></div>
                    <div className='col-12 col-lg-9'>{description}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;