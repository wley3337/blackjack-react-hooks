import React from 'react';
import { shallow } from 'enzyme'
import { AutoLogin } from './AutoLogin'

describe('<AutoLogin/>', ()=>{
    const testFn = jest.fn()
    const props: any = {
        getUser: testFn
    }

    it('successfully renders the component', ()=>{
        const wrapper: any = shallow(
                <AutoLogin {...props} />
        );
        expect(testFn.mock.calls.length).toBe(1);
    })
})