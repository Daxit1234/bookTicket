import React from 'react'
import SimpleImageSlider from "react-simple-image-slider"

const ImageSlider = () => {
    const slideImages=[
      { 
        url:"https://assetscdn1.paytm.com/images/catalog/view_item/1900659/1691737049498.jpg?format=webp"
      },
      {
        url:"https://assetscdn1.paytm.com/images/catalog/view_item/1090214/1686059471956.jpg"
      },
      {
        url:"https://images.freekaamaal.com/featured_images/178585_fea.jpg"
      },
      {
        url:"https://assetscdn1.paytm.com/images/catalog/view_item/1578962/1686865453543.jpg?format=webp"
      },
      {
        url:"https://assetscdn1.paytm.com/images/catalog/view_item/942169/1686058855258.jpg?format=webp"
      }
    ]
  return (
    <div>
      <SimpleImageSlider
        width={1370}
        height={400}
        images={slideImages}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        />
    </div>
  )
}

export default ImageSlider
