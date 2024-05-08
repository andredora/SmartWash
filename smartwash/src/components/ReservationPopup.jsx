import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importe o estilo padrão do DatePicker

const ReservationPopup = ({ onClose }) => {
  const [selectedLaundry, setSelectedLaundry] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date()); // Estado para armazenar a data selecionada
  const [quantity, setQuantity] = useState(1);
  const [washCycles, setWashCycles] = useState(1);
  const [isFormValid, setIsFormValid] = useState(true); // Alterado para true inicialmente

  const handleLaundrySelection = (laundry) => {
    setSelectedLaundry(laundry);
  };

  const handleReservation = () => {
    // Check if all required fields are filled
    if (selectedLaundry && selectedTime && quantity && washCycles && selectedDate) {
      // Add logic to make reservation
      console.log('Reservation made:', {
        laundry: selectedLaundry,
        time: selectedTime,
        quantity,
        washCycles,
        date: selectedDate // Adicionado a data na saída do console.log
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
      {/* Adicionando a mensagem de erro */}
      {!isFormValid && <p style={{ color: 'red' }}>* Por favor, preencha todos os campos obrigatórios.</p>}
      <div>
        <div><button className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" style={{ marginTop: '5px', marginBottom: '5px' }} onClick={handleReservation}>Reservar</button>
        </div>
        <div><button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full" style={{ marginTop: '5px', marginBottom: '5px' }} onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default ReservationPopup;
