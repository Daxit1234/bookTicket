import React from 'react'
import "./DetailsSkeleton.css"

const DetailsSkeleton = () => {
  return (
    <div className='d-flex'>
      <div className='img skeleton'></div>
      <div className='details'>
        <p className='title skeleton'></p>
        <div className='d-flex'>
            <p className='genras skeleton'> </p>
            <p className='genras skeleton'> </p>
            <p className='genras skeleton'> </p>
        </div>
        <div className='d-flex m-3'>
            <span className='skeleton'></span>
            <p className='bookbtn mx-3 skeleton'> </p>
        </div>
        <p className='title skeleton'></p>
        <p className='desc skeleton mt-4'></p>
        <p className='desc skeleton'></p>
        <p className='desc skeleton'></p>
      </div>
    </div>
  )
}

export default DetailsSkeleton
