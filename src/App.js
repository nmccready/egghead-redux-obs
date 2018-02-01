import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Beers } from './components/Beers';
import { Search } from './components/Search';
import { cancelSearch, searchBeers } from './actions';

class App extends Component {
  handleBeerSearch = (query) => {
    this.props.searchBeers(query);
  };
  render() {
    return (
      <div className="App">
        <Search // eslint-disable-next-line
          defaultValue={''}
          onChange={this.handleBeerSearch}
          cancel={this.props.cancelSearch}
          messages={this.props.messages}
          loading={this.props.loading}
        />
        <Beers beers={this.props.beers} loading={this.props.loading} />
      </div>
    );
  }
}

export default connect((state) => state, { searchBeers, cancelSearch })(App);
