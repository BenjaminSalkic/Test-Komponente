import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import img from "./1.png"
import img2 from "./2.jpg"
import img3 from "./3.jpg"
import img4 from "./4.png"
import img5 from "./5.jpg"
import img6 from "./6.jpg"
import img7 from "./7.jpg"

const images = [
    { url: img },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
    { url: img6 },
    { url: img7 },
  
  ];

const ImageView = () => {

  return (
    <div>
        <SimpleImageSlider
        width={1000}
        height={1000}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}

export default ImageView