import React from 'react'
import { shallow } from 'enzyme'
import { UserShow } from './UserShow'


describe("<UserShow/>", ()=>{
    it('renders without crashing', () => {
        const props: any ={
            currentUser: { firstName: "Bob", lastName: "Patt"},
            currentUserStats: { wins: 100, losses: 0, bets:[100, 200]},
            getCurrentUserStats: jest.fn()
        }
        const wrapper: any = shallow(
            <UserShow {...props} />
        )
        expect(wrapper).toBeDefined();
    });

})