import StarImage from '../../assets/images/star.svg';
import HeartImage from '../../assets/images/heart.svg';
import { Filme } from 'interfaces/Filme';
import { BASE_URL_IMAGE } from 'utils/request';

import './styles.css';

const Card = ({poster_path, title, vote_average, release_date, vote_count}: Filme) => {
    return (
      <div className="card-container">
          <div className="card-image">
            { poster_path &&
              <img src={`${BASE_URL_IMAGE}/${poster_path}`} alt='' />
            }
          </div>
          <p>
            {title}
          </p>
          <div className="info-movie">
            <div className="star-container">
              <div className="star-image">
                <img src={StarImage} alt='' />
              </div>
              <p>
                {vote_average}
              </p>
            </div>
            <p>
              {release_date.slice(0,4)}
            </p>
            <div className="heart-container">
              <div className="heart-image">
                <img src={HeartImage} alt='' />
              </div>
              <p>
                {vote_count}
              </p>
            </div>
          </div>
      </div>
    );
}

export default Card;