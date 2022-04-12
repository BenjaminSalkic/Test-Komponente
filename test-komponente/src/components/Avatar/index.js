import React,{useState} from 'react'
import AvatarEditor from 'react-avatar-editor'
import img from "../ImageView/3.jpg"

const Avatar = () => {
    const [rotation,setRotation]=useState(0)
    const [zoom,setZoom]=useState(1.2)
    const [border,setBorder]=useState(0)


    const getInputValue = (event)=>{
        
        const userValue = event.target.value;
        setZoom(userValue);
    };
    const getInputValue2 = (event)=>{
        
        const userValue2 = event.target.value;
        setBorder(userValue2);
    };
  return (
      <>
    <div>
        <AvatarEditor
        image={img}
        width={250}
        height={250}
        border={50}
        borderRadius={border}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={zoom}
        rotate={rotation}
      />
      
    </div>
    zoom:
    <input type="range" min={1} max={5}  onChange={getInputValue}/>
    border:
    <input type="range" min={0} max={100}  onChange={getInputValue2}/>
    <button onClick={() => setRotation(rotation - 90)}>left</button>
    <button onClick={() => setRotation(rotation + 90)}>right</button>
    </>
  )
}

export default Avatar