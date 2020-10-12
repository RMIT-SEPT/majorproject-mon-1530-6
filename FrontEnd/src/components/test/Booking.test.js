import React from 'react';
import {shallow, mount} from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Booking from './components/Booking';


Enzyme.configure({adapter: new Adapter()});

describe("<Booking /> component Unit Test", () =>{
    
        
      it('renders 1 <p> components', () => {
        const wrapper = shallow(<Booking/>);
        expect(wrapper.find('p')).toHaveLength(1);
      });

      it('renders 1 id components', () => {
        const wrapper = shallow(<Booking/>);
        expect(wrapper.find('#appointment_time')).toHaveLength(1);
      });

      it('renders 1 class components', () => {
        const wrapper = shallow(<Booking/>);
        expect(wrapper.find('.form-group row')).toHaveLength(1);
      });

      

      it('contains a button', () => {
        const wrapper = shallow(<Booking />);
        expect(wrapper.matchesElement(<button>Confirm</button>)).toEqual(true);
      });

      it('Returns a wrapper with the direct parent of the node in the current wrapper.', () => {
        const wrapper = mount(<Booking />);
        expect(wrapper.find('p').parent().is('div')).to.equal(true);
      });
       
      
    
});
