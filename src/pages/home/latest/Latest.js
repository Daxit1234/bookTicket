import React from 'react'
import useFetch from '../../../hook/useFetch'
import MovieCard from '../../../component/cards/MovieCard'
import SkeletonItem from '../../../component/Skeleton/Skeleton';

const Latest = () => {
  const {data,loading}=useFetch("advancedsearch?page=2")
  return (
    <>
    {
        !loading?
        <div className="row mx-2" >
            {data?.results?.map((element) => {
                if (element.imageurl.length===0) {
                    return null;
                }
                return (
                    <div className="col-md-3 col-sm-6" key={element.imdbid}>
                        <MovieCard
                            title={element.title}
                            discription={element.synopsis}
                            imgurl={element.imageurl[0]}
                            released={element.released}
                            imdbrating={element.imdbrating}
                            genre={element.genre}
                            imdbid={element.imdbid}
                        />
                    </div>
                );
            })}
        </div> :
        <>
        <div className='row mx-2'>
            <SkeletonItem/>
            <SkeletonItem/>
            <SkeletonItem/>
            <SkeletonItem/>
            <SkeletonItem/>
            <SkeletonItem/>
            <SkeletonItem/>
            <SkeletonItem/>
        </div>
        </>

    }
    </>
);
}

export default Latest
