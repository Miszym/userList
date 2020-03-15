import React from 'react';
import Header from './components/Header';
import SingleRow from './components/SingleRow';
import UserList from './components/UserList';
import Searchbar from './components/Searchbar';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Header>', () => {
   let wrapper = null;

   beforeAll(() => {
      wrapper = shallow(<Header />);
   });

   it('renders without errors', () => {
      expect(wrapper.find('[data-testid="header"]')).toHaveLength(1);
   });
});

describe('<SingleRow>', () => {
   let wrapper = null;

   beforeAll(() => {
      wrapper = shallow(<SingleRow />);
   });

   it('renders without errors', () => {
      expect(wrapper.find('[data-testid="single-row"]')).toHaveLength(1);
   });
});

describe('<UserList>', () => {
   let wrapper = null;

   beforeAll(() => {
      wrapper = shallow(
         <UserList
            userData={[
               { id: 1, name: 'test', username: 'test' },
               { id: 2, name: 'test2', username: 'test2' }
            ]}
         />
      );
   });

   it('renders without errors', () => {
      expect(wrapper.find('[data-testid="user-list"]')).toHaveLength(1);
   });

   it('generates user list', () => {
      expect(wrapper.find(SingleRow)).toHaveLength(2);
   });
});

describe('<Searchbar>', () => {
   let wrapper = null;

   beforeAll(() => {
      wrapper = shallow(<Searchbar />);
   });

   it('renders without errors', () => {
      expect(wrapper.find('[data-testid="search-input"]')).toHaveLength(1);
   });
});
