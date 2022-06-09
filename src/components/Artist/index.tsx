import ArtistImage from '../../assets/images/artistimage.jpg';
import './styles.css';

const Artist = () => {
    return (
      <div className="artist-container">
        <div className="artist-image-container">
          <img src={ArtistImage} alt="" />
        </div>
        <p>
          Nome do artista
        </p>
      </div>
    );
}

export default Artist;