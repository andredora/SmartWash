import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TransportCards() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const cards = [
    {
      image: "https://media.licdn.com/dms/image/C4E1BAQGjRfhAqeJtsQ/company-background_10000/0/1584652242635/automatic_laundry_services_co_inc__cover?e=2147483647&v=beta&t=cawK16nCqHV5_SElkfAuLActGBXpBJYW63zwDAS_GCo",
      title: "-- > Home to Laundry",
      link: "/FindLaundries"
    },
    {
      image: "https://automaticlaundry.com/wp-content/uploads/sites/2/2017/07/Automatic3033-1_lowres.jpg",
      title: "-- > Laundry to Home",
      link: "/EscolhaTransporte"
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
                <input 
                  type="radio" 
                  name="cardSelection" 
                  checked={selectedOption === index} 
                  onChange={() => handleOptionChange(index)} 
                />
                <Link to={card.link}>
                  <button className="btn btn-primary">{card.buttonText}</button>
                </Link>
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
