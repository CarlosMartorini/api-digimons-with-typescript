import { useFavoriteDigimons } from "../../providers/favoriteDigimons/FavoriteDigimons";
import { Digimon } from "../../types/Digimon";
import { Container, Image } from './Styles';
import StyledButton from '../button/Button';

interface CardDigimonProps {
    digimon: Digimon;
    isFavorite?: boolean
}

const CardDigimon = ({ digimon, isFavorite = false }: CardDigimonProps) => {

    const { name, level, img } = digimon;

    const { deleteDigimon, addDigimon } = useFavoriteDigimons();

    return (
        <Container>
            <div>{name}</div>
            <Image src={img}></Image>
            <div>{level}</div>
            {
                isFavorite ? (
                    <StyledButton onClick={() => deleteDigimon(digimon)} deleted={true}>
                        Remove
                    </StyledButton>
                ) : (
                    <StyledButton onClick={() => addDigimon(digimon)}>
                        Favorite
                    </StyledButton>
                )
            }
        </Container>
    )    
}

export default CardDigimon;