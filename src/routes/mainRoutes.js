import {
  DEPARTMENTS_ROUTE,
  DEPARTMENT_ROUTE,
  DEPARTMENT_FORM_ROUTE,
} from './routesPaths';

import Departments from '../pages/Departments/Departments';
import Department from '../pages/Department/Department';
import DepartmentForm from '../pages/DepartmentForm/DepartmentForm';

export const mainRoutes = [
  { path: DEPARTMENTS_ROUTE, Component: Departments },
  { path: DEPARTMENT_ROUTE, Component: Department },
  { path: DEPARTMENT_FORM_ROUTE, Component: DepartmentForm },
];