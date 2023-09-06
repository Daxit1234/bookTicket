import React, { useContext, useEffect } from "react";
import MovieContext from "../../context/Moviecontext";
import TicketsCard from "../../component/cards/TicketsCard";

const BookedTikets = () => {
  const { userTikets, getdata, deleteData } = useContext(MovieContext);
  useEffect(() => {
    getdata();
  }, [userTikets]);
  let handleDelete = (id) => {
    deleteData(id);
    getdata()
  };
  return (
    <div className="mainTiketBox d-flex justify-content-start row">
      {userTikets?.map(
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
  );
};

export default BookedTikets;
