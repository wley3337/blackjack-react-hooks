import React from 'react';
import {CreateUser} from '../../src/components/CreateUser';
import { mount } from 'enzyme'

describe('<CreateUser/>', ()=>{
    const props: any = {
        userCreate: jest.fn(),
        clearErrorMessages: jest.fn(),
        errorMessages: { messages: [] }
    }

    it('successfully renders the component', ()=>{
        const wrapper: any = mount(
                <CreateUser {...props} />
        );
        expect(wrapper).toBeDefined();
    })
})