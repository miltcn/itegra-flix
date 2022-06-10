import { MainArtist } from 'interfaces/MainArtist';
import { BASE_URL_IMAGE } from 'utils/request';

import './styles.css';

const Artist = ({name, profile_path}:MainArtist) => {
    return (
      <div className="artist-container">
        <div className="artist-image-container">
          <img src={`${BASE_URL_IMAGE}${profile_path}`} alt="" />
        </div>
        <p>
          {name}
        </p>
      </div>
    );
}

export default Artist;