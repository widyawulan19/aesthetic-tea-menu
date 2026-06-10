import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import ListMenu from './Pages/ListMenu';
import MenuPage from './Pages/MenuPage';
import AboutPage from './Pages/AboutPage';
import Welcome from './Pages/Welcome';
import MenuList from './Pages/MenuList';
import teaMenu from './Data/TeaMenu.json'
import AosInit from './utils/AosInit';

function App() {
  return (
    <div className='App'>

      <AosInit />
      <Routes>

        <Route path='/' element={<Welcome />} />
        <Route path='/menu-page' element={<MenuPage />} />
        <Route path='/menu-list/' element={<MenuList />} />
        <Route path='/about-page' element={<AboutPage />} />

      </Routes>
    </div>
  );
}

export default App;
