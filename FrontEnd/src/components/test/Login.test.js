import React from 'react';
import {shallow, mount} from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LogIn from '../auth/LogIn';


Enzyme.configure({adapter: new Adapter()});

describe("<Login /> component Unit Test", () =>{
    
        
      it('renders 1 <p> components', () => {
        const wrapper = shallow(<LogIn/>);
        expect(wrapper.find('p')).toHaveLength(1);
      });

      it('renders 1 id components', () => {
        const wrapper = shallow(<LogIn/>);
        expect(wrapper.find('#password')).toHaveLength(1);
      });

      it('renders 1 class components', () => {
        const wrapper = shallow(<LogIn/>);
        expect(wrapper.find('.form-control')).toHaveLength(1);
      });

      

      it('contains a button', () => {
        const wrapper = shallow(<LogIn />);
        expect(wrapper.matchesElement(<button>Login</button>)).toEqual(true);
      });

      it('Returns a wrapper with the direct parent of the node in the current wrapper.', () => {
        const wrapper = mount(<LogIn />);
        expect(wrapper.find('p').parent().is('div')).to.equal(true);
      });
       
      
    
});
