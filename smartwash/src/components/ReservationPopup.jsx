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
    <div className="popup">
      <div className="popup-inner">
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
        <h3 style={{color: 'currentcolor', fontsize: '14px', width: '195px'}}>Escolha uma Lavanderia:</h3>
        <ul>
          {/* Render suggested laundries here */}
          <li onClick={() => handleLaundrySelection('Laundry A')}>Laundry A</li>
          <li onClick={() => handleLaundrySelection('Laundry B')}>Laundry B</li>
          <li onClick={() => handleLaundrySelection('Laundry C')}>Laundry C</li>
        </ul>
        <div><button onClick={handleReservation}>Reservar</button>
        </div>
        <div><button onClick={onClose}>Fechar</button>
      </div>
      </div>
    </div>
  );
};

export default ReservationPopup;
