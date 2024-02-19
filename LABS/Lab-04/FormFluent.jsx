import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextField } from '@fluentui/react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

export function FormFluent() {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField {...field} />}
      />
      <PrimaryButton type="submit">Click Me</PrimaryButton>
    </form>
  );
}