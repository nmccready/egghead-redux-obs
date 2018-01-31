import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { LOAD_STORIES, clear } from '../actions';

function loadStoriesEpic(action$) {
  return action$
    .ofType(LOAD_STORIES)
    .switchMap(() => Observable.of(clear()).delay(2000));
  // .ofType(LOAD_STORIES)
  // .do(a => console.log(a))
  // .ignoreElements();
}

export default combineEpics(loadStoriesEpic);
