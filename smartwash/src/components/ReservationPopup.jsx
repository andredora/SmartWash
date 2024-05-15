import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import { Link } from 'react-router-dom';

const ReservationPopup = ({ onClose }) => {
  const [selectedLaundry, setSelectedLaundry] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [quantity, setQuantity] = useState(1);
  const [washCycles, setWashCycles] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(selectedLaundry && selectedTime.trim() !== '' && quantity > 0 && washCycles > 0 && selectedDate);
  }, [selectedLaundry, selectedTime, quantity, washCycles, selectedDate]);

  const handleLaundrySelection = (laundry) => {
    setSelectedLaundry(laundry);
  };

  const handleReservation = () => {
    console.log('Reservation made:', {
      laundry: selectedLaundry,
      time: selectedTime,
      quantity,
      washCycles,
      date: selectedDate
    });
    onClose();
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="popup" style={{ border: '2px solid #000' }}>
      <div className="popup-inner">
        <h2 style={{ fontSize: '20px' }}><b>Reservar Lavandaria</b></h2>
        <div><label style={{ fontSize: '16px' }}>
          * Quantidade de Roupa:
          <input style={{ color: 'currentcolor', fontSize: '14px', width: '200px' }} type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label></div>
        <div><label>
          * Nº de Lavagens Necessárias:
          <input style={{ color: 'currentcolor', fontSize: '14px', width: '160px' }} type="number" value={washCycles} onChange={(e) => setWashCycles(e.target.value)} />
        </label></div>
        <div><label>
          * Horário:
          <input style={{ color: 'currentcolor', fontSize: '14px', width: '300px' }} type="time" value={selectedTime} onChange={(e) => handleTimeChange(e)} />
        </label></div>
        <div style={{ width: '310px'}}>
          <label>
            * Data:
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              style={{ color: 'currentcolor', fontSize: '14px', width: '300px' }}
            />
          </label>
        </div>
        <div style={{ width: '440px', margin: '0 auto', marginBottom: '5px', textAlign: 'center' }}>
          <h3 style={{ color: 'currentcolor', fontSize: '16px' }}>
            * Escolha uma Lavandaria Disponível no Momento:
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
      {/* Error message */}
      {!isFormValid && <p style={{ color: 'red', textAlign: 'center' }}>* Por favor, preencha todos os campos obrigatórios.</p>}
      <div className="flex justify-between items-center">
        {/* Redirect link */}
        {isFormValid ? (
          <Link 
            to="/FindLaundries"
            className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full mx-auto"
            style={{ marginTop: '5px', marginBottom: '5px', textDecoration: 'none' }}
            onClick={handleReservation}
          >
            Reservar
          </Link>
        ) : (
          <button 
            className="bg-blue-800 text-white font-bold py-2 px-4 rounded-full mx-auto"
            style={{ marginTop: '5px', marginBottom: '5px', cursor: 'not-allowed' }} 
            disabled
          >
            Reservar
          </button>
        )}
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mx-auto" style={{ marginTop: '5px', marginBottom: '5px' }} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ReservationPopup;
