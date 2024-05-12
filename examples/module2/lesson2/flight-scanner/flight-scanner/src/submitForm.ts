import { ZodError } from 'zod';
import { FormSchema } from './form';

const form = document.querySelector('#flight-form') as HTMLFormElement;
const errors = document.querySelector('#errors') as HTMLUListElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());
  formValidation(formObject);
});

const formValidation = function (formObject: any) {
  try {
    errors.innerHTML = '';
    FormSchema.parse(formObject);
  } catch (error) {
    if (error instanceof ZodError) {
      error.errors.map((error) => {
        const li = document.createElement('li');
        li.textContent = error.message;
        errors.appendChild(li);
      });
    }
  }
};
