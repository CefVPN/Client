import * as React from 'react';
import Sidebar from './Components/sidebar';
import Titlebar from './Components/Titlebar';
import "./App.css";

function App() {
  return (
  <div className='App'>
    <Titlebar />
    <Sidebar />
  </div>
  );
}

export default App;
