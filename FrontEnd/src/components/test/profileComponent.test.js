import React from 'react';
import {shallow, mount} from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Profile from '../profileComponent';


Enzyme.configure({adapter: new Adapter()});

describe("<Profile /> component Unit Test", () =>{
    
        
      it('renders 1 <p> components', () => {
        const wrapper = shallow(<Profile/>);
        expect(wrapper.find('p')).toHaveLength(1);
      });

      it('renders 1 id components', () => {
        const wrapper = shallow(<Profile/>);
        expect(wrapper.find('#password')).toHaveLength(1);
      });

      it('renders 1 class components', () => {
        const wrapper = shallow(<Profile/>);
        expect(wrapper.find('.form-control')).toHaveLength(1);
      });

      

      it('contains a button', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.contains(<button type="button" class="btn btn-outline-secondary mr-2" onClick={this.approveBooking}>Approve</button>)).toEqual(true);
      });

      it('contains a button', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.contains(<button type="button" class="btn btn-outline-secondary mr-2" onClick={this.rejectBooking}>Reject</button>)).toEqual(true);
      });

      it('contains a button', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.contains(<button type="button" class="btn btn-outline-secondary" onClick={this.deleteBooking}>Delete</button>)).toEqual(true);
      });

      it('Returns a wrapper with the direct parent of the node in the current wrapper.', () => {
        const wrapper = mount(<Profile />);
        expect(wrapper.find('p').parent().is('div')).to.equal(true);
      });
       
      
    
});
