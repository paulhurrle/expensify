// to configure environment we are running in, wire up Enzyme to work with the adapter

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
});