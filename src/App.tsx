import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { useFavoriteDigimons } from './providers/favoriteDigimons/FavoriteDigimons';
import { Digimon } from './types/Digimon';
import { Container, FavoriteList, List } from './Styles';
import DigimonsList from './components/digimonsList/DigimonsList';

function App() {

  const [digimons, setDigimons] = useState<Digimon[]>([] as Digimon[]);
  const [error, setError] = useState<string>('');

  const { favorites } = useFavoriteDigimons();

  useEffect(() => {
    axios('https://digimon-api.vercel.app/api/digimon')
    .then((response) => setDigimons([...response.data]))
    .catch((error) => setError(error));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h4>Welcome to Digimon World!</h4>
        <Container>
          <FavoriteList>
            <DigimonsList digimons={favorites} isFavorite={true}/>
          </FavoriteList>
          <List>
            <DigimonsList digimons={digimons}/>
          </List>
        </Container>
      </header>
    </div>
  );
}

export default App;
