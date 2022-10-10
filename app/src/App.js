import * as React from 'react';
import Sidebar from './Components/sidebar';
import Titlebar from './Components/Titlebar';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Config from './Pages/Config';
import Home from './Pages/Home';
import Import from './Pages/Import';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Titlebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/config' element={<Config />} />
        <Route path='/import' element={<Import />} />
      </Routes>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
