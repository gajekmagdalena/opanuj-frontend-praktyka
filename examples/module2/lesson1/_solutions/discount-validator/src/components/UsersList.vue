<template>
  <div>
    <h1>Users List</h1>
    <ul>
      <li v-for="user in users" :key="user.firstName">
        {{ user.firstName }} {{ user.lastName }} {{ user.age }}
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
</style>
