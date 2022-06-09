import CardImage from '../../assets/images/cardimage.jpg';
import StarImage from '../../assets/images/star.svg';
import HeartImage from '../../assets/images/heart.svg';

import './styles.css';

const Card = () => {
    return (
      <div className="card-container">
          <div className="card-image">
            <img src={CardImage} alt='' />
          </div>
          <p>
            Título do filme
          </p>
          <div className="info-movie">
            <div className="star-container">
              <div className="star-image">
                <img src={StarImage} alt='' />
              </div>
              <p>
                8.2
              </p>
            </div>
            <p>
              2021
            </p>
            <div className="heart-container">
              <div className="heart-image">
                <img src={HeartImage} alt='' />
              </div>
              <p>
                15000
              </p>
            </div>
          </div>
      </div>
    );
}

export default Card;