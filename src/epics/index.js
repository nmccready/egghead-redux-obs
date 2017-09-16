import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {receiveBeers, searchBeersError, searchBeersLoading, SEARCHED_BEERS} from "../actions/index";

const beers  = `https://api.punkapi.com/v2/beers`;
const search = (term) => `${beers}?beer_name=${encodeURIComponent(term)}`;
const ajax   = (term) =>
  term === 'skull'
    ? Observable.throw(new Error('Ajax failed!'))
    : Observable.ajax.getJSON(search(term));

function searchBeersEpic(action$) {
  return action$.ofType(SEARCHED_BEERS)
    .debounceTime(500)
    .filter(action => action.payload !== '')
    .switchMap(({payload}) => {

      // loading state in UI
      const loading = Observable.of(searchBeersLoading(true));

      // external API call
      const request = ajax(payload)
        .map(receiveBeers)
        .catch(err => {
          return Observable.of(searchBeersError(err));
        });

      return Observable.concat(
        loading,
        request,
      );
    })
}

export const rootEpic = combineEpics(searchBeersEpic);

