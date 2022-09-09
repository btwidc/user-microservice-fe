import React from 'react';

import FormInput from '../../additionalComponents/FormInput/FormInput';
import './DepartmentForm.scss';

const DepartmentForm = () => {
  return (
    <>
      <div className='content__header'>
        <h2>Department Form</h2>
      </div>
      <div className='content__body_department_form'>
        <FormInput
          labelName='Name'
          type='text'
          id='name'
          placeholder='Department Name'
          value={''}
          onChange={() => {
          }}
        />
        <button onClick={() => {
        }}>Add
        </button>
      </div>
    </>
  );
};

export default DepartmentForm;