import React from 'react';

const Spinner = () => {
    return (
        <div  style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'>
              <Spinner animation="border" variant="info" />
              <Spinner animation="border" variant="warning" />
        </div>
    );
};

export default Spinner;