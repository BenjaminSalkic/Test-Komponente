import React,{useState} from 'react'

const Avrg = () => {
    const [prvi,setPrvi]=useState(1)
    const [drugi,setDrugi]=useState(1)
    const [treci,setTreci]=useState(1)
    const [avrg,setAvrg]=useState(1)

    const getInputValue = (event)=>{
        
        const userValue = event.target.value;
        setPrvi(Number(userValue));
        console.log(prvi);

    };
    const getInputValue2 = (event)=>{
        
        const userValue = event.target.value;
        setDrugi(Number(userValue));
        console.log(drugi);
       
    };
    const getInputValue3 = (event)=>{
        
        const userValue = event.target.value;
        setTreci(Number(userValue));
        console.log(treci);
    };
    const getAvrg = (event)=>{
        // let a=Number(prvi);
        // let b=Number(drugi);
        // let c=Number(treci);
        // let sum=a+b+c;
        // setAvrg(sum/3);
        setAvrg((prvi+drugi+treci)/3);

  };
  return (
    <div>
        <h1>{avrg}</h1>
        <input type="range" min={1} max={10} value={0}  onChange={getInputValue} onMouseUp={getAvrg}/>{prvi}
        <input type="range" min={1} max={10} value={0} onChange={getInputValue2} onMouseUp={getAvrg} />{drugi}
        <input type="range" min={1} max={10} value={0} onChange={getInputValue3} onMouseUp={getAvrg} />{treci}
    </div>
  )
}

export default Avrg