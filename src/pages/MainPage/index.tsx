import axios from 'axios';
import Card from 'components/Card';
import { Filme } from 'interfaces/Filme';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'utils/request';
import { TailSpin } from  'react-loader-spinner';
import './styles.css';

const MainPage = () => {

  const [filmes, setFilmes] = useState<Filme[]>();
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
        .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=6e0eaa7e7cb48216d74a48f5859118d0&language=pt-BR&page=1`
        )
        .then((response) => {
            setFilmes(response.data.results.slice(0, 10));
        })
        .finally(() => {
          setIsLoading(false);
        })
  }, []);

    return (
      <>
        <h5>
          Populares
        </h5>
        
        <div className="mainpage-cards-container">
            {
              isLoading ? (
                <div className="loading">
                  <TailSpin color="#FB8200" height={80} width={80} />
                </div>
              ) : (
                filmes && 
                filmes.map((filme) => (
                  <div key={filme.id} className="item-container">
                    <Link to={`/move-details/${filme.id}`}>
                      <Card {...filme}/>
                    </Link>
                  </div>
                ))               
              )             
            }
        </div> 
      </>
    );
}

export default MainPage;