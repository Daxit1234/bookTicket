import React from 'react'

const UsersCard = ({id,name,email,index}) => {
  let handleDeleteUser=async(id)=>{
    await fetch(`http://localhost:8080/users/delete/${id}`,{
      method: "DELETE",
    })
  }
  return (
    <tr>
      <th>{index}</th>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <th className='text-danger' onClick={()=>handleDeleteUser(id)}>Delete</th>
    </tr>
  )
}

export default UsersCard
