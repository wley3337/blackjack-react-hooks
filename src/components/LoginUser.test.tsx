
import React from 'react';
import { shallow } from 'enzyme'
import { LoginUser } from './LoginUser'

describe('<LoginUser/>', ()=>{
    const props: any = {
        userLogin: jest.fn(),
        clearErrorMessages: jest.fn(),
        errorMessages: {messages: []},
        password: "",
        username: ""
    }

    it('successfully renders the component', ()=>{
        const wrapper: any = shallow(
                <LoginUser {...props} />
        );
        expect(wrapper).toBeDefined();
    })
})
