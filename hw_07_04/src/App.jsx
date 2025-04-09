import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import About from './pages/About';
import ShopApp from './pages/ShopApp';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ShopApp />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
