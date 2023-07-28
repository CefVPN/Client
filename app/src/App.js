import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Dash from './pages/Dash.jsx'
import Settings from './pages/config.jsx'
import Titlebar from './components/Titlebar.jsx';
import Sidebar from './components/Sidebar.jsx';


function App() { 
  return (
    <div className='main_cnt bg-main_dbg select-none'>
      <head>
        <title>CefVPN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
      </head>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dash />} />
          <Route path='/index.html' element={<Navigate replace to={"/"} />} />
          <Route path='/config' element={<Settings />}/>
        </Routes>
        <Titlebar />
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
