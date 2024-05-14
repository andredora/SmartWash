import LocalLavandeira from '../assets/LocalizacaoLavandeira.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Lavandeira() {


    return (
        <div>
            <div style={{ position: 'relative' }}>
                <Link to="/LaundriesTransport" style={{ position: 'absolute', top: '10px', left: '10px', zIndex: '999' }}> 
                        <button className="btn btn-outline  bg-white rounded-full">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                </Link>
                <figure>
                    <img style={{marginTop: '20px'}}src={"https://priscilakunenn.com/wp-content/uploads/2021/06/Lavandaria-1-1024x768.jpg"} alt="Shoes" />
                </figure>
            </div>
            <p>
                <text style={{ fontSize: '1.5rem', marginLeft: '5px' }}>
                    A Lavandeira   ·   Aberto
                </text>
            </p>
            <p>
                <text style={{ fontSize: '1.5rem', marginLeft: '5px' }}>
                    Aveiro · 2,5 km
                </text>
            </p>
            <p>
                <text style={{ fontSize: '1.5rem', marginLeft: '5px', color: '#6b9aea' }}>
                    3 free Washing Machines
                </text>
            </p>
            <p>
                <text style={{ fontSize: '1.5rem', marginLeft: '5px', color: '#db5856' }}>
                    No free Dryers
                </text>
            </p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>                          
              <Link to={"/ReserveMachinesTransport"}>
                <button className="btn btn-outline" style={{ fontSize: '1.5rem', width: '300px' }}>Reserve Machines</button>
                </Link> 
            </div>
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
                <p style={{ fontSize: '1.5rem', color: '#db5856' }}>
                    Closes at 11pm
                    <button className="btn btn-outline" style={{ fontSize: '1.5rem', width: '180px', marginLeft: '44px' }}>Schedule</button>
                </p>
            </div>
            <figure style={{marginTop: "20px"}}>
                <img src={LocalLavandeira} />
            </figure>
        </div>
    );
}