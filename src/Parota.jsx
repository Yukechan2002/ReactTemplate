import React, { useState } from 'react'

const Parota = () => {

    const [parotta, setParotta] = useState(0);

    const sooriateparotta =() =>{
        setParotta(parotta+5);
    }
  return (
    <div>
      Parota
      <p>Soori Ate {parotta} numbers of parotta</p>
      <button onClick={sooriateparotta}>Sooriparotta</button>
    </div>
  );
}

export default Parota