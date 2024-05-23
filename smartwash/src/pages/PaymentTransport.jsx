import React, { useState } from 'react';
import maquinalavar from '../assets/maquinalavar.png';
import car from '../assets/car.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import PurchaseSuccessPopup from '../components/PurchaseSuccessPopup'; // Importe o componente PurchaseSuccessPopup aqui

export default function Lavandeira() {
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    
    const handleNextClick = () => {
        // Lógica para avançar para a próxima etapa aqui
    
        // Após a lógica bem-sucedida, exibe o pop-up
        setShowSuccessPopup(true);
    };
    
    const handleClosePopup = () => {
        // Função para Close o pop-up
        setShowSuccessPopup(false);
    };

    return (
        <div className='pb-12'>
            <div style={{ position: 'relative' }}>
                <Link to="/transport" style={{ position: 'absolute', top: '10px', left: '10px', zIndex: '999' }}> 
                        <button className="btn btn-outline  bg-white rounded-full">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                </Link>
            </div>                
            <p style={{ textAlign: 'left', fontSize: '2rem', marginTop: '5px', marginLeft:'70px'}}>Checkout</p>
            <p style={{ textAlign: 'left', fontSize: '2rem', marginTop: '15px', marginLeft:'14px', marginBottom:'20px'}}>May 10 · 5pm</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginLeft:'4px', marginRight:'14px' }}> 
                <figure><img src={maquinalavar} alt="maquinalavar" style={{ width: '80px', height: '80px'}} /></figure>

                <p style={{ fontSize: '25px', marginTop: '15px' , marginBottom: '15px' }}>Washing Machine (1)</p>
                <p style={{ fontSize: '25px', marginTop: '15px' , marginBottom: '15px' }}>4€</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginLeft:'4px', marginRight:'14px' }}> 
                <figure><img src={car} alt="car" style={{ width: '80px', height: '80px'}} /></figure>

                <p style={{ fontSize: '25px', marginTop: '15px' , marginBottom: '15px' }}>Laundry - Home</p>
                <p style={{ fontSize: '25px', marginTop: '15px' , marginBottom: '15px' }}>3,65€</p>
            </div>
            <div style={{ height: '1px', backgroundColor: 'grey', marginLeft:'14px', marginRight:'14px', marginTop:'20px'}}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginLeft:'14px', marginRight:'14px' }}> 
                <p style={{ fontSize: '2rem', marginTop: '15px' , marginBottom: '15px' }}>TOTAL</p>
                <p style={{ fontSize: '2rem', marginTop: '15px' , marginBottom: '15px' }}>7,65€</p>
            </div>

            <div style={{height: '1px', backgroundColor: 'grey' , marginLeft:'14px', marginRight:'14px'  }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' , marginLeft:'14px', marginRight:'14px' }}> 
                <FontAwesomeIcon icon={faCcVisa} style={{ fontSize: '2rem', marginTop: '15px' , marginBottom: '15px' }}/>              
                <p style={{ fontSize: '2rem', marginTop: '15px' , marginBottom: '15px' }}>VISA *********</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' , marginTop:'20px'}}>
                <button className="btn btn-outline bg-white" style={{ width: '250px' }}>
                    Add another payment method
                </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop:'80px' }}>
                <button className="btn btn-outline" style={{ backgroundColor:'#779ecb',borderColor:'#779ecb',width: '250px', height:'90px'}} onClick={handleNextClick}>
                    <h1 style={{fontSize:'30px'}}>PAY</h1>
                </button>
            </div>
            {showSuccessPopup && <PurchaseSuccessPopup onClose={handleClosePopup} />} 

        </div>
    );
}
