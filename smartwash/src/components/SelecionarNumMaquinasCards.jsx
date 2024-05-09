import MaquinaSecar from "../assets/maquinasecar.png";
import MaquinaLavar from "../assets/maquinalavar.png";
import React, { useState } from 'react';

export default function SelecionarNumMaquinasCards() {
    const [cards, setCards] = useState([
        { title: "Washing Machines", preco: 4, quantidade: 1, imagem: MaquinaLavar, precoinicial: 4, quantidadeinicial: 3},
        { title: "Dryers", preco: 0, quantidade: 0, imagem: MaquinaSecar, precoinicial:2, quantidadeinicial: 0},
        // Adicione outros itens conforme necessário
    ]);

    const handleDecrease = (index) => {
        const updatedCards = [...cards];
        if (updatedCards[index].quantidade > 0) {
            updatedCards[index].quantidade -= 1;
            updatedCards[index].preco = updatedCards[index].quantidade * updatedCards[index].precoinicial;
            setCards(updatedCards);
        }
    };

    const handleIncrease = (index) => {
        const updatedCards = [...cards];
        if (updatedCards[index].quantidade < updatedCards[index].quantidadeinicial) {
            updatedCards[index].quantidade += 1;
            updatedCards[index].preco = updatedCards[index].quantidade * updatedCards[index].precoinicial;
            setCards(updatedCards);
        }
    };

    return (
        <div className="flex flex-col gap-5 pb-16 pt-5">
            {cards.map((card, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center">
                    <figure className="mr-4">
                        <img src={card.imagem} alt="Product" style={{ width: '100px', height: 'auto' }} />
                    </figure>
                    <div className="flex-grow flex flex-col justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">{card.title}</h2>
                            <p className="text-sm text-gray-600">{card.preco}€</p>
                        </div>
                        <div className="flex items-center justify-end">
                            <button className={`btn btn-outline mr-2 ${card.quantidade === 0 ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => handleDecrease(index)} disabled={card.quantidade === 0}>-</button>
                            <span>{card.quantidade}</span>
                            <button className={`btn btn-outline ml-2 ${card.quantidade === card.quantidadeinicial ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => handleIncrease(index)} disabled={card.quantidade === card.quantidadeinicial}>+</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
