
import React from 'react';
import { shallow } from 'enzyme'
import { LandingPage } from './LandingPage'

describe('<LandingPage/>', ()=>{
    it('successfully renders the component', ()=>{
        const wrapper: any = shallow(
                <LandingPage  />
        );
        expect(wrapper).toBeDefined();
    })
})
