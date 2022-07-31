import '../styles/SearchBox.css';
import { useEffect, useState } from 'react';

function SearchBox() {
    const date = new Date(Date.now());
    const dateToShow = date.toISOString().substring(0, date.toISOString().indexOf('T'));

    const [classToUse, setClassToUse] = useState("searchBox container-fluid col-12 col-lg-2 p-5 p-lg-3 mt-5 position-fixed");
    useEffect(() => {
        resizeWindow();
    }, [])

    window.addEventListener('resize', function () {
        resizeWindow();
    });

    const resizeWindow = () => {
        if (window.innerWidth < 992) {
            setClassToUse("searchBox container-fluid col-12 col-lg-2 p-5 p-lg-3 mt-5 position-relative");
        }
        else {
            setClassToUse("searchBox container-fluid col-12 col-lg-2 p-5 p-lg-3 mt-5 position-fixed");
        }
    }

    return (
        <div className={classToUse}>
            <div className='searchBoxContainer container'>
                <div className='row row-cols-auto d-flex flex-column align-items-center justify-content-center my-4'>
                    <form>
                        <input className="form-control rounded-pill" type="search" placeholder="🔍 Search" aria-label="Search" />
                    </form>
                    <div className='d-flex flex-column align-items-center justify-content-center fs-5'>
                        <p>From:</p>
                        <input className='datePickers form-control' type="date" aria-label="Date" defaultValue={dateToShow} />
                        <p>To:</p>
                        <input className='datePickers form-control' type="date" aria-label="Date" defaultValue={dateToShow} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;