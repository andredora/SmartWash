import { faBorderAll, faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const ReservationPopup = ({ onClose }) => {
  const [selectedLaundry, setSelectedLaundry] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [washCycles, setWashCycles] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLaundrySelection = (laundry) => {
    setSelectedLaundry(laundry);
  };

  const handleReservation = () => {
    // Check if all required fields are filled
    if (selectedLaundry && selectedTime && quantity && washCycles) {
      // Add logic to make reservation
      console.log('Reservation made:', {
        laundry: selectedLaundry,
        time: selectedTime,
        quantity,
        washCycles,
      });
      onClose(); // Close the popup after reservation is made
    } else {
        setIsFormValid(false); // Define o estado como falso para mostrar a mensagem de erro
    }
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  return (
    <div className="popup" sytle= {{ border: '2px solid #000'}}>
      <div className="popup-inner" >
        <h2 style={{fontSize: '20px'}}><b>Reservar Lavanderia</b></h2>
        <div><label style={{fontsize: '14px'}}>
          * Quantidade de Roupa:
          <input style={{color: 'currentcolor', fontsize: '14px', width: '200px'}} type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        </div>
        <div><label >
          * Nº de Lavagens Necessárias:
          <input style={{color: 'currentcolor', fontsize: '14px', width: '160px'}} type="number" value={washCycles} onChange={(e) => setWashCycles(e.target.value)} />
        </label></div>
        <div><label>
          * Horário:
          <input style={{color: 'currentcolor', fontsize: '14px', width: '300px'}} type="time" value={selectedTime} onChange={(handleTimeChange) }/>
        </label></div>
        <div style={{ width: '440px', margin: '0 auto', marginBottom: '5px', textAlign: 'center' }}>
      <h3 style={{ color: 'currentcolor', fontSize: '16px' }}>
        * Escolha uma Lavanderia Disponível no Momento:
      </h3>
      <div>
        <button 
          className={`rounded-full ${selectedLaundry === 'A Lavandeira' ? 'bg-green-700' : 'bg-green-500'} hover:bg-green-700 text-white font-bold py-2 px-4 uppercase`}
          onClick={() => handleLaundrySelection('A Lavandeira')}
          style={{ cursor: 'pointer', marginBottom: '5px' }}
        >
          A Lavandeira
        </button>
      </div>
      <div>
        <button 
          className={`rounded-full ${selectedLaundry === 'LavEsec lavandaria' ? 'bg-green-700' : 'bg-green-500'} hover:bg-green-700 text-white font-bold py-2 px-4 uppercase`}
          onClick={() => handleLaundrySelection('LavEsec lavandaria')}
          style={{ cursor: 'pointer', marginBottom: '5px' }}
        >
          LavEsec lavandaria
        </button>
      </div>
      <div>
        <button 
          className={`rounded-full ${selectedLaundry === 'Clean2you' ? 'bg-green-700' : 'bg-green-500'} hover:bg-green-700 text-white font-bold py-2 px-4 uppercase`}
          onClick={() => handleLaundrySelection('Clean2you')}
          style={{ cursor: 'pointer', marginBottom: '5px' }}
        >
          Clean2you
        </button>
      </div>
          </div>
        </div>
        {/* Adicionando a mensagem de erro */}
        {!isFormValid && <p style={{ color: 'red' }}>* Por favor, preencha todos os campos obrigatórios.</p>}
        <div>
        <div><button className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" style={{marginTop: '5px', marginBottom: '5px'}} onClick={handleReservation}>Reservar</button>
        </div>
        <div><button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full" style={{marginTop: '5px', marginBottom: '5px'}} onClick={onClose}>Fechar</button>
      </div>
      </div>
    </div>
  );
};

export default ReservationPopup;
