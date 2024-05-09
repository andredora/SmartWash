import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 


const Popup = ({ onClose, onDateTimeSelected }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        onDateTimeSelected(e.target.value, selectedTime);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
        onDateTimeSelected(selectedDate, e.target.value);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Select Date and Time</h2>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="date">Date:</label>
                    <input type="date" id="date" value={selectedDate} onChange={handleDateChange} className="border rounded-md p-2 w-full" />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="time">Time:</label>
                    <input type="time" id="time" value={selectedTime} onChange={handleTimeChange} className="border rounded-md p-2 w-full" />
                </div>
                <button className="btn btn-primary mt-4" onClick={onClose}>Select</button>
            </div>
        </div>
    );
};

const SelecionarHorarioReserva = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState(null);

    const handleTogglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleDateTimeSelected = (date, time) => {
        setSelectedDateTime({ date, time });
    };



    return (
        <div className='text-center'>
            <button className="btn btn-primary" onClick={handleTogglePopup}>Select Date and Time</button>
            {selectedDateTime && (
                <div className="mt-2">
                    <p>Date: {selectedDateTime.date}</p>
                    <p>Time: {selectedDateTime.time}</p>
                    <Link to={'/Payment'}>
                    <button className="btn btn-primary">Confirm</button>
                    </Link>
                </div>
            )}
            {showPopup && <Popup onClose={handleTogglePopup} onDateTimeSelected={handleDateTimeSelected} />}
        </div>
    );
};

export default SelecionarHorarioReserva;
