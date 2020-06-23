import React from 'react';
import Routes from './routes';
import Header from './components/layouts/header';
import Main from './components/layouts/main';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div id="app">
      <ToastContainer position="bottom-right" />
      <Header />
      <Main>
        <Routes />
      </Main>  
    </div>
  );
}

export default App;
