const baseUrl = 'https://60d49bf961160900173cbb6b.mockapi.io/api/v1/submitters';
const buttonElement = document.querySelector('.submit-button');
const formElement = document.querySelector('.login-form');
const errorElement = document.querySelector('.error-text');

const validateHandler = () => {
  buttonElement.disabled = !formElement.reportValidity();
};

const formData = () => Object.fromEntries(new FormData(formElement));

const submitHandler = (event) => {
  event.preventDefault();

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData()),
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
