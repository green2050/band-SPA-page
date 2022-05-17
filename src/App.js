import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LedZeppelin from './routes/LedZeppelin';
import Vocals from './routes/Vocals';
import Guitar from './routes/Guitar';
import Bass from './routes/Bass';
import Drums from './routes/Drums';
import Error from './routes/Error.js'
import './App.css';
import DefaultRoute from './routes/DefaultRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LedZeppelin />}>
          <Route index element={<DefaultRoute/> }></Route>
          <Route path='vocals' element={<Vocals />}></Route>
          <Route path='guitar' element={<Guitar />}></Route>
          <Route path='bass' element={<Bass />}></Route>
          <Route path='drums' element={<Drums />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
