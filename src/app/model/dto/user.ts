import {Role} from '../enum/role.enum';

export class User {
  id: string;
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
  role: Role;
}
