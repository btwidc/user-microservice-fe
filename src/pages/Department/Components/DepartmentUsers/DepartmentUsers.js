import React from 'react';

import UsersTable from '../UsersTable/UsersTable';
import './DepartmentUsers.scss';

const DepartmentUsers = ({ users }) => {
  return (
    <div className='department-users'>
      <h2 className='department-users__header'>Users</h2>
      <div className='department-users__body'>
        {users ?
          <UsersTable users={users} />
            :
          <UsersTable users={[]} />}
      </div>
    </div>
  );
};

export default DepartmentUsers;