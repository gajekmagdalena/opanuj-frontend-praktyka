<script setup lang="ts">
import Form from './components/Form.vue';
import UsersList from './components/UsersList.vue';
import { ref } from 'vue';

const users = ref([] as User[]);

const addUser = (user: User) => {
  users.value.push(user);
};
</script>

<template>
  <div class="container">
    <Form @addUser="addUser"></Form>
    <UsersList :users="users"></UsersList>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
