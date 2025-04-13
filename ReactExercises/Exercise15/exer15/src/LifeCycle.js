import React, { useState } from 'react';
import LifecycleDemo from './LifeCycleDemo';


function LifeCycle() {
  const [show, setShow] = useState(true);


  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>React Lifecycle Methods Demo</h2>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? 'Unmount Component' : 'Mount Component'}
      </button>
      {show && <LifecycleDemo />}
    </div>
  );
}


export default LifeCycle;


