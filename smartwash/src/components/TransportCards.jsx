import React, { useState } from 'react';

export default function TransportCards({ onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (index) => {
    setSelectedOption(index);
    onSelect(index); // Notifica o componente pai sobre a mudança
  };

  const cards = [
    {
      image: "https://st.depositphotos.com/2249091/4966/i/950/depositphotos_49666183-stock-photo-man-putting-suitcases-in-car.jpg",
      title: "Home to Laundry",
    },
    {
      image: "https://images.inc.com/uploaded_files/image/1920x1080/getty_851372958_377242.jpg",
      title: "Laundry to Home",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {cards.map((card, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src={card.image} alt={card.title} /></figure>
          <div className="card-body">
            <p className="font-bold text-2xl text-primary-content">{card.title}</p>
            <div className="card-actions justify-end">
              <label className="flex items-center gap-2">
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="cardSelection" 
                    checked={selectedOption === index} 
                    style={{ width: '40px', height: '40px' }} // Tamanho do botão
                    onChange={() => handleOptionChange(index)} 
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
