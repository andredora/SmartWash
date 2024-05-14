import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons';

export default function ProfilePage() {
    return (
        <div className="container mx-auto px-4 pb-16 pt-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center mb-4 md:mb-6">
                    <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-200 mb-2">
                        <FontAwesomeIcon icon={faUser} className="h-full w-full text-gray-400" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-semibold">Carolina Deslandes</h2>
                        <p className="text-sm text-gray-600">carolina.deslandes@rock.com</p>
                    </div>
                </div>
                <div className="border-b border-gray-200 pb-4 md:pb-6 mb-4 md:mb-6">
                    <h3 className="text-lg font-semibold mb-2 md:mb-3">Informações Pessoais</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                        <p>Rua do Roque, 6000-029</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                        <p>VISA **** **** **** 1234</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2 md:mb-3">Configurações</h3>
                    <ul className="text-gray-600">
                        <li className="mb-2 underline">Preferências de Pagamento</li>
                        <li className="mb-2 underline">Privacidade</li>
                        <li className="mb-2 underline">Segurança</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
