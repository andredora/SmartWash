import SearchBar from "../components/SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import FindLaundriesCards from "../components/FindLaundriesCards";
import { Link } from "react-router-dom";



export default function FindLaundries() {

    

    return (
        <div className="flex items-center flex-col gap-3">
        <div className="flex items-center justify-center gap-12 mx-auto">
        <Link to="/home"> {/* Use o Link para navegar para a página "Home" */}
                    <button className="btn btn-outline">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </Link>
                      <SearchBar />
            <button className="btn btn-outline">
                <FontAwesomeIcon icon={faSliders} />
            </button>

           
        </div > 
        <div className="flex items-center">
            <p style={{ fontSize: '1.5rem', marginBottom:'10px'}}>Recent Search</p>
            <p style={{ fontSize: '1.5rem', opacity: '0' }}>wdfcwrcfescwdfr</p>
        </div>
        <FindLaundriesCards />
        </div>
    );
}