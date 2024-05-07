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
        <h2>Reservar Lavanderia</h2>
        <label>
          Quantidade de Roupa:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <label>
          Número de Lavagens Necessárias:
          <input type="number" value={washCycles} onChange={(e) => setWashCycles(e.target.value)} />
        </label>
        <label>
          Horário:
          <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
        </label>
        <h3>Escolha uma Lavanderia:</h3>
        <ul>
          {/* Render suggested laundries here */}
          <li onClick={() => handleLaundrySelection('Laundry A')}>Laundry A</li>
          <li onClick={() => handleLaundrySelection('Laundry B')}>Laundry B</li>
          <li onClick={() => handleLaundrySelection('Laundry C')}>Laundry C</li>
        </ul>
        <button onClick={handleReservation}>Reservar</button>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ReservationPopup;
