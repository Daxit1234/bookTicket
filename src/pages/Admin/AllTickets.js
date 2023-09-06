import React, { useEffect, useContext } from 'react'
import TicketsCard from '../../component/cards/TicketsCard'
import MovieContext from '../../context/Moviecontext'

const AllTickets = () => {
    const {deleteData,allTickets,getAllTickets}=useContext(MovieContext)
    useEffect(() => {
        getAllTickets()
     }, [allTickets]);
     let handleDelete = (id) => {
        deleteData(id);
        getAllTickets()
      };
  return (
    <div className="mainTiketBox d-flex justify-content-start row">
      {allTickets?.map(
        ({
          _id,
          movieName,
          thiatorName,
          seat,
          time,
          email,
          name,
          address,
          date,
          total
        }) => {
          const newdate = new Date(date?.slice(0, 10));
          return (
            <TicketsCard key={_id}
            _id={_id}
            movieName={movieName}
            thiatorName={thiatorName}
            seat={seat}
            time={time}
            email={email}
            name={name}
            address={address}
            newdate={newdate}
            total={total}
            handleDelete={handleDelete}
            />
          );
        }
      )}
    </div>
  )
}

export default AllTickets
