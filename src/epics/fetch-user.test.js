import 'rxjs';
import { ActionsObservable } from 'redux-observable';
import fetchUserEpic from './fetch-user';

it('should return correct actions', () => {
  const action$ = ActionsObservable.of({
    type: 'FETCH_USER',
    payload: 'shakyshane'
  });

  const output$ = fetchUserEpic(action$);

  output$.toArray().subscribe((actions) => {
    expect(actions.length).toBe(1);
    console.log(actions);
  });
});
