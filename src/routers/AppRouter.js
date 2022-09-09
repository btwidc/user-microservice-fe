import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { mainRoutes } from '../routes/mainRoutes';

import Departments from '../pages/Departments/Departments';

const AppRouter = () => {
  return (
    <Routes>
      {mainRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Departments />} />
    </Routes>
  );
};

export default AppRouter;
