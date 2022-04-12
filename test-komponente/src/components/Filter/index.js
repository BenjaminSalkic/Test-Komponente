import React,{useState} from 'react'


const Filter = () => {
    const fruit = ['Banana', 'Apple', 'Orange','Mango', 'Pineapple', 'Watermelon'];
 
  const [filter, setFilter] = useState('');
  return (
     <div>
        
        Search:
        <input id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
     
      <ul style={{listStyle:'none'}}>
      {fruit.filter(f => f.toUpperCase().includes(filter.toUpperCase()) || filter == '')
            .map(f => <li key={f}>{f}</li>)}
      </ul>

     </div>
  )
}

export default Filter