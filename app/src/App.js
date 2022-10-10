import * as React from 'react';
import Sidebar from './Components/sidebar';
import Titlebar from './Components/Titlebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Config from './Pages/Config';
import Import from './Pages/Import';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Titlebar />
    <Sidebar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/config' element={<Config />} />
        <Route path='/import' element={<Import />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
