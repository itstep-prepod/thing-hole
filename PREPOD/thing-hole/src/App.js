import React from 'react';
import {MainPage} from './pages/main';
import {AuthPage} from './pages/auth';
import {Modal} from './components/modal';
import {ThingsProvider} from './context/things-context';
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <ThingsProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <MainPage /> } />
            <Route path='/auth' element={ <AuthPage/> } />
          </Routes>
        </BrowserRouter>
      </ThingsProvider>
    </Provider>
  );
}

export default App;
