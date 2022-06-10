import Navbar from 'components/Navbar';
import DetailsPage from 'pages/DetailsPage';
import MainPage from 'pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/itegra-flix/" element={<MainPage />} />
        <Route path="/move-details">
          <Route path=":filmeId" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
