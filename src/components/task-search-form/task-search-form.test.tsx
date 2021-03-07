import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import TaskSearchForm from './index';
import { setSearchQuery } from '../../redux/actions/filter';
import { RootState } from '../../redux/reducers';
import { Tasks } from '../../types';

const tasks: Tasks = [];

const filter = {
  searchQuery: '',
};

const initialState: RootState = {
  tasks,
  filter,
};

const mockStore = configureStore([]);

describe('TaskSearchForm component', () => {
  let store: Store;
  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    store = mockStore(initialState);

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <TaskSearchForm />
      </Provider>
    );
  });

  it('renders with given state from mocked Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('dispatches an action on input change', () => {
    renderer.act(() => {
      component.root.findByType('input')
        .props
        .onChange({ target: { value: 'sample text' } });
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(setSearchQuery('sample text'));
  });
});
