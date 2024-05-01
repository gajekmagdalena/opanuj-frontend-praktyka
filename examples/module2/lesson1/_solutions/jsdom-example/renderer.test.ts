// @vitest-environment jsdom

import { describe, test, expect } from 'vitest';
import { renderItems } from './renderer';

const users: User[] = [
  { id: 1, firstName: 'John', lastName: 'Adams', age: 30, role: 'user' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25, role: 'admin' },
  { id: 3, firstName: 'Jack', lastName: 'Snow', age: 40, role: 'user' },
];

describe('User renderer', () => {
  test('should render all users if admin is rendering the list', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(
      users.length
    );
  });

  test('should render only regular users if non-admin is rendering the list', () => {
    localStorage.setItem('userRole', 'user');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(2);
  });

  test('all rendered items should contain the first name and age', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');

    renderItems(container, users);

    const items = Array.from(container.querySelectorAll('li'));
    items.forEach((item, index) => {
      expect(item.textContent).toContain(users[index].firstName);
      expect(item.textContent).toContain(users[index].age);
    });
  });
});
