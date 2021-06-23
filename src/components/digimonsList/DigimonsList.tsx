import { Digimon } from '../../types/Digimon';
import CardDigimon from '../cardDigimon/CardDigimon';

interface DigimonsProps {
    digimons: Digimon[];
    isFavorite?: boolean
}

const DigimonsList = ({ digimons, isFavorite = false }: DigimonsProps) => {

    return (
        <>
            {
                digimons.map((digimon, index) => (
                    <CardDigimon key={index} isFavorite={isFavorite} digimon={digimon}/>
                ))
            }
        </>
    )
}

export default DigimonsList;