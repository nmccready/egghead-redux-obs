import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { FETCH_STORIES, fetchStoriesFulfilledAction } from '../actions/index';

const topStories =
  'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

const url = id =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

const fetchStoriesEpic = action$ =>
  action$.ofType(FETCH_STORIES).switchMap(() =>
    Observable.ajax
      .getJSON(topStories)
      // .do(console.log)
      // .ignoreElements())
      // slice first 5 ids
      .map(ids => ids.slice(0, 5))
      // convert ids -> urls
      .map(ids => ids.map(url))
      // convert urls -> ajax
      .map(urls => urls.map(_url => Observable.ajax.getJSON(_url)))
      // .do(console.log)
      // .ignoreElements())
      // execute 5 ajax requests
      .mergeMap(reqs => Observable.forkJoin(reqs))
      // results -> store
      .map(stories => fetchStoriesFulfilledAction(stories))
  ); // eslint-disable-line

export default combineEpics(fetchStoriesEpic);
