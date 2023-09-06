import React, { useContext, useEffect } from "react";
import MovieContext from "../../context/Moviecontext";
import UsersCard from "../../component/cards/UsersCard";
import "./AllUsers.css"

const AllUsers = () => {
  const {users,getUserDetails}=useContext(MovieContext)
  useEffect(() => {
    getUserDetails()
  },[users]);
  return(
    <div className="container">
      <h1 className="text-info my-5">Users details</h1>
      <table class="table table-striped table-dark shadow-lg p-3 mb-5 bg-light rounded">
  <thead>
    <tr>
      <th>No</th>
      <th>_id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
      {
        users?.map(({_id,name,email},index)=>{
          return(
            <UsersCard
              index={index}
              id={_id}
              name={name}
              email={email}
            />
          )
        })
      }
      </tbody>
      </table>
    </div>
  )
};

export default AllUsers;
