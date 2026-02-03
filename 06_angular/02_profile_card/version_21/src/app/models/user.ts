export interface User {
  username: string;
  age: number;
  imageUrl: string;
  status: 'active' | 'inactive' | 'blocked';
}
