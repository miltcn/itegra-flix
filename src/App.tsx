import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import Card from 'components/Card';


const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Card />
      </div>
    </>
  );
}

export default App;
