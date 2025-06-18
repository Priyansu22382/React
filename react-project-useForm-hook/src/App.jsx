import React from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const{
    register,
    handleSubmit,
    formState : {errors,isSubmitting},
  } = useForm();
  async function onSubmit(data){
    await new Promise((resolve,reject) => setTimeout(resolve,5000));
    console.log("Submitting the form with data : ",data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name : </label>
        <input type='text' {...register('firstName', {required:true,
          minLength : {value : 3, message : "Minimum 3 characters required."},
          maxLength : {value : 10, message : "Maximum 10 characters allowed"},
          pattern : {value : /^[A-Za-z]+$/, message : "Only alphabets are allowed."}
        })}/>
        {errors.firstName && (<p style={{ color: "red" }}>{errors.firstName.message}</p>)}
      </div>
      <br/>
      <div>
        <label>Last Name : </label>
        <input type='text' {...register('lastName',{required : true, minLength : {value : 3, message : "Minimum 3 characters required."}, maxLength : {value : 10, message : "Maximum 10 chracters allowed"},pattern : {value : /^[A-Za-z]+$/, message : "Only alphabets are allowed."}})}/>
        {errors.lastName && (<p style={{ color: "red" }}>{errors.lastName.message}</p>)}
      </div>
      <br/>
      <div>
        <label>Email : </label>
        <input type='email' {...register('email', {required : true, pattern : {value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message : "Invalid email format"}})}/>
        {errors.email && (<p style={{ color: "red" }}>{errors.email.message}</p>)}
      </div>
      <br/>
      <input type='submit' disabled={isSubmitting} value={isSubmitting ? "Submitting" : "submit"}/>
    </form>
  )
}

export default App
