import React from 'react';

const Card = () => {
  return (
    // Option 1:
    // <>
    //   <h1>John</h1>
    //   <h3>React course</h3>
    //   <button>Like</button>
    // </>

    // Option 2:
    <React.Fragment>
      <h1>John</h1>
      <h3>React course</h3>
      <button>Like</button>
    </React.Fragment>
  );
};

export default Card;
