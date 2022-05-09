import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewItem.css';

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{ console.log(data);
const url = `http://localhost:5000/inventory`;
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
      <input className='rounded' placeholder='Product Quantity' type="number" {...register("Quantity", {  min:-4, max:100 })} />  <br/>
      <select {...register("supplier")}>  <br/>
        <option value="Macbook">Macbook</option>
        <option value="Iphone">Iphone</option>
        <option value="Watch">Watch</option>
        <option value="airpod">Airpod</option>
        <option value="other">other</option>
      </select>
      <input className='my-3 ms-2 addButton' type="submit" value="Add ITEM" />
    </form>
        </div>
    );
};

export default AddNewItem;