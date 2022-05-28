import React from 'react';

const Popup = () => {
    return (
        <div className='container'>
  <div className="toast show">
    <div className="toast-header">
      <strong className="me-auto">Toast Header</strong>
      <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div className="toast-body">
      <p>Some text inside the toast body</p>
    </div>
  </div>
        </div>
    );
};

export default Popup;