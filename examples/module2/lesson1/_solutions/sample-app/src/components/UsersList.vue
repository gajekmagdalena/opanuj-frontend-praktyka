<template>
  <div>
    <h1>Users List</h1>
    <ul>
      <li v-for="user in users" :key="user.firstName">
        {{ user.firstName }} {{ user.lastName }} {{ user.age }}
        <button class="delete-button" @click="$emit('delete-user', user.id)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UsersList',
  props: {
    users: {
      type: Array as () => User[],
      required: true,
    },
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.delete-button {
  background-color: #f44336; /* Red */
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
}
</style>
