import React, { useState } from 'react';

export default function TransportCards({ onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (index) => {
    setSelectedOption(index);
    onSelect(index); // Notifica o componente pai sobre a mudança
  };

  const cards = [
    {
      image: "https://media.licdn.com/dms/image/C4E1BAQGjRfhAqeJtsQ/company-background_10000/0/1584652242635/automatic_laundry_services_co_inc__cover?e=2147483647&v=beta&t=cawK16nCqHV5_SElkfAuLActGBXpBJYW63zwDAS_GCo",
      title: "-- > Home to Laundry",
    },
    {
      image: "https://automaticlaundry.com/wp-content/uploads/sites/2/2017/07/Automatic3033-1_lowres.jpg",
      title: "-- > Laundry to Home",
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
