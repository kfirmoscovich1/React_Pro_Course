import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form1() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSub = (data) => { console.log(data); };
  const currentYear = new Date().getFullYear();
  const minBirthYear = currentYear - 18;

  return (
    <div className="container mt-4">

      <h2 className="mb-3">Add new user</h2>
      <form onSubmit={handleSubmit(onSub)} className="col-md-6">

        <label className="form-label">Name:</label>
        <input {...register("name", { required: true, minLength: 2 })} type="text" className="form-control" />
        {errors.name?.type === "required" && <div className="text-danger">* Name is required</div>}
        {errors.name?.type === "minLength" && <div className="text-danger">* Name must be at least 2 characters</div>}
        
        <label className="form-label mt-3">Birth year:</label>
        <input {...register("year", { required: true, min: 1900, max: minBirthYear })} defaultValue={minBirthYear} type="number" className="form-control" />
        {errors.year?.type === "required" && <div className="text-danger">* Birth year is required</div>}
        {errors.year?.type === "min" && <div className="text-danger">* Year must be after 1900</div>}
        {errors.year?.type === "max" && <div className="text-danger">* You must be at least 18 years old</div>}
        
        <button className='mt-2'>Submit</button>
      </form>
    </div>
  );
}
