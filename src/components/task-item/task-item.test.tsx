import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';

import TaskItem from './index';
import { Tasks } from '../../types';
import { RootState } from '../../redux/reducers';
import toJson from 'enzyme-to-json';

const tasks: Tasks = [
  {
    id: '1',
    title: 'Ознакомиться с TypeScript',
    completed: false,
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

describe('TaskItem component', () => {
  let store;
  let wrapper: ReactWrapper;

  beforeEach(() => {
    store = mockStore(initialState);

    wrapper = mount(
      <Provider store={store}>
        <TaskItem data={tasks[0]} />
      </Provider>
    );
  });

  it('renders with given state from mocked Redux store', () => {
    let component = wrapper.find('.task-item');

    expect(toJson(component)).toMatchSnapshot();
  });
});
