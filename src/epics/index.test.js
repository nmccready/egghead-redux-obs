import { Observable } from 'rxjs';
import { VirtualTimeScheduler } from 'rxjs/scheduler/VirtualTimeScheduler';
import { searchBeers } from '../actions';
import createOurStore from '../createOurStore';

it('should perform a search', () => {
  const scheduler = new VirtualTimeScheduler();

  const deps = {
    ajax: {
      getJSON: () => Observable.of([{ name: 'shane' }])
    }
  };

  const store = createOurStore(deps);
  store.dispatch(searchBeers('shane'));

  scheduler.flush();

  const state = store.getState();
  console.log(state);
  expect(state.beers.length).toBe(1);
});
