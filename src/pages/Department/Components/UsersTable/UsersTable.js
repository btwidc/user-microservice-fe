import React from 'react';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
  },
  {
    field: 'first_name',
    headerName: 'First Name',
    width: 160,
  },
  {
    field: 'last_name',
    headerName: 'Last Name',
    width: 180,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 280,
  },
];

const UsersTable = ({users}) => {
  return (
      <DataGrid
        sx={{
          width: '60%',
          height: 420,
          border: '2px solid #1F1B9D',
          color: '#1F1B9D',
          '& .MuiDataGrid-columnHeader': {
            fontSize: '20px',
          },
          '& .MuiDataGrid-row': {
            fontSize: '17px',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#B0C1D9',
          },
          '& .MuiTablePagination-displayedRows': {
            color: '#1F1B9D',
            fontSize: '16px',
          },
        }}
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
  );
};

export default UsersTable;