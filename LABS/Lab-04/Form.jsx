import React from 'react';
import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        type="text"
        {...register("textInput", { required: true })}
      />
      {errors.textInput && <div>Die Eingabe wird benötigt.</div>}
      <button type="submit">Absenden</button>
    </form>
  );
}