import { faBorderAll, faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const ReservationPopup = ({ onClose }) => {
  const [selectedLaundry, setSelectedLaundry] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [washCycles, setWashCycles] = useState(1);

  const handleLaundrySelection = (laundry) => {
    setSelectedLaundry(laundry);
  };

  const handleReservation = () => {
    // Add logic to make reservation
    console.log('Reservation made:', {
      laundry: selectedLaundry,
      time: selectedTime,
      quantity,
      washCycles,
    });
    onClose(); // Close the popup after reservation is made
  };

  return (
    <div className="popup" sytle= {{ border: '2px solid #000'}}>
      <div className="popup-inner" >
        <h2 style={{fontSize: '20px'}}><b>Reservar Lavanderia</b></h2>
        <div><label style={{fontsize: '14px'}}>
          Quantidade de Roupa:
          <input style={{color: 'currentcolor', fontsize: '14px', width: '200px'}} type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        </div>
        <div><label >
          Nº de Lavagens Necessárias:
          <input style={{color: 'currentcolor', fontsize: '14px', width: '160px'}} type="number" value={washCycles} onChange={(e) => setWashCycles(e.target.value)} />
        </label></div>
        <div><label>
          Horário:
          <input style={{color: 'currentcolor', fontsize: '14px', width: '300px'}} type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
        </label></div>
        <div><h3 style={{color: 'currentcolor', fontsize: '14px', width: '265px'}}>Escolha uma Lavanderia:</h3>
        <ul>
          {/* Render suggested laundries here */}
          <li onClick={() => handleLaundrySelection('A Lavandeira')}><b>A Lavandeira</b></li>
          <li onClick={() => handleLaundrySelection('LavEsec lavandaria')}><b>LavEsec lavandaria</b></li>
          <li onClick={() => handleLaundrySelection('Clean2you')}><b>Clean2you</b></li>
        </ul>
        </div><div><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{marginTop: '5px', marginBottom: '5px'}} onClick={handleReservation}>Reservar</button>
        </div>
        <div><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{marginTop: '5px', marginBottom: '5px'}} onClick={onClose}>Fechar</button>
      </div>
      </div>
    </div>
  );
};

export default ReservationPopup;
