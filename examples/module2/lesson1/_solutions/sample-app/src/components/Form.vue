<template>
  <form>
    <div>
      <label for="firstName">First Name:</label>
      <input
        v-model="user.firstName"
        type="text"
        id="firstName"
        name="firstName"
      />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input
        v-model="user.lastName"
        type="text"
        id="lastName"
        name="lastName"
      />
    </div>
    <div>
      <label for="age">Age:</label>
      <input v-model="user.age" id="age" name="age" />
    </div>
    <div>
      <label for="role">Role:</label>
      <select class="select-input" v-model="user.role" id="role" name="role">
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </div>
    <span v-for="error in errors" :key="error" class="error"> {{ error }}</span>
    <span
      v-if="!errors.length"
      :class="{ success: !errors.length, error: errors.length }"
      >{{ message }}</span
    >
    <button type="submit" @click.prevent="handleSubmit">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { formValidator } from '../helpers/validator';

export default defineComponent({
  name: 'Form',
  setup(_, { emit }) {
    const user = ref({
      id: Math.floor(Math.random() * 1000),
      firstName: '',
      lastName: '',
      age: 0,
      role: 'user',
    } as User);
    const errors = ref([] as string[]);
    const message = ref('Fill all the fields to submit the form.');

    function handleSubmit() {
      errors.value = formValidator(
        user.value.firstName,
        user.value.lastName,
        user.value.age
      );
      if (!!errors.value.length) {
        message.value = 'Form has errors!';
      } else {
        message.value = 'Form submitted successfully!';
        emit('addUser', user.value);
        clearForm();
      }
    }

    function clearForm() {
      user.value = {
        firstName: '',
        lastName: '',
        age: 0,
      };
    }

    return {
      user,
      errors,
      message,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.select-input {
  width: 200px;
  height: 35px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background: white;
  color: #444;
  font-size: 14px;
  padding: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
