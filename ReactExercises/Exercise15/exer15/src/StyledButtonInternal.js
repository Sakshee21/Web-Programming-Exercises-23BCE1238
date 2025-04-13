import React from 'react';


function StyledButtonInternal() {
  return (
    <>
      <style>{`
        .styled-btn {
          background-color: teal;
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          border: none;
          border-radius: 4px;
        }
      `}</style>
      <button className="styled-btn">Internal Styled Button</button>
    </>
  );
}


export default StyledButtonInternal;
