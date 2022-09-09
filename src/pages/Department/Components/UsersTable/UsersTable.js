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

const rows = [
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  },
  {
    "id": 7,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 8,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 9,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
];

const UsersTable = () => {
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
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
  );
};

export default UsersTable;