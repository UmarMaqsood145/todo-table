import React, { useState } from 'react'

function Read({contact,handleEditCLick,handleDeleteClick}) {

    const [style, setStyle] = useState({textDecoration: "none"});

    const doneTask = ()=>{
        setStyle({
            textDecoration: 'line-through',
            color: 'rgba(0,212,255,1)'
        })
    }

    return (
        <>
            <tr>
                <td style={style}>{contact.fullName}</td>
                <td style={style}>{contact.address}</td>
                <td style={style}>{contact.phoneNumber}</td>
                <td style={style}>{contact.email}</td>
                <td>
                    <button type='button' onClick={(event)=> handleEditCLick(event, contact)}>Edit</button>
                    <button type='button' onClick={handleDeleteClick}>Delete</button>
                    <button type='button' onClick={doneTask}>Done</button>
                </td>
            </tr>
        </>
    )
}

export default Read
