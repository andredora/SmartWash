import React from 'react';
import ReservationPopup from './ReservationPopup';

const ReservationContainer = ({ showReservationPopup, onClose }) => {
  return (
    <div style={{ background: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
      {showReservationPopup && (
        <ReservationPopup onClose={onClose} />
      )}
    </div>
  );
};

export default ReservationContainer;
