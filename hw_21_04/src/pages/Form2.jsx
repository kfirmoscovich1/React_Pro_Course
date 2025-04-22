import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form2() {
  const { register, handleSubmit, getValues, formState: { errors }, reset } = useForm();
  const [passwordStrength, setPasswordStrength] = useState("");

  const checkStrength = (val) => {
    if (val.length <= 2) return setPasswordStrength("Weak");
    if (val.length <= 6) return setPasswordStrength("Medium");
    setPasswordStrength("Strong");
  };

  const strengthColor = {
    Weak: "text-danger",
    Medium: "text-warning",
    Strong: "text-success",
  };

  const onSub = (data) => {

    if(!data) {
      toast.error("Form submission failed!");
      return;
    }

    toast.success("Form submitted successfully!");
    console.log("Form submitted:", data);
    reset(); // איפוס הטופס
    setPasswordStrength(""); // איפוס החוזק
  };

  return (
    <div className="container">
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit(onSub)} className="col-md-6">

        <label>Name:</label>
        <input {...register("name", { required: true, minLength: 2, pattern: /^[A-Za-zא-ת\s]{2,}$/ })} type="text" className="form-control" />
        {errors.name && <div className="text-danger">* Name must contain only letters and at least 2 characters</div>}

        <label>Email:</label>
        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="email" className="form-control" />
        {errors.email && <div className="text-danger">* Invalid email format</div>}

        <label>Confirm Email:</label>
        <input {...register("confirmEmail", { required: true, validate: (val) => val === getValues("email") })} type="email" className="form-control" />
        {errors.confirmEmail && <div className="text-danger">* Emails do not match</div>}

        <label>Password:</label>
        <input
          {...register("password", { required: true, minLength: 6 })}
          type="password"
          className="form-control"
          onChange={(e) => checkStrength(e.target.value)}
        />
        {errors.password && <div className="text-danger">* Password must be at least 6 characters</div>}
        {passwordStrength && (
          <div className="mt-1">
            Password strength: <span className={strengthColor[passwordStrength]}><strong>{passwordStrength}</strong></span>
          </div>
        )}

        <button type="submit" className='mt-2'>Submit</button>
      </form>
    </div>
  );
}
