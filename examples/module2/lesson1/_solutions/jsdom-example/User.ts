type Role = 'admin' | 'user';
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  age: number;
}
