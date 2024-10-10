import React, { useState } from 'react'
import './ProductForm.css'

const ProductForm = () => {
    // function titlechangehandler(event){
    //     // console.log('hello')
    //     console.log(event.target.value)
    // }

    // for more input type----------------------

    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('')

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }
    
    function dateChangeHandler(event){
        setDate (event.target.value);
    }
  
    // 3rd way-------------------------------
    // const [fullProductItem ,setFullProductItem] = useState({
    //   title:'',
    //   date:'' 
    // });

    // function titleChangeHandler(event,prevState){
    //   let obj1= {...prevState,title:event.target.value}
    //   console.log(obj1);
    //   return obj1;
    // }

    // function dateChangeHandler(event,prevState){
    //   let obj2 = {...prevState,date:event.target.value}
    //   console.log(obj2);
    //   return obj2;
    // }
    function submitHandler(event){
      event.preventDefault();
      //creatin object
      const productData = {
        title:newTitle,
        date:newDate
      }
      console.log(productData)

      //clear the input field -
      setTitle('');
      setDate('');
      //add value to the input type
    }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input type='text' placeholder='Enter product name' value={newTitle} onChange={titleChangeHandler} />
      </div>
      <div>
        <label>Date</label>
        <input type='date' min='2021-01-01' max='2025-01-01'value={newDate} onChange={dateChangeHandler} />
      </div>
      <div>
        <input type='submit' value='Add Item' />
      </div>
    </form>
  )
}

export default ProductForm
