import { Link } from 'react-router-dom'

export default function HomeCards() {
    const cards = [
        {
            image: "https://media.licdn.com/dms/image/C4E1BAQGjRfhAqeJtsQ/company-background_10000/0/1584652242635/automatic_laundry_services_co_inc__cover?e=2147483647&v=beta&t=cawK16nCqHV5_SElkfAuLActGBXpBJYW63zwDAS_GCo",
            title: "Find Laundries",
            buttonText: "Click to See Laundries Near You",
            link: "/FindLaundries"
        },
        {
            image: "https://automaticlaundry.com/wp-content/uploads/sites/2/2017/07/Automatic3033-1_lowres.jpg",
            title: "Find a Transporter",
            buttonText: "Click to Find Transporters",
            link: "/EscolhaTransporte"
        },
    ];


    return (
        <div className="flex flex-col gap-3">
            {cards.map((card, index) => (
                <div key={index} className={`card w-96 bg-base-100 shadow-xl image-full`}>
                    <figure><img src={card.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="font-bold text-2xl text-primary-content">{card.title}</p>
                        <div className="card-actions justify-end">
                            <Link to={card.link}>
                                <button className="btn btn-primary">{card.buttonText}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
