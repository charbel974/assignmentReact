import React from 'react'
import './userOutput.css'
const userOutput = (props) =>{
    return (
        <div className="userOutput">
            <p>Username:{props.userName} </p>
            <p>i hope i'll be overwritten!</p>
        </div>
    )

};
export default userOutput;