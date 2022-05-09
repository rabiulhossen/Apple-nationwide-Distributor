import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Maintenance = () => {
    const [show,setShow] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/inventory")
        .then((res) => res.json())
        .then((data) => setShow(data));
    }, []);
const Navigate = useNavigate();
const details = id =>{
    Navigate(`/maintenance/${id}`)
}
const deleted = _id =>{
    const proceed= window.confirm('are you want to delete?');
    if(proceed){
        const url = `http://localhost:5000/inventory${_id}`;
fetch(url,{
    method:'DELETE',


})
.then(res => res.json())
.then(data =>console.log(data));
const remain = show.filter(serve => serve._id == !_id);
setShow(remain);
    }
}

    return (
        <div>
            <h1>Maintain your Products</h1>
            {
                show.map(serve => <div key={serve._id}> <h3> Name:{serve.name}</h3> <button className='btn btn-primary'onClick={()=>deleted()}>delete</button> </div>)
            }
        </div>
    );
};

export default Maintenance;