import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


export default function RequestCards() {
    const cards = [
        {
            image: "https://media.architecturaldigest.com/photos/63f69b6897deb1555f3e54cc/master/w_1600%2Cc_limit/EEAAO_14036.jpg",
            title: "Clothing Transport",
            date: "2024-09-05 • 12:00",
            state: "ONGOING",
            start: "DETI, Universidade de Aveiro",
            end: "Lava Monstro, Aveiro",
            startend: "true"


        },

        {
            image: "https://www.symphony-group.co.uk/wp-content/uploads/Urban-White-Laundry-Room-Main-Shot-3-scaled.jpg",
            title: "Washing Reservation",
            date: "2024-10-05 • 17:00",
            state: "RESERVED",
            where: "A Lavandeira, Aveiro",
            startend: "false"


        },
        
        {
            image: "https://media.architecturaldigest.com/photos/63f69b6897deb1555f3e54cc/master/w_1600%2Cc_limit/EEAAO_14036.jpg",
            title: "Washing Reservation",
            date: "2024-01-02 • 19:30",
            state: "ENDED",
            where: "Lava Monstro, Aveiro",
            startend: "false"
        },
        

        {
            image: "https://media.npr.org/assets/img/2023/09/29/gettyimages-1486049233_wide-3728a037d629dc221128598a3357c2cd0f4c71ec.jpeg?s=1100&c=50&f=jpeg",
            title: "Clothing Transport",
            date: "2023-12-02 • 10:45",
            state: "ENDED",
            start: "Rua do Carmo, Nº6, Aveiro",
            end: "Lava Tudo, Aveiro",
            startend: "true"
        },

        {
            image: "https://www.symphony-group.co.uk/wp-content/uploads/Urban-White-Laundry-Room-Main-Shot-3-scaled.jpg",
            title: "Washing Reservation",
            date: "2012-12-12 • 12:12",
            state: "CANCELLED",
            where: "A Lavandeira, Aveiro",
            startend: "false"


        },
    ];

    return (
        <div className="flex flex-col gap-5 pb-16 pt-5" >
            {cards.map((card, index) => (
                <div key={index} className={`card w-96 h-56 shadow-xl image-full`}>
                    <figure style={{ height: '100%', width: '100%' }}><img src={card.image} alt="Shoes" style={{ objectFit: 'cover', height: '100%', width: '100%' }} /></figure>
                    <div className="card-body pb-4 pr-5">
                        <p className="font-bold text-xl" style={{ marginBottom: '1px' }}>{card.title}<span style={{ display: 'block', fontWeight: 'normal', fontSize: 'initial' }}>{card.date}</span></p>
                        <div>
                            {card.startend === "true" ? (
                                <>
                                <div>
                                    <p  style={{ marginBottom: '0px', marginTop: '0.1px' }}><FontAwesomeIcon icon={faLocationDot}  className="text-red-500" /> {card.start}</p>
                                    <p  style={{ marginBottom: '0px', marginTop: '0.1px' }}>...</p>
                                    <p  style={{ marginBottom: '0px', marginTop: '0.1px' }}><FontAwesomeIcon icon={faLocationDot}  className="text-red-500" /> {card.end}</p>
                                </div>
                                </>
                            ) : (
                                <div>
                                <p><FontAwesomeIcon icon={faLocationDot}  className="text-red-500"/> {card.where}</p>
                                </div>
                            )}
                        </div>
                        <div className="text-right">
                            <p>
                            <span className={`badge ${card.state === 'ONGOING' ? 'bg-orange-500' : card.state === 'RESERVED' ? 'bg-green-500' : card.state === 'ENDED' ? 'bg-yellow-500' : 'bg-red-500'} text-white py-1 px-2 rounded-md`}>
                            {card.state}
                            </span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
