import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getDepartmentsAction } from '../../store/actions/departmentActions';

import { useNavigate } from 'react-router-dom';
import { DEPARTMENT_FORM_ROUTE } from '../../routes/routesPaths';

import ContentHeader from '../../additionalComponents/ContentHeader/ContentHeader';
import DepartmentCard from './Components/DepartmentCard/DepartmentCard';
import './Departments.scss';

const Departments = () => {
  const { departmentsList, department } = useSelector(
    (state) => state.department,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToDepartmentForm = () => {
    navigate(DEPARTMENT_FORM_ROUTE);
  };

  useEffect(() => {
    dispatch(getDepartmentsAction());
  }, [department]);

  return (
    <>
      <ContentHeader
        headerTitle="Departments"
        buttonTitle="Add"
        onClickButton={navigateToDepartmentForm}
      />
      <div className="content__body content__body_departments">
        {departmentsList?.map((department) => (
          <DepartmentCard
            key={department?.id}
            id={department?.id}
            name={department?.name}
          />
        ))}
      </div>
    </>
  );
};

export default Departments;
