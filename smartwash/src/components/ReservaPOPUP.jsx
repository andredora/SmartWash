import React, { useState } from 'react';

function ReservaPOPup() {
  const [showPopup, setShowPopup] = useState(false);

  const handleReserveTrip = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div style={{ marginTop: '10px' }}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleReserveTrip}>Reservar Viagem</button>
      </div>
      
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <img src="https://www.symphony-group.co.uk/wp-content/uploads/Urban-White-Laundry-Room-Main-Shot-3-scaled.jpg" alt="Laundry Room" />
            <h2>Washing Reservation</h2>
            <p>Date: 2024-10-05 • 17:00</p>
            <p>State: RESERVED</p>
            <p>Where: A Lavandeira, Aveiro</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReservaPOPup;
