import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTicker } from './redux/actions/ticker-actions';
import io from 'socket.io-client';
import Home from './components/Home/Home';
import './styles.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io('http://localhost:4000/');
    socket.emit('start');
    socket.on('ticker', payload => dispatch(updateTicker(payload)));
  }, [dispatch]);

  return (
    <div className="container">
      <Home />
    </div>
  );
}

export default App;
