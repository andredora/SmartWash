import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';

export default function DisponibilitiesLaundries() {
    return (
        <div>
            <FontAwesomeIcon icon={faSquareCheck} style={{ color: '#a1dca8', fontSize: '30px' }} /> {/* Ícone do quadrado verde pastel com tamanho 30px */}
            <text style={{ fontSize: '1.5rem', marginLeft: '5px' }}>Washing</text>
            <FontAwesomeIcon icon={faSquare} style={{ marginLeft: '40px', color: '#f4b7b7', fontSize: '30px' }} /> {/* Ícone do quadrado vermelho pastel com tamanho 30px */}
            <text style={{ fontSize: '1.5rem', marginLeft: '5px' }}>Drying</text>
        </div>
    );
}
