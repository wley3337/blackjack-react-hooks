import React from 'react';
import { shallow } from 'enzyme'
import { ErrorMessagesDisplay } from './ErrorMessagesDisplay'

describe('<ErrorMessagesDisplay/>', ()=>{
    const props: any = {
        messages: ["Message 1", "Message 2"]
    }

    it('successfully renders the component', ()=>{
        const wrapper: any = shallow(
                <ErrorMessagesDisplay {...props} />
        );
        expect(wrapper).toBeDefined();
    })
})
