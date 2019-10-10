import React from 'react';

interface ErrorMessagesProps{
    messages: Array<string>
}


const ErrorMessagesDisplay: React.FC<ErrorMessagesProps> = ({ messages}):any =>{
    return(
    <div className="errors">
        {messages.map((error:string, index: number) => <p key={`error-${index}`}>{error}</p>)}
    </div>
    )
}


export default ErrorMessagesDisplay