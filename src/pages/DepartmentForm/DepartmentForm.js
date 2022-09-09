import React from 'react';

import { useDispatch } from 'react-redux';
import { createDepartmentAction } from '../../store/actions/departmentActions';

import { useNavigate } from 'react-router-dom';
import { DEPARTMENTS_ROUTE } from '../../routes/routesPaths';

import { useForm } from 'react-hook-form';

import FormInput from '../../additionalComponents/FormInput/FormInput';
import './DepartmentForm.scss';

const DepartmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (departmentFormState) => {
    dispatch(createDepartmentAction(departmentFormState?.name));
    navigate(DEPARTMENTS_ROUTE);
  };

  return (
    <>
      <div className="content__header">
        <h1>Department Form</h1>
      </div>
      <div className="content__body_department_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            id="name"
            type="text"
            labelName="Name"
            placeholder="Department Name"
            register={register}
            validation={{ required: true, minLength: 2, maxLength: 20 }}
          />
          {errors.name && (
            <p className="error-message">
              Name must be longer than or equal to 2 characters
            </p>
          )}
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default DepartmentForm;
