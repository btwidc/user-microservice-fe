import React from 'react';

import UsersTable from '../UsersTable/UsersTable';
import './DepartmentUsers.scss';

const DepartmentUsers = () => {
  return (
    <div className='department-users'>
      <h2 className='department-users__header'>Users</h2>
      <div className='department-users__body'>
        <UsersTable />
      </div>
    </div>
  );
};

export default DepartmentUsers;