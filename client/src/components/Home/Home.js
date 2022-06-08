import React from 'react';
import { useSelector } from 'react-redux';
import './Home.scss';

const Home = () => {
  const tickers = useSelector(state => state.tickerReducer);

  return (
    <div className="tickersContainer">
      {tickers.map((ticker, index) => (
        <div className="tickersList">
          <div className="tickersListItem">{ticker.ticker}</div>
          <div className="tickersListItem">{ticker.change}</div>
          <div className="tickersListItem">{ticker.change_percent}</div>
          <div className="tickersListItem">{ticker.dividend}</div>
          <div className="tickersListItem">{ticker.exchange}</div>
          <div className="tickersListItem">{ticker.last_trade_time}</div>
          <div className="tickersListItem">{ticker.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
