import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
function Navigation() {
    return (
        <div className="join fixed bottom-0 left-0 right-0 bg-white z-50 pt-2 pb-2 flex justify-center">
            <Link to="/home" className="btn btn-primary join-item text-xs">
                <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
            <Link to="/FindLaundries" className="btn btn-secondary join-item text-xs">
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
            </Link>
            <Link to="/myrequests" className="btn btn-accent join-item text-xs">
                <FontAwesomeIcon icon={faListUl} /> Requests
            </Link>
            <Link to="/profile" className="btn btn-neutral join-item text-xs">
                <FontAwesomeIcon icon={faUser} /> Profile
            </Link>
        </div>
    );
}

export default Navigation;