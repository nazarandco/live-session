const baseUrl = 'https://60c9e9df772a760017204c05.mockapi.io/api/v1/form';
const buttonElement = document.querySelector('.submit-button');
const formElement = document.querySelector('.login-form');
const inputEmail = document.querySelector('#email');
const inputName = document.querySelector('#name');
const inputPasword = document.querySelector('#password');
const errorElement = document.querySelector('.error-text');

const validateHandler = () => {
  buttonElement.disabled = !formElement.reportValidity();
};
validateHandler();

const getFormData = () => Object.fromEntries(new FormData(formElement));

const submitHandler = (event) => {
  event.preventDefault();

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(getFormData),
  })
    .then((response) => response.json())
    .then((result) => {
      alert(JSON.stringify(result));

      formElement.reset();
    })
    .catch(() => {
      errorElement.textContent = 'Failed to create user';
    });
};

formElement.addEventListener('input', validateHandler);
formElement.addEventListener('submit', submitHandler);
