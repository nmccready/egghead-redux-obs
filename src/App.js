import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Beers from './components/Beers';
import Search from './components/Search';
import { searchBeers, cancelSearch } from './actions';

const App = (props) => (
  <div className="App">
    <Search
      // eslint-disable-next-line
      defaultValue={''}
      onChange={props.searchBeers}
      cancel={props.cancelSearch}
      messages={props.messages}
      loading={props.loading}
    />
    <Beers beers={props.beers} loading={props.loading} />
  </div>
);

export default connect((state) => state, { searchBeers, cancelSearch })(App);
