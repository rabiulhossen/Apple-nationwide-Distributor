import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewItem.css';

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{ console.log(data);
const url = `https://mysterious-sands-37320.herokuapp.com/inventory`;
fetch(url,{
    method:'POST',
headers:{
    'content-type':'application/json'

},
body:JSON.stringify(data)
})
.then(res=>res.json())
.then(result =>{
    console.log(result)
})



    };
    return (
        <div className='addDiv'>
            <h1 className='text-center text-dark fw-semi-bold'>ADD NEW ITEM</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
      <input className='my-3 rounded'placeholder='Product Name' {...register("name", {required: true})} /> <br/>
      <input className='mb-3 rounded'placeholder='Product description' {...register("about", {required: true})} /> <br/>
      <input className='mb-3 rounded'placeholder='Product image Url' {...register("img", {required: true})} /> <br/>
      <input className='rounded mb-3' placeholder='Product Quantity' type="number" {...register("Quantity", {  min:1, max:1000 })} />  <br/>
      <input className='rounded' placeholder='Product price' type="number" {...register("price")} />  <br/>
      <select {...register("supplier")}>  <br/>
        <option value="Apple Inc">Apple Inc.</option>
    
        <option value="other">other</option>
      </select>
      <input className='my-3 ms-2 addButton' type="submit" value="Add ITEM" />
    </form>
        </div>
    );
};

export default AddNewItem;