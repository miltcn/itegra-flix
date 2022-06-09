import axios from 'axios';
import Card, { Filme } from 'components/Card';
import { useEffect, useState } from 'react';
import './styles.css';

const MainPage = () => {

  const [filmes, setFilmes] = useState<Filme[]>();

  useEffect(() => {
    axios
        .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=6e0eaa7e7cb48216d74a48f5859118d0&language=pt-BR&page=1`
        )
        .then((response) => {
            setFilmes(response.data.results.slice(0, 10));
        })
  }, []);

    return (
      <>
        <h5>
          Populares
        </h5>
        <div className="mainpage-cards-container">
            {
              filmes && 
              filmes.map((filme) => (
                <div key={filme.id} className="item-container">
                <Card {...filme}/>
                </div>
              ))
            }
        </div> 
      </>
    );
}

export default MainPage;