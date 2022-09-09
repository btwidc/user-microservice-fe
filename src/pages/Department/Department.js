import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  getDepartmentAction,
  deleteDepartmentAction,
} from '../../store/actions/departmentActions';

import { useNavigate, useParams } from 'react-router-dom';
import { DEPARTMENTS_ROUTE } from '../../routes/routesPaths';

import ContentHeader from '../../additionalComponents/ContentHeader/ContentHeader';
import DepartmentUsers from './Components/DepartmentUsers/DepartmentUsers';
import './Department.scss';

const Department = () => {
  const { department } = useSelector((state) => state.department);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteDepartment = () => {
    dispatch(deleteDepartmentAction(id));
    navigate(DEPARTMENTS_ROUTE);
  };

  useEffect(() => {
    dispatch(getDepartmentAction(id));
  }, []);

  return (
    <>
      <ContentHeader
        headerTitle={department?.name}
        buttonTitle="Delete"
        onClickButton={deleteDepartment}
      />
      <div className="content__body content__body_department">
        {department?.users ? (
          <DepartmentUsers users={department?.users} />
        ) : (
          <DepartmentUsers users={[]} />
        )}
      </div>
    </>
  );
};

export default Department;
