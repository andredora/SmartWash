import { Link } from 'react-router-dom'
import DisponibilitiesLaundries from './DisponibilitiesLaundries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';



export default function FindLaundriesCards() {
    const cards = [
        {
            title: "Lava Monstro",
            distance: "1.2 km",
            image: "data:image/jpeg;base64,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",
            hasDryers: 'sim',
        },
        {
            title: "A Lavandeira",
            distance: "2.5 km",
            image: "https://priscilakunenn.com/wp-content/uploads/2021/06/Lavandaria-1-1024x768.jpg",
            link: "/Lavandeira",
            hasDryers: 'nao',

        },
        {
            title: "Lava e Seca",
            distance: "3.0 km",
            image: "https://espacosrenovados.com/wp-content/uploads/2022/10/O-que-deve-considerar-para-organizar-uma-lavandaria-pequena-1170x725.png",
            hasDryers: 'nao',
        }
    ];



    return (
        <div className="flex flex-col gap-3">
            {cards.map((card, index) => (
                <a key={index} href={card.link} className="card bg-base-100 border-2 image-full" style={{ width: '360px', backgroundSize: 'cover', backgroundPosition: 'center', height:'200px', textDecoration: 'none' }}>
                    <figure><img src={card.image} alt="Shoes" /></figure>
    
                    <div className="card-body">
                        
                        <p className="font-bold text-2xl text-primary-content">{card.title}</p>
                        <p className="text-primary-content">{card.distance}</p>                    

                        <div>
                            <FontAwesomeIcon icon={faSquareCheck} style={{ color: '#a1dca8', fontSize: '30px' }} /> {/* Ícone do quadrado verde pastel com tamanho 30px */}
                            <text style={{ fontSize: '1.5rem', marginLeft: '5px' }}>Washing</text>
                            {card.hasDryers === 'sim' ? (
                                <FontAwesomeIcon icon={faSquareCheck} style={{  marginLeft: '40px', color: '#a1dca8', fontSize: '30px' }} />
                            ) : (
                                <FontAwesomeIcon icon={faSquareXmark} style={{ marginLeft: '40px', color: '#f4b7b7', fontSize: '30px' }} />
                            )}
                            <text style={{ fontSize: '1.5rem', marginLeft: '5px' }}>Drying</text>
                        </div>

                    </div>
                </a>
            ))}                     
        </div>
    );
    
}
