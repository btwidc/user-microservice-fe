import api from '../axios/index';

export default class DepartmentService {
  static async getDepartments() {
    return api.get('/department');
  }

  static async getDepartment(id) {
    return api.get(`/department/${id}`);
  }

  static async createDepartment(name) {
    return api.post('/department', { name });
  }

  static async deleteDepartment(id) {
    return api.delete(`/department/${id}`);
  }
}