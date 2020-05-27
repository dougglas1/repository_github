import api from './api';
import Repository from '../model/Repository';

class Service {
  get<Repository>(repo: string) {
    return api.get<Repository>(`repos/${repo}`);
  }
}

export default new Service();
