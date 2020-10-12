import React from 'react';
import {shallow, mount} from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BoardAddEmployee from "./components/addEmployeeBoard";


Enzyme.configure({adapter: new Adapter()});

describe("<BoardAddEmployee /> component Unit Test", () =>{
    
        
      it('renders 1 <p> components', () => {
        const wrapper = shallow(<BoardAddEmployee/>);
        expect(wrapper.find('p')).toHaveLength(1);
      });

      it('renders 1 id components', () => {
        const wrapper = shallow(<BoardAddEmployee/>);
        expect(wrapper.find('#password')).toHaveLength(1);
      });

      it('renders 1 class components', () => {
        const wrapper = shallow(<BoardAddEmployee/>);
        expect(wrapper.find('.form-control')).toHaveLength(1);
      });

      

      it('contains a button', () => {
        const wrapper = shallow(<BoardAddEmployee />);
        expect(wrapper.matchesElement(<button>Add</button>)).toEqual(true);
      });

      it('Returns a wrapper with the direct parent of the node in the current wrapper.', () => {
        const wrapper = mount(<BoardAddEmployee />);
        expect(wrapper.find('p').parent().is('div')).to.equal(true);
      });
       
      
    
});
