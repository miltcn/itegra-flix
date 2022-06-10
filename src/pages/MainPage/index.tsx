import axios from 'axios';
import Card from 'components/Card';
import { Filme } from 'interfaces/Filme';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'utils/request';
import './styles.css';

const MainPage = () => {

  const [filmes, setFilmes] = useState<Filme[]>();

  useEffect(() => {
    axios
        .get(
            `${BASE_URL}/popular?api_key=${API_KEY}&language=pt-BR&page=1`
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
                  <Link to={`/move-details/${filme.id}`}>
                    <Card {...filme}/>
                  </Link>
                </div>
              ))
            }
        </div> 
      </>
    );
}

export default MainPage;