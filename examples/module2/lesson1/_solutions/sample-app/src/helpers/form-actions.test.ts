import { describe, test, expect } from 'vitest';
import { deleteUser, addUser, users } from './form-actions';

const user = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  role: 'admin',
};

describe('Form actions', () => {
  test('should return an empty array if element is removed', () => {
    addUser(user);
    deleteUser(1);
    expect(users.value.length).toEqual(0);
  });

  test('should return an array with one element if element is added', () => {
    addUser(user);
    expect(users.value.length).toEqual(1);
  });
});
