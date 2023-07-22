import React from 'react'
import "./Skeleton.css"

const SkeletonItem = () => {
  return (
    <div style={{backgroundColor:"rgb(4,21,45)"}} className='card'>
        <div className='img1 skeleton'></div>
        <p className='skeleton'></p>
        <p className='skeleton'></p>
        <p className='last skeleton'></p>
    </div>
  )
}

export default SkeletonItem
