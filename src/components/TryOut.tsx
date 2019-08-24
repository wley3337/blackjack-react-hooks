import React from 'react'
import { TestPropTypes } from '../interfaces/TestPropTypes'

const TryOut: React.FC<TestPropTypes>= (props)=>{
    const {name, num} = props
    return <div>This is the {name} and number {num} </div>
}

export default TryOut