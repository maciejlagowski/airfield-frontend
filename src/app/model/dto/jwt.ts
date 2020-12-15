import {Role} from '../enum/role.enum';

export class Jwt {
  token: string;
  expirationTime: string;
  role: Role;
  name: string;
}
