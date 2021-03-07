import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';

import Tasks from './index';

describe('Tasks component', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Tasks />);
  });

  it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
