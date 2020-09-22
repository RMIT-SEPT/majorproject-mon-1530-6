import React, { Component } from 'react';
import Booking from "./Booking";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Booking /> component Unit Test", () => {
    const mockFn = jest.fn();
    const props = {

        saveBooking: mockFn,
        completed: false,

    }
})
