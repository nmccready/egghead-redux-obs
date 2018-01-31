import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { FETCH_USER, fetchUserFulfilledAction } from '../actions/index';

const fetchUserEpic = action$ =>
  action$
    .ofType(FETCH_USER)
    .switchMap(({ payload }) =>
      Observable.ajax
        .getJSON(`https://api.github.com/users/${payload}`)
        .map(user => fetchUserFulfilledAction(user))
    ); // eslint-disable-line

export default combineEpics(fetchUserEpic);
