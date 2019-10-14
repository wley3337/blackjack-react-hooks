import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { RouteComponentProps } from 'react-router-dom'


interface AutoLoginProps extends RouteComponentProps{
    //actions
    getUser: (history:any)=>void

}


export const AutoLogin: React.FC<AutoLoginProps> = ({getUser, history}) => {
    getUser(history)
    return (null)
}


export default connect(null, actions)(AutoLogin) 