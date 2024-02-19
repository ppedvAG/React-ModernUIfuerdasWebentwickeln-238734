import React from 'react';
import { TextField } from '@fluentui/react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

const MyOfficeApp = () => {
  const textFieldStyles = {
    backgroundColor: 'lightblue',
    padding: '10px',
    marginBottom: '10px',
  };

  const buttonStyles = {
    color: 'white',
    backgroundColor: 'blue',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <TextField
        label="Enter your task"
        styles={textFieldStyles}
      />
      <PrimaryButton
        style={buttonStyles}
      >
        Add Task
      </PrimaryButton>
    </div>
  );
};

export default MyOfficeApp;