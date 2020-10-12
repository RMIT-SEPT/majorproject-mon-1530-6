import React, { Fragment } from 'react';
import {shallow, mount} from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from '../Home';




Enzyme.configure({adapter: new Adapter()});

describe("<Login /> component Unit Test", () =>{
           
  it("check if admin button exist and is link to the page correctly", () => {
    const wrapper = shallow(<Home/>);
        expect(wrapper.contains(<a className=" coolBeans body-hov" href="/login">ADMIN</a>)).toEqual(true);
  });

  it("check if employee button exist and is link to the page correctly", () => {
    const wrapper = shallow(<Home/>);
        expect(wrapper.contains( <a className=" coolBeans body-hov" href="/login">EMPLOYEE</a>)).toEqual(true);
  });

  it("check if user button exist and is link to the page correctly", () => {
    const wrapper = shallow(<Home/>);
        expect(wrapper.contains(<a className=" coolBeans body-hov" href="/register">USER</a>)).toEqual(true);
  });
});