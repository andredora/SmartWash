import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SelecionarNumMaquinasCards from '../components/SelecionarNumMaquinasCards';
import SelecionarHorarioReservaTransport from '../components/SelecionarHorarioReservaTransport';

export default function ReserveMachines() {


    return (
        <div className='pb-12'>
            <div style={{ position: 'relative' }}>
                <Link to="/LavandeiraTransport" style={{ position: 'absolute', top: '10px', left: '10px', zIndex: '999' }}> 
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

            <SelecionarNumMaquinasCards />
            <SelecionarHorarioReservaTransport />
           
        </div>
    );
}