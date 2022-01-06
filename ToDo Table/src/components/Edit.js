import React from 'react'

function Edit({editFormData,handleEditFormChange,handleEditFormSubmit,handleCloseClick}) {
    return (
        <>
            <tr>
                <td>
                    <input type="text" name='fullName' value={editFormData.fullName} onChange={handleEditFormChange}/>
                </td>
                <td>
                    <input type="text" name='address' value={editFormData.address} onChange={handleEditFormChange}/>
                </td>    
                <td>
                    <input type="text" name='phoneNumber' value={editFormData.phoneNumber} onChange={handleEditFormChange}/>
                </td>
                <td>
                    <input type="email" name='email' value={editFormData.email} onChange={handleEditFormChange}/>
                </td>
                <td>
                    <button type='submit' onClick={handleEditFormSubmit}>Update</button>
                    <button type='submit' onClick={handleCloseClick}>Close</button>
                </td>
            </tr>   
        </>
    )
}

export default Edit
