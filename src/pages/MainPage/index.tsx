
import Card from 'components/Card';
import './styles.css';

const MainPage = () => {
    return (
      <>
        <h5>
          Populares
        </h5>
        <div className="mainpage-cards-container">
          <div className="item-container">
            <Card />
          </div>
          <div className="item-container">
            <Card />
          </div>
          <div className="item-container">
            <Card />
          </div>
          <div className="item-container">
            <Card />
          </div>
          <div className="item-container">
            <Card />
          </div>
          <div className="item-container">
            <Card />
          </div>
          <div className="item-container">
            <Card />
          </div>
          <div className="item-container">
            <Card />
          </div>
          <div className="item-container">
            <Card />
          </div>
          <div className="item-container">
            <Card />
          </div>
          
        </div> 
      </>
    );
}

export default MainPage;