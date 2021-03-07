import Enzyme from 'enzyme';
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new ReactSeventeenAdapter() });
