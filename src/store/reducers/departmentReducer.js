import { DEPARTMENT_ACTIONS_TYPES } from '../actions/actionsTypes/departmentActionsTypes';

const initialDepartmentsState = {
  message: '',
  department: null,
  departmentsList: [],
};

export const departmentReducer = (state = initialDepartmentsState, action) => {
  switch (action.type) {
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENTS_ACTION: {
      return {
        ...state,
        message: 'Getting departments...',
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENTS_FAILED: {
      return {
        ...state,
        message: 'Get departments failed',
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENTS_SUCCESS: {
      return {
        ...state,
        message: 'Get departments success',
        departmentsList: action.payload,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENT_ACTION: {
      return {
        ...state,
        message: 'Getting department...',
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENT_FAILED: {
      return {
        ...state,
        message: 'Get department failed',
        department: null,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENT_SUCCESS: {
      return {
        ...state,
        message: 'Get department success',
        department: action.payload,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.CREATE_DEPARTMENT_ACTION: {
      return {
        ...state,
        message: 'Creating department...',
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.CREATE_DEPARTMENT_FAILED: {
      return {
        ...state,
        message: 'Create department failed',
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.CREATE_DEPARTMENT_SUCCESS: {
      return {
        ...state,
        message: 'Create department success',
        department: action.payload,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.DELETE_DEPARTMENT_ACTION: {
      return {
        ...state,
        message: 'Deleting department...',
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.DELETE_DEPARTMENT_FAILED: {
      return {
        ...state,
        message: 'Delete department failed',
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.DELETE_DEPARTMENT_SUCCESS: {
      return {
        ...state,
        message: 'Delete department success',
        department: action.payload,
      };
    }
    default:
      return state;
  }
};
