import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dash from './pages/Dash'
import Settings from './pages/config'
import Titlebar from './components/Titlebar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className='main_cnt bg-main_dbg select-none'>
      <head>
        <title>CefVPN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
      </head>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dash />}/>
          <Route path='/config' element={<Settings />}/>
        </Routes>
        <Titlebar />
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
