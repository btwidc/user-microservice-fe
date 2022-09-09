import React from 'react';

import { useNavigate } from 'react-router-dom';
import { DEPARTMENT_FORM_ROUTE } from '../../routes/routesPaths';

import ContentHeader from '../../additionalComponents/ContentHeader/ContentHeader';
import DepartmentCard from './Components/DepartmentCard/DepartmentCard';
import './Departments.scss';

const Departments = () => {
  const navigate = useNavigate();

  const navigateToDepartmentForm = () => {
    navigate(DEPARTMENT_FORM_ROUTE);
  };

  return (
    <>
      <ContentHeader
        headerTitle='Departments'
        buttonTitle='Add'
        onClickButton={navigateToDepartmentForm}
      />
      <div className='content__body content__body_departments'>
        <DepartmentCard
          id={1}
          name='Front-end'
        />
        <DepartmentCard
          id={1}
          name='Front-end'
        />
        <DepartmentCard
          id={1}
          name='Front-end'
        />
      </div>
    </>
  );
};

export default Departments;