import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Movie from './Pages/Movie/Movie';
import Search from './Pages/Search/Search'

function App() {
  return (
    < >
       <Navbar/>
       {/* <Home/> */}
       <BrowserRouter>
       <Routes>
        <Route path="/movie" element={<Movie/>} />
        <Route path="/search" element={<Search/>} />
        
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
