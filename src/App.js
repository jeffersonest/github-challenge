import React from 'react';
import Routes from './routes';
import Header from './components/layouts/header';
import Main from './components/layouts/main';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <Header />
      <Main>
        <Routes />
      </Main>  
    </>
  );
}

export default App;
