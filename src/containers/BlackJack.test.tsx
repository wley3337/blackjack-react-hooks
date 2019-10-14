import React from 'react'
import { shallow } from 'enzyme'
import { BlackJack } from './BlackJack'

describe('<BlackJack>', ()=>{
    it('successfully renders the component', ()=>{
        const props: any ={
            currentUser: {firstName: ""}
        }
        const wrapper: any = shallow(
                <BlackJack {...props} />
        );

        expect(wrapper).toBeDefined();
    })
})

