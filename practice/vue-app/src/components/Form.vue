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
    <span v-for="error in errors" :key="error" class="error"> {{ error }}</span>
    <span
      v-if="!errors.length"
      :class="{ success: !errors.length, error: errors.length }"
      >{{ message }}</span
    >
    <button type="submit" @click="handleSubmit" @click.prevent>Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { formValidator } from '../helpers/validator';

export default defineComponent({
  name: 'Form',
  setup() {
    const user = ref({
      firstName: '',
      lastName: '',
      age: 0,
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
      }
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

<style scoped></style>
