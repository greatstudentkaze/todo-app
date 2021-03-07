import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import React from 'react';

import TaskAddingForm from './index';
import { TaskItem as TaskItemType, Tasks } from '../../types';
import { RootState } from '../../redux/reducers';
import { addTask } from '../../redux/actions/tasks';

const tasks: Tasks = [];

const filter = {
  searchQuery: '',
};

const initialState: RootState = {
  tasks,
  filter,
};

const mockStore = configureStore([]);

describe('TaskAddingForm component', () => {
  let store: Store;
  let component: renderer.ReactTestRenderer;

  const hide = jest.fn();
  Date.now = jest.fn(() => 1482363367071);

  beforeEach(() => {
    store = mockStore(initialState);

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <TaskAddingForm hide={hide} />
      </Provider>
    );
  });

  it('dispatches addAction on form submit', () => {
    const task: TaskItemType = {
      id: String(Date.now()),
      title: 'sample title',
      completed: false,
    };

    renderer.act(() => {
      component.root.findByType('input')
        .props
        .onChange({ target: { value: 'sample title' } });
    });

    renderer.act(() => {
      component.root.findByType('form')
        .props
        .onSubmit({ preventDefault: jest.fn() });
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(addTask(task));
  });

  it('hides component on cancel button click', () => {
    renderer.act(() => {
      component.root.findByProps({ onClick: hide })
        .props
        .onClick();
    });

    expect(hide).toHaveBeenCalledTimes(1);
  });
});
