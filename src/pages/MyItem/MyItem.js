import React, { useEffect, useState } from 'react';

const MyItem = () => {
    const [show,setShow] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-sands-37320.herokuapp.com/inventory')
          .then((res) => res.json())
          .then((data) => setShow(data));
      }, []);
    const deleted = id =>{
        const proceed= window.confirm('are you want to delete?');
        if(proceed){
            const url = `https://mysterious-sands-37320.herokuapp.com/inventory/${id}`;
    fetch(url,{
        method:'DELETE',
    })
    .then(res => res.json())
    .then(data =>console.log(data));
    const remain = show.filter(serve => serve._id !==id);
    setShow(remain);
        }
    }
    return (
        <div>
            <h1 className='fw-bold text-dark mb-4 text-center'>My Cart</h1>
          
            {
                show.map(serve => <div key={serve._id} 
                serve={serve}
                className="container m-3 mb-5">
            
                
                  
                  <h3>{serve.name}</h3>
                  <h3>{serve.price}</h3>
                  <h3 className='text-center'>{serve.supplier }</h3>
                   <button type="button" onClick={()=>deleted(serve._id)} className="btn btn-outline-warning">Delete</button> 
                   
              
                 
              
              </div>
              )}
            
        </div>
    );
};

export default MyItem;