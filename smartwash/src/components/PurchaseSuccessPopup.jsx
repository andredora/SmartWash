import React from 'react';

const PurchaseSuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4">Pagamento e Reserva efetuados com sucesso</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default PurchaseSuccessPopup;
