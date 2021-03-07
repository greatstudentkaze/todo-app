import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import TaskList from './index';
import { Tasks } from '../../types';
import { RootState } from '../../redux/reducers';

const tasks: Tasks = [
  {
    id: '1',
    title: 'Ознакомиться с TypeScript',
    completed: false,
  },
  {
    id: '2',
    title: 'Сделать компонент списка',
    completed: true,
  },
  {
    id: '3',
    title: 'Сделать компонент task',
    completed: true,
  },
];

const filter = {
  searchQuery: '',
};

const initialState: RootState = {
  tasks,
  filter,
};

const mockStore = configureStore([]);

jest.mock('../task-item', () => 'TaskItem');

describe('TaskList component', () => {
  let store;
  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    store = mockStore(initialState);

    component = renderer.create(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );
  });

  it('renders with given state from mocked Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
