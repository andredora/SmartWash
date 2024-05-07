import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
function Navigation() {
    return (
        <div className="join mx-auto">
            <Link to="/home" className="btn btn-primary join-item text-xs">
                <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
            <Link to="/search" className="btn btn-secondary join-item text-xs">
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
            </Link>
            <Link to="/myrequests" className="btn btn-accent join-item text-xs">
                <FontAwesomeIcon icon={faUser} /> Requests
            </Link>
            <Link to="/profile" className="btn btn-neutral join-item text-xs">
                <FontAwesomeIcon icon={faListUl} /> Profile
            </Link>
        </div>
    );
}

export default Navigation;