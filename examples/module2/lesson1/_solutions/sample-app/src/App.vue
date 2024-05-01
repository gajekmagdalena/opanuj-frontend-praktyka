<script setup lang="ts">
import Form from './components/Form.vue';
import UsersList from './components/UsersList.vue';
import { users, addUser, deleteUser } from './helpers/form-actions';
</script>

<template>
  <div class="container">
    <Form @addUser="addUser"></Form>
    <UsersList :users="users" @deleteUser="deleteUser"></UsersList>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
