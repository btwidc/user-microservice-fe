import React from 'react';

import ContentHeader from '../../additionalComponents/ContentHeader/ContentHeader';
import DepartmentUsers from './Components/DepartmentUsers/DepartmentUsers';
import './Department.scss';

const Department = () => {
  return (
    <>
      <ContentHeader
        headerTitle='Front-end'
        buttonTitle='Delete'
        onClickButton={() => {
        }}
      />
      <div className='content__body content__body_department'>
        <DepartmentUsers />
      </div>
    </>
  );
};

export default Department;