import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { receiveBeers, SEARCHED_BEERS } from '../actions/index';
import { searchBeersError, searchBeersLoading } from '../actions';

const beers = `https://api.punkapi.com/v2/beers`;
const search = term => `${beers}?beer_name=${encodeURIComponent(term)}`;

const ajax = term =>
  term === 'skull'
    ? Observable.throw(new Error('Ajax failed'))
    : Observable.ajax.getJSON(search(term));

function searchBeersEpic(action$) {
  return action$
    .ofType(SEARCHED_BEERS)
    .debounceTime(500)
    .filter(action => action.payload !== '')
    .switchMap(({ payload }) => {
      const loading = Observable.of(searchBeersLoading(true));

      const request = ajax(payload)
        .map(receiveBeers)
        .catch(err => {
          return Observable.of(searchBeersError(err));
        });
      // no need to turn it off as receiveBeers does it for us in reducer
      return Observable.concat(loading, request);
    });
}

export default combineEpics(searchBeersEpic);
