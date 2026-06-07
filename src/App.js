import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import ListMenu from './Pages/ListMenu';
import MenuPage from './Pages/MenuPage';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/menu-page' element={<MenuPage />} />
        <Route path='/menu-list' element={<ListMenu />} />
        <Route path='/about-page' element={<AboutPage />} />

      </Routes>
    </div>
  );
}

export default App;
