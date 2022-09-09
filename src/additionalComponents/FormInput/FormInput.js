import React from 'react';

import './FormInput.scss';

const FormInput = ({ id, type, labelName, placeholder, register, validation }) => {
  return (
    <div className='form-input'>
      <label>
        {labelName}
        <input
          type={type}
          placeholder={placeholder}
          {...register(id, validation)}
        />
      </label>
    </div>
  );
};

export default FormInput;