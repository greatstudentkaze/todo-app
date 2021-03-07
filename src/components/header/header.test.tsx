import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './index';

describe('Header component', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
