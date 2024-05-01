import { ref } from 'vue';

export const users = ref([] as User[]);

export const addUser = (user: User) => {
  users.value.push(user);
};

export const deleteUser = (id: number) => {
  users.value = users.value.filter(({ id: userId }) => userId !== id);
};
