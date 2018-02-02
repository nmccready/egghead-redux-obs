import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import {
  searchBeersError,
  searchBeersLoading,
  receiveBeers,
  CANCEL_SEARCH,
  SEARCHED_BEERS,
  NAVIGATE
} from '../actions';

const beers = 'https://api.punkapi.com/v2/beers';
const search = (term) => `${beers}?beer_name=${encodeURIComponent(term)}`;

const ajax = (term) =>
  term === 'skull'
    ? Observable.throw(new Error('Ajax failed'))
    : Observable.ajax.getJSON(search(term)).delay(1000);

function searchBeersEpic(action$) {
  return action$
    .ofType(SEARCHED_BEERS)
    .debounceTime(500)
    .filter((action) => action.payload !== '')
    .switchMap(({ payload }) => {
      const loading = Observable.of(searchBeersLoading(true));

      const blockers = Observable.merge(
        action$.ofType(CANCEL_SEARCH),
        action$.ofType(NAVIGATE)
      );

      const request = ajax(payload)
        // .takeUntil(action$.ofType(CANCEL_SEARCH)) // buggy?
        .takeUntil(blockers)
        .map(receiveBeers)
        .catch((err) => Observable.of(searchBeersError(err)));
      // no need to turn it off as receiveBeers does it for us in reducer
      return Observable.concat(loading, request);
    });
}

export default combineEpics(searchBeersEpic);
