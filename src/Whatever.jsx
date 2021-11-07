import React from 'react'

function Whatever({whatever, changeName}) {
    // console.log(props);
    return (
        <div>
            {whatever}
            <button onClick={changeName}>Change name</button>
        </div>
    )
}

export default Whatever
